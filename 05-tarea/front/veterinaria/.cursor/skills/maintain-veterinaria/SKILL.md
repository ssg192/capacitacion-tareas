---
name: maintain-veterinaria
description: >-
  Maintains the veterinaria (Pet Clay) SvelteKit app with design-system
  compliance, Tailwind-only styling, commented code, and Vitest unit tests.
  Use when working in the veterinaria project, adding or editing components,
  pages, styles, or tests, or when the user mentions Pet Clay, DESIGN.md,
  or veterinaria UI work.
---

# Maintain Veterinaria (Pet Clay)

Project skill for `/veterinaria`. Stack: **SvelteKit 2 + Svelte 5 (runes) + Tailwind CSS 4 + Vitest**.

## Rules (mandatory)

Apply these rules on every change:

- Todo codigo generado debe tener comentarios, pruebas unitarias con vitest; en caso de ser HTML deben usarse puras clases de tailwind.
- Se deben usar para acciones primarias el primary color del tema de tailwind, y para acciones secundarias el secondary color.
- Todos los componentes deben apegarse al design system @veterinaria/DESIGN.md

## Before coding

1. Read [`DESIGN.md`](../../../DESIGN.md) (brand, colors, typography, elevation, shapes, components).
2. Prefer extending existing `$lib` components over inventing new visual patterns.
3. Keep Svelte 5 runes (`$props`, `$state`, `$derived`, etc.). Do not introduce legacy Svelte patterns.

## Design system checklist

Claymorphism (soft, puffy, tactile). Never flat clinical UI.

| Area | Must follow |
|------|-------------|
| Font | Quicksand only |
| Corners | No sharp corners; cards ~32px; buttons/inputs ~24px or pill |
| Primary | Mint `#3a6758` — main CTAs, positive states |
| Secondary | Sky `#396285` — secondary actions, chips/tags, info |
| Tertiary | Warm sand — soft surfaces / accents |
| Cards | Warm sand or white, large padding (≥24px), centered content feel |
| Buttons | Clay 3D shadows; hover deepens inner shadow (“pressed”) |
| Inputs | Sunken/inset clay (reverse shadows) |
| Layout | Mobile: full width − ~20px sides; desktop: max 1200px centered; generous whitespace |

Depth layers (outer soft shadow + top-left inner highlight + bottom-right inner shadow). Backgrounds may use subtle radial gradients.

Full tokens and copy: [`DESIGN.md`](../../../DESIGN.md).

## Tailwind

- Markup/styling: **Tailwind utility classes only** (no ad-hoc CSS modules / unstructured `<style>` for layout/color unless a clay shadow cannot be expressed as utilities/theme tokens).
- Map DESIGN.md colors into `@theme` in `src/routes/layout.css` if missing (`--color-primary`, `--color-secondary`, surfaces, on-* tokens).
- Primary actions: `bg-primary text-on-primary` (and clay shadow utilities/tokens).
- Secondary actions: `bg-secondary text-on-secondary`.
- Prefer theme tokens (`bg-primary`, `text-on-surface`, `rounded-lg`, etc.) over raw hex in markup.

### Action button pattern

```svelte
<!-- Primary CTA -->
<button
	type="button"
	class="rounded-3xl bg-primary px-6 py-3 font-semibold text-on-primary shadow-[...] hover:shadow-[...]"
>
	Agendar cita
</button>

<!-- Secondary action -->
<button
	type="button"
	class="rounded-3xl bg-secondary px-6 py-3 font-semibold text-on-secondary shadow-[...] hover:shadow-[...]"
>
	Ver historial
</button>
```

## Comments

Every generated file/function/component must include comments that explain **why** and non-obvious behavior:

- Module/file purpose at top when useful
- Non-obvious logic, props contracts, accessibility notes
- Spanish or English is fine; stay consistent with nearby files

## Tests (Vitest)

New or changed logic/UI requires unit tests. Run: `npm run test` (or `npm run test:unit`).

| Kind | Location | Notes |
|------|----------|--------|
| Pure TS/JS | `*.spec.ts` / `*.test.ts` next to source | Node project in `vite.config.ts` |
| Svelte components | `*.svelte.spec.ts` / `*.svelte.test.ts` | Browser + Playwright via `vitest-browser-svelte` |

Follow examples in `src/lib/vitest-examples/`.

### Server/unit example

```ts
import { describe, it, expect } from 'vitest';
import { formatPetName } from './formatPetName';

describe('formatPetName', () => {
	it('trims and capitalizes', () => {
		expect(formatPetName('  luna ')).toBe('Luna');
	});
});
```

### Component example

```ts
import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import PrimaryButton from './PrimaryButton.svelte';

describe('PrimaryButton.svelte', () => {
	it('renders the label', async () => {
		render(PrimaryButton, { label: 'Agendar' });
		await expect.element(page.getByRole('button', { name: 'Agendar' })).toBeInTheDocument();
	});
});
```

## Workflow

Copy and track:

```
Task Progress:
- [ ] Read DESIGN.md for the affected UI
- [ ] Implement with comments + Tailwind-only classes
- [ ] Primary → theme primary; secondary → theme secondary
- [ ] Add/update Vitest specs
- [ ] Run npm run test / check / lint as needed
```

## Out of scope

- Do not invent a second visual language (flat Material, sharp cards, Inter/system fonts).
- Do not skip tests for “small” UI or utils.
- Do not hardcode competing brand colors outside the Pet Clay palette.
