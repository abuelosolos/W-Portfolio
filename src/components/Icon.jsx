import { icons } from '../assets/icons';

// Mask-based icon: painted with currentColor so colour tokens and hover states apply.
// Wrap in a container that sets --icon-scale to shrink icons responsively (e.g. on mobile).
// `size` is the design slot in px (e.g. 18 nav, 30 connect); the glyph scales proportionally.
export function Icon({ name, size, className = '', style }) {
  const icon = icons[name];
  if (!icon) return null;
  const k = (size ?? icon.slot) / icon.slot;
  const mask = `url("${icon.src}")`;
  return (
    <span
      aria-hidden="true"
      className={`icon ${className}`}
      style={{ width: `calc(${icon.w * k}px * var(--icon-scale, 1))`, height: `calc(${icon.h * k}px * var(--icon-scale, 1))`, WebkitMaskImage: mask, maskImage: mask, ...style }}
    />
  );
}
