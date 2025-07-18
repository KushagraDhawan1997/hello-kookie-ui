import { asChildPropDef } from '../../props/as-child.prop.js';
import { accentColorPropDef } from '../../props/color.prop.js';
import { highContrastPropDef } from '../../props/high-contrast.prop.js';
import { radiusPropDef } from '../../props/radius.prop.js';

import type { PropDef } from '../../props/prop-def.js';

const sizes = ['1', '2', '3', '4'] as const;
const variants = ['classic', 'solid', 'soft', 'surface', 'outline', 'ghost'] as const;
const panelBackgrounds = ['solid', 'translucent'] as const;

const baseButtonPropDefs = {
  ...asChildPropDef,
  size: { type: 'enum', className: 'rt-r-size', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', className: 'rt-variant', values: variants, default: 'solid' },
  ...accentColorPropDef,
  ...highContrastPropDef,
  ...radiusPropDef,
  loading: { type: 'boolean', className: 'rt-loading', default: false },
  fullWidth: { type: 'boolean', className: 'rt-full-width', default: false },
  panelBackground: { type: 'enum', values: panelBackgrounds, default: undefined },
  flush: { type: 'boolean', default: false },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  loading: PropDef<boolean>;
  fullWidth: PropDef<boolean>;
  panelBackground: PropDef<(typeof panelBackgrounds)[number] | undefined>;
  flush: PropDef<boolean>;
};

export { baseButtonPropDefs };
