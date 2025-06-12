# Changelog

## 0.1.16

### 🎨 SVG Icon Sizing Consistency

- **Fixed size 1 icon inconsistency**: Updated size 1 SVGs across all components to use `calc(var(--space-3) * 1.175)` instead of `var(--space-4)`
  - **Button**: Size 1 SVGs now properly sized at ~14px instead of 16px
  - **IconButton**: Consistent smaller icons for compact size 1 variant
  - **BaseMenu/DropdownMenu**: Menu item icons now scale correctly with size
  - **Sidebar**: All sidebar menu button icons follow consistent sizing
  - **System-wide consistency**: Sizes 1-2 now use calculated values, sizes 3-4 use standard tokens

### 🖼️ Image Component Enhancements

- **Fixed fadeIn behavior for cached images**: Resolved issue where cached images would remain invisible
  - **Smart loading detection**: Added `useEffect` to check `img.complete && img.naturalWidth > 0` for already-loaded images
  - **Immediate visibility**: Cached images now appear instantly without waiting for onLoad event
  - **Cross-variant support**: Fix applied to surface, blur, and asChild variants
- **New fadeIn prop control**: Added `fadeIn` boolean prop (default: true) for controlling fade-in behavior
  - **Content images**: `fadeIn={true}` provides smooth loading transitions
  - **Background images**: `fadeIn={false}` ensures immediate visibility
  - **Better UX**: Prevents jarring loading states for decorative elements

### 🏠 Sidebar Component Improvements

- **Added collapsible functionality**: Implemented smooth sidebar collapse/expand with transform-based animations
  - **Transform animations**: Uses `translateX(-100%/100%)` instead of width-based animations for better performance
  - **Smooth transitions**: `transition: transform var(--duration-3) var(--ease-2)` with reduced motion support
  - **State management**: Proper `data-state="collapsed/expanded"` attributes for styling
- **Enhanced SidebarTrigger**: Added support for custom icons with fallback
  - **Flexible icon support**: Accepts children prop for custom icons (e.g., PanelLeft from Lucide)
  - **Fallback behavior**: Defaults to ChevronDown when no children provided
  - **Consistent styling**: Inherits IconButton ghost variant styling
- **Fixed padding consistency**: Resolved size 1 header/footer padding mismatch
  - **Container alignment**: Size 1 containers now use `--sidebar-content-padding: var(--space-1)`
  - **Visual consistency**: Header, content, and footer padding now properly aligned
  - **Size-specific styling**: Both size 1 and 2 have consistent internal spacing

### 🎮 Comprehensive Sidebar Playground

- **Added interactive playground**: New `/playground/sidebar` page with full sidebar demonstration
  - **Live controls**: Toggle type, variant, menu variant, side, and size
  - **Real navigation**: Working menu items with active states and sub-menus
  - **Workspace dropdown**: Functional workspace selector in footer
  - **Background integration**: Unsplash background image with proper fadeIn={false} usage
  - **Responsive design**: Proper layout with collapsible sidebar trigger

### 📚 Documentation Updates

- **Enhanced Image documentation**: Added comprehensive fadeIn prop documentation
  - **API reference**: Complete prop table with fadeIn boolean description
  - **Usage examples**: When to use fadeIn={false} for backgrounds vs fadeIn={true} for content
  - **Code examples**: Practical demonstrations of both fade behaviors
- **Improved component examples**: Better real-world usage patterns across documentation

### 🔧 Technical Improvements

- **CSS architecture**: Improved specificity and maintainability across components
- **Animation performance**: Transform-based animations for better GPU acceleration
- **State management**: Enhanced sidebar context with proper state handling
- **TypeScript consistency**: Better type definitions and prop handling
- **Reduced motion support**: All new animations respect `prefers-reduced-motion: reduce`

### 🎯 Design System Consistency

- **Token usage**: Consistent use of design system spacing and timing tokens
- **Component patterns**: Sidebar follows established patterns from other components
- **Interactive states**: Unified hover, focus, and active state implementations
- **Accessibility**: Proper ARIA attributes and keyboard navigation support

## 0.1.10

### 🎯 Icon Size Improvements

- **Enhanced icon visibility**: Increased icon sizes across all button components for better readability

  - **Size 1**: 13px → **16px** (+3px)
  - **Size 2**: 15px → **18px** (+3px)
  - **Size 3**: 17px → **20px** (+3px)
  - **Size 4**: 19px → **22px** (+3px)

- **Consistent sizing**: All button types now use unified icon sizes

  - **Button**: Updated SVG sizing for improved visual balance with text
  - **IconButton**: Enhanced icon prominence for better usability
  - **ToggleIconButton**: Inherits IconButton sizing for consistency

- **Simplified examples**: Removed redundant manual icon sizing from playground examples
  - **Automatic inheritance**: Icons now automatically get correct size from CSS
  - **Single source of truth**: Icon sizes defined only in component CSS
  - **Cleaner codebase**: Eliminated duplicate size calculations

### 🔧 Technical Improvements

- **CSS-driven sizing**: Icons automatically sized via `& :where(svg)` selectors
- **Better maintainability**: Icon size changes only require CSS updates
- **Consistent progression**: Clean even-number sizing (16, 18, 20, 22px)

## 0.1.9

### 🖼️ Major Image Component Enhancements

- **BREAKING/IMPROVED: Revolutionary asChild API**: Complete rewrite of asChild functionality for intuitive usage

  - **Perfect API**: Now supports `<Image src="..." alt="..." asChild><a href="#" /></Image>` - all image props go on Image component
  - **Automatic style resets**: No more manual styling needed - automatically resets `textDecoration`, `border`, `background`, etc.
  - **Built-in img injection**: Component automatically creates `<img>` elements inside child components
  - **Follows Radix patterns**: Now matches Card and other Radix component asChild behavior

- **NEW: Blur variant**: Added `variant="blur"` with sophisticated layered blur effect

  - **Layered architecture**: Foreground sharp image with blurred, saturated background offset
  - **Design system integration**: Uses CSS variables (`--blur-filter`, `--blur-opacity`, `--blur-offset-y`)
  - **Full compatibility**: Works with all existing props (radius, shadow, fit, etc.)
  - **AsChild support**: Blur variant fully supports asChild with proper interactive states

- **Enhanced transitions**: Built-in smooth animations using design system tokens

  - **Design system compliance**: Uses `transition: var(--transition-button)` instead of hardcoded values
  - **Interactive state consistency**: Hover, focus, and active states follow Card component patterns
  - **Automatic compatibility**: No manual transition styles needed for asChild usage

- **Improved CSS architecture**: Better specificity and linting compliance
  - **Proper stylelint directives**: Added `/* stylelint-disable selector-max-type */` for type selectors
  - **Card-pattern consistency**: Interactive states follow established Card component architecture
  - **Clean CSS variables**: Blur effects use CSS custom properties for maintainability

### 🔧 Technical Improvements

- **CSS linter compliance**: Fixed all selector specificity and type selector issues
- **TypeScript accuracy**: Proper typing for React.cloneElement operations and child prop handling
- **Performance optimization**: Reduced redundant style applications and improved render efficiency
- **Error handling**: Better void element handling to prevent img children errors

### 🎨 Design System Consistency

- **Variant naming alignment**: Changed from `variant="default"` to `variant="surface"` matching Radix conventions
- **Token usage standardization**: Consistent use of design system tokens across all components
- **Interactive state patterns**: Unified hover, focus, and active state implementations

## 0.1.8

### 🖼️ New Image Component

- **Added comprehensive Image component**: Framework-agnostic image component with full prop-based styling
  - **Object fit control**: `fit` prop with values `cover`, `contain`, `fill`, `scale-down`, `none`
  - **Shadow system**: `shadow` prop with values `1` through `6` using design system shadow tokens
  - **Radius support**: Fully responsive to theme radius settings and explicit `radius` prop
  - **Responsive sizing**: Support for `width`, `height`, `maxWidth`, `maxHeight` with responsive objects
  - **Native lazy loading**: `loading="lazy"` by default with option for `loading="eager"`
  - **Accessibility ready**: Proper alt text handling and all standard img attributes
- **Shadow prop system**: New `shadow.props.ts` with design system integration
- **Enhanced CSS utilities**: Added object-fit and box-shadow utilities to component system

### 🔧 Font Rendering Fixes

- **Fixed Text component font inheritance**: Added explicit `font-family: var(--default-font-family)` to ensure Geist font renders consistently
  - Resolves issue where Text components wouldn't show Geist font when used as a library
  - Now consistent with Button and other components that explicitly declare font-family
  - Better fallback handling for environments without proper Theme wrapper

### 🎨 Theme Integration

- **Improved radius inheritance**: Fixed Image component to properly inherit theme radius scaling
  - Responds correctly to ThemePanel radius changes
  - Uses `max(var(--radius-3), var(--radius-full))` pattern consistent with other components
  - Proper CSS variable cascade from theme context

## 0.1.6

### 🚀 Production Readiness Improvements

- **BREAKING**: IconButton now requires accessibility attributes (`aria-label`, `aria-labelledby`, or visible text children)
- **Fixed critical disabled state issues**:
  - Added `cursor: not-allowed` to all disabled button variants
  - Added `pointer-events: none` to prevent interaction with disabled buttons
  - Improved visual feedback for disabled states across all button types

### 🎨 Button Styling Enhancements

- **Fixed Toggle Button pressed state**: Now properly scales with `transform: scale(0.98)` like active states
- **Fixed Toggle Button disabled state**: Disabled toggle buttons now appear grayed out instead of retaining color
- **Enhanced hover/active state consistency** across all button variants
- **Added reduced motion support**: Respects `prefers-reduced-motion: reduce` for transforms and animations
- **Improved CSS specificity**: Removed `!important` declarations and restructured selectors for better maintainability

### ♿ Accessibility Enhancements

- **Enhanced loading state accessibility**:
  - Added `aria-busy="true"` to loading buttons
  - Added `aria-describedby` linking to loading announcement
  - Screen readers now announce "Loading, please wait..." during loading states
  - Improved spinner accessibility with proper ARIA attributes
- **Better focus management**: Enhanced keyboard navigation support
- **WCAG compliance**: All button components now meet accessibility guidelines

### 🎛️ Design System Improvements

- **New transition token system**: Added comprehensive transition and timing tokens
  - Duration tokens: `--duration-1` through `--duration-5` (100ms to 500ms)
  - Easing tokens: `--ease-1` through `--ease-5` with different curves
  - Component-specific transitions: `--transition-button`, `--transition-focus`
  - Automatic reduced motion support via `prefers-reduced-motion: reduce`
- **Enhanced shadow tokens**: Improved button shadow consistency with better contrast
  - Updated `--shadow-3` for better visual hierarchy in light and dark themes
  - Better border visibility in both standard and dark modes

### 🔧 Technical Improvements

- Improved CSS specificity and state management for button interactions
- Better disabled state styling with proper visual hierarchy
- Enhanced development warnings for accessibility compliance
- Optimized button interaction performance
  - Fixed TypeScript errors in ToggleIconButton component
  - **Fixed TypeScript consistency**: BaseButton now uses ComponentPropsWithout pattern like all other components
  - **Code quality improvements**: Fixed trailing commas and formatting in checkbox/radio card components

## 0.1.4

- Initial release of Kookie UI
- Modern React component library with beautiful design tokens
- Polymorphic component support with `as` prop
- Toggle button components with visual feedback
- Full-width button support
- Comprehensive theming system based on Radix Colors
- TypeScript support with complete type definitions

## 0.1.3

- Enhanced hover variants for improved component interactions
- Bumped TypeScript to latest version for better type safety and developer experience
- Improved overall component consistency and visual polish

## 0.1.2

- Modified classic variants for Button, TextArea, TextField, Select, Dropdown, and Card components
- Updated radius token values across the design system

## 0.1.1

- Made Geist the default font family across all components
- Added new Text size = 0 (10px) for label usage

## 0.1.0

- Initial foundation and core component architecture
- Basic component library setup
