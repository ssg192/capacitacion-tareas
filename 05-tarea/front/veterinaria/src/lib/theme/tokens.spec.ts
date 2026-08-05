import { describe, expect, it } from 'vitest';
import { colors, layout, radii, spacing } from './tokens';

/**
 * Guards against drift between the TypeScript token map and DESIGN.md.
 * CSS @theme in layout.css must mirror these same values.
 */
describe('Pet Clay theme tokens', () => {
	it('exposes brand colors from DESIGN.md', () => {
		expect(colors.primary).toBe('#3a6758');
		expect(colors.onPrimary).toBe('#ffffff');
		expect(colors.secondary).toBe('#396285');
		expect(colors.onSecondary).toBe('#ffffff');
		expect(colors.tertiary).toBe('#685d47');
		expect(colors.tertiaryContainer).toBe('#dacbb0');
		expect(colors.background).toBe('#fbf9f8');
		expect(colors.onSurface).toBe('#1b1c1c');
		expect(colors.error).toBe('#ba1a1a');
	});

	it('exposes claymorphic radii from DESIGN.md', () => {
		expect(radii.sm).toBe('0.5rem');
		expect(radii.DEFAULT).toBe('1rem');
		expect(radii.md).toBe('1.5rem');
		expect(radii.lg).toBe('2rem');
		expect(radii.xl).toBe('3rem');
		expect(radii.full).toBe('9999px');
	});

	it('exposes spacing and content width from DESIGN.md', () => {
		expect(spacing.base).toBe('8px');
		expect(spacing.container).toBe('24px');
		expect(spacing.gap).toBe('16px');
		expect(spacing.section).toBe('40px');
		expect(layout.maxContent).toBe('1200px');
	});
});
