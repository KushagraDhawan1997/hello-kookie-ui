import * as React from 'react';
import classNames from 'classnames';
import { Slot } from 'radix-ui';

import { baseButtonPropDefs } from './base-button.props.js';
import { Flex } from '../flex.js';
import { Spinner } from '../spinner.js';
import { VisuallyHidden } from '../visually-hidden.js';
import { extractProps } from '../../helpers/extract-props.js';
import { mapResponsiveProp, mapButtonSizeToSpinnerSize } from '../../helpers/map-prop-values.js';
import { marginPropDefs } from '../../props/margin.props.js';

import type { MarginProps } from '../../props/margin.props.js';
import type { ComponentPropsWithout, RemovedProps } from '../../helpers/component-props.js';
import type { GetPropDefTypes } from '../../props/prop-def.js';

type BaseButtonElement = React.ElementRef<'button'>;
type BaseButtonOwnProps = GetPropDefTypes<typeof baseButtonPropDefs>;

// Polymorphic types using the proper ComponentPropsWithout pattern
type PolymorphicBaseButtonProps<C extends React.ElementType = 'button'> = {
  as?: C;
} & BaseButtonOwnProps &
  MarginProps &
  ComponentPropsWithout<C, RemovedProps | keyof BaseButtonOwnProps | keyof MarginProps | 'as'>;

interface BaseButtonProps extends PolymorphicBaseButtonProps {}

const BaseButton = React.forwardRef<BaseButtonElement, BaseButtonProps>((props, forwardedRef) => {
  const { size = baseButtonPropDefs.size.default } = props;
  const {
    className,
    children,
    asChild,
    as,
    color,
    radius,
    panelBackground,
    flush,
    disabled = props.loading,
    ...baseButtonProps
  } = extractProps(props, baseButtonPropDefs, marginPropDefs);

  // asChild takes precedence over as prop
  const Comp = asChild ? Slot.Root : as || 'button';

  // Only pass disabled for elements that support it
  const shouldPassDisabled =
    asChild || !as || ['button', 'input', 'textarea', 'select'].includes(as);

  // Generate unique ID for loading announcements
  const loadingId = React.useId();
  const describedById = props.loading ? `${loadingId}-loading` : undefined;

  // Enhanced accessibility props for loading state
  const accessibilityProps = props.loading
    ? {
        'aria-busy': true,
        'aria-disabled': true,
        'aria-describedby': describedById,
      }
    : {};

  return (
    <Comp
      // The `data-disabled` attribute enables correct styles when doing `<Button asChild disabled>`
      data-disabled={disabled || undefined}
      data-accent-color={color}
      data-radius={radius}
      data-panel-background={panelBackground}
      data-flush={flush ? 'true' : undefined}
      {...baseButtonProps}
      {...accessibilityProps}
      ref={forwardedRef}
      className={classNames('rt-reset', 'rt-BaseButton', className)}
      {...(shouldPassDisabled && { disabled })}
    >
      {props.loading ? (
        <>
          {/**
           * We need a wrapper to set `visibility: hidden` to hide the button content whilst we show the `Spinner`.
           * The button is a flex container with a `gap`, so we use `display: contents` to ensure the correct flex layout.
           *
           * However, `display: contents` removes the content from the accessibility tree in some browsers,
           * so we force remove it with `aria-hidden` and re-add it in the tree with `VisuallyHidden`
           */}
          <span style={{ display: 'contents', visibility: 'hidden' }} aria-hidden>
            {children}
          </span>

          {/* Enhanced accessibility for loading state */}
          <VisuallyHidden>
            <span id={describedById}>Loading, please wait...</span>
            {children}
          </VisuallyHidden>

          <Flex asChild align="center" justify="center" position="absolute" inset="0">
            <span>
              <Spinner
                size={mapResponsiveProp(size, mapButtonSizeToSpinnerSize)}
                aria-hidden="true"
              />
            </span>
          </Flex>
        </>
      ) : (
        children
      )}
    </Comp>
  );
});
BaseButton.displayName = 'BaseButton';

export { BaseButton };
export type { BaseButtonProps };
