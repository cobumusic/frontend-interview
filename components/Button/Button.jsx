"use client";
import Link from "next/link";
import React, {forwardRef} from "react";
import LoadingSvg from "@/public/icons/loading.svg";
import constructClassName from "@/utilities/constructClassName";
import css from "./Button.module.scss";

/**
 * Inner component for the Button. Handles the layout of the button's content (shared between <a> and <button> subtypes)/
 * @param children - Main content of the button
 * @param icon     - Main icon of the button
 * @param iconLeft - Icon to display on the left side of the button content
 */
const Inner = ({children, icon, iconLeft}) => (
  <>
    <span className={css.text}>
      {iconLeft}
      {icon || children}
    </span>
    <span className={css.spinner}>
      <LoadingSvg />
    </span>
  </>
);

/**
 * A flexible button component that can render as either a `<Link>` or a `<button>`,
 * depending on whether an `href` is provided.
 *
 * @param children   - The content of the button
 * @param className  - [optional] Additional custom class names for the button
 * @param danger     - [optional] If true, applies red danger styling to the button (default: false)
 * @param dataTestId - [optional] Sets the data-testid attribute (default: "")
 * @param disabled   - [optional] If true, disables the button (default: false)
 * @param ghost      - [optional] If true, applies ghost button styling (default: false)
 * @param helperText - [optional] Additional text to display below the button
 * @param href       - [optional] The URL that the button links to. Renders as a `<button>` if not provided
 * @param icon       - [optional] SVG icon. If present, the button will display as a circle with the icon
 * @param iconLeft   - [optional] An SVG icon to display on the left side
 * @param large      - [optional] Make this button grotesquely large (for above-the-fold CTAs) (default: false)
 * @param loading    - [optional] If true, shows a loading indicator (default: false)
 * @param onClick    - [optional] The click event handler
 * @param prefetch   - [optional] Prefetch the page for the link. Only applies when `href` is provided (default: true)
 * @param target     - [optional] The target attribute for the link (default: "_self")
 * @param type       - [optional] HTML button type (default: "button")
 * @param wrap       - [optional] If true, allows text wrapping inside the button (default: false)
 */
export default forwardRef(({
  children,
  className = "",
  danger = false,
  dataTestId = "",
  disabled = false,
  ghost = false,
  helperText = null,
  href = "",
  icon = null,
  iconLeft = null,
  large = false,
  loading = false,
  onClick = null,
  prefetch = true,
  target = "_self",
  type = "button",
  wrap = false,
}, ref) => {
  const fullClassName = constructClassName(css, "button", `custom ${className}`, {ghost, icon: Boolean(icon), disabled, loading, wrap, large, danger});


  //log click event and call onClick handler
  function handleClick(e){
    if (onClick && !loading){
      onClick(e);
    }
  }

  if (href){
    return <Link
      href={href}
      className={fullClassName}
      onClick={handleClick}
      target={target}
      prefetch={prefetch}
      ref={ref}
      aria-disabled={disabled}
      data-testid={dataTestId}
      role="checkbox"
    >
      <Inner icon={icon} iconLeft={iconLeft}>{children}</Inner>
      {helperText && <div className={css.helperText}>{helperText}</div>}
    </Link>;
  }
  return <button
    className={fullClassName}
    onClick={handleClick}
    ref={ref}
    type={type}
    disabled={disabled}
    data-testid={dataTestId}
    role="checkbox"
    aria-checked
  >
    <Inner icon={icon} iconLeft={iconLeft}>{children}</Inner>
    {helperText && <div className={css.helperText}>{helperText}</div>}
  </button>;
});
