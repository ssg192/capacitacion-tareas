/**
 * Canonical Pet Clay palette and shape tokens for programmatic checks.
 * Keep in sync with DESIGN.md and src/routes/layout.css (@theme).
 */

/** Brand and surface colors from the design system frontmatter. */
export const colors = {
	primary: '#3a6758',
	onPrimary: '#ffffff',
	secondary: '#396285',
	onSecondary: '#ffffff',
	tertiary: '#685d47',
	onTertiary: '#ffffff',
	tertiaryContainer: '#dacbb0',
	background: '#fbf9f8',
	onBackground: '#1b1c1c',
	surface: '#fbf9f8',
	onSurface: '#1b1c1c',
	error: '#ba1a1a',
	onError: '#ffffff'
} as const;

/** Border radii used for claymorphic cards, buttons, and pills. */
export const radii = {
	sm: '0.5rem',
	DEFAULT: '1rem',
	md: '1.5rem',
	/** Cards / primary containers (32px). */
	lg: '2rem',
	xl: '3rem',
	full: '9999px'
} as const;

/** Semantic spacing aligned to the 8px base rhythm. */
export const spacing = {
	base: '8px',
	container: '24px',
	gap: '16px',
	section: '40px'
} as const;

/** Desktop content max width from the layout guidelines. */
export const layout = {
	maxContent: '1200px'
} as const;
