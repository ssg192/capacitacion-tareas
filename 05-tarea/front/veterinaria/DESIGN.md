---
name: Pet Clay
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#404945'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#717975'
  outline-variant: '#c0c8c3'
  surface-tint: '#3a6758'
  primary: '#3a6758'
  on-primary: '#ffffff'
  primary-container: '#a7d7c5'
  on-primary-container: '#325f51'
  inverse-primary: '#a1d1bf'
  secondary: '#396285'
  on-secondary: '#ffffff'
  secondary-container: '#aed6fe'
  on-secondary-container: '#345d80'
  tertiary: '#685d47'
  on-tertiary: '#ffffff'
  tertiary-container: '#dacbb0'
  on-tertiary-container: '#605540'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcedda'
  primary-fixed-dim: '#a1d1bf'
  on-primary-fixed: '#002118'
  on-primary-fixed-variant: '#214f41'
  secondary-fixed: '#cee5ff'
  secondary-fixed-dim: '#a3cbf3'
  on-secondary-fixed: '#001d32'
  on-secondary-fixed-variant: '#1f4a6c'
  tertiary-fixed: '#f1e1c5'
  tertiary-fixed-dim: '#d4c5aa'
  on-tertiary-fixed: '#221b09'
  on-tertiary-fixed-variant: '#504631'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 28px
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  label-md:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Quicksand
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  element-gap: 16px
  section-margin: 40px
---

## Brand & Style

This design system is built on the principles of **Claymorphism**, a style that emphasizes tactile, 3D-like surfaces that appear soft, squishy, and friendly. Targeted at pet owners seeking a stress-free veterinary experience, the UI evokes feelings of safety, playfulness, and approachability.

The aesthetic avoids the "flat" coldness of traditional medical apps by using heavy inner shadows and diffused outer shadows to simulate physical clay objects. The interface should feel "puffy" and inviting, encouraging interaction through a sense of touch and warmth.

## Colors

The palette utilizes soft pastels to reduce the anxiety often associated with medical environments.
- **Primary (Mint Green):** Used for main actions and positive states, representing health and vitality.
- **Secondary (Sky Blue):** Used for information and secondary interactions, evoking calm and trust.
- **Tertiary (Warm Sand):** Used for backgrounds and accent containers to add organic warmth.
- **Neutral:** A high-contrast charcoal (not pure black) is used for typography to ensure maximum legibility against the light pastel surfaces.

All colors are applied with a slight saturation to prevent the "washed out" look, maintaining a vibrant, modern feel.

## Typography

This design system exclusively uses **Quicksand** for its rounded terminals, which perfectly complement the claymorphic shapes. 

- **Headlines:** Set with tight letter spacing and bold weights to anchor the "heavy" visual elements.
- **Body:** Uses medium weights (500) rather than regular (400) to ensure text holds its own against the strong 3D shadows of the containers.
- **Hierarchy:** Established through significant weight changes rather than extreme size shifts, maintaining a compact and "contained" look suitable for card-based layouts.

## Layout & Spacing

The layout philosophy relies on **Safe Areas and Dynamic Padding** rather than a rigid column grid. Because claymorphic elements occupy significant visual volume due to their shadows, generous whitespace is required to prevent the UI from feeling cluttered.

- **Mobile:** Elements should span the full width minus a 20px side margin. Vertical spacing between cards should be at least 16px to accommodate shadow bleed.
- **Desktop/Tablet:** Use a centered max-width container (1200px) with elements arranged in a flexible masonry or balanced grid.
- **Internal Padding:** Buttons and cards must have large internal padding (minimum 24px) to ensure the 3D "inner glow" effect doesn't overlap with content.

## Elevation & Depth

Depth is the defining characteristic of this design system. It is achieved through a combination of three distinct shadow layers:

1.  **Outer Shadow:** A large, soft, diffused drop shadow (e.g., `blur: 30px, opacity: 0.1`) using a darker tint of the element's background color rather than pure gray.
2.  **Inner Highlight:** A top-left aligned white inner shadow (`blur: 12px, opacity: 0.8`) to simulate a light source hitting the "top" of the clay object.
3.  **Inner Shadow:** A bottom-right aligned darker inner shadow (`blur: 16px, opacity: 0.2`) to create the "puffy" 3D inset effect.

Surface layers are never flat. Backgrounds should use very subtle radial gradients to reinforce the sense of a non-flat world.

## Shapes

The shape language is extremely rounded. Sharp corners are strictly prohibited.
- **Primary Containers/Cards:** Use a 32px border radius.
- **Buttons and Inputs:** Use a 24px border radius or full pill-shape.
- **Selection Indicators:** Always use pill-shapes (fully rounded ends).

The "squishy" nature of the brand is communicated through these exaggerated curves, which mimic the look of molded clay or smoothed stones.

## Components

### Buttons
Primary buttons use the Mint Green base with a pronounced 3D effect. On hover, the inner shadow should deepen slightly to simulate the button being "pressed" into the clay.

### Cards
Cards are the primary container. They should use the Warm Sand or white background with a 32px radius. Content inside cards should be centered to maintain the "object" feel.

### Input Fields
Inputs appear "sunken" into the surface. This is achieved by reversing the claymorphic effect: use a dark inner shadow at the top and a light highlight at the bottom to create an "inset" look.

### Chips & Tags
Small, highly rounded (pill-shaped) elements. These use the Secondary Sky Blue to categorize pet types or appointment statuses.

### Interactive "Paws"
A custom component for ratings or progress trackers, using paw-print shapes that share the same claymorphic depth and 3D shadows as the buttons.

### Checkboxes & Radios
Larger than standard (24x24px). When active, they should appear "popped out" with high-intensity shadows; when inactive, they should appear flat or slightly inset.