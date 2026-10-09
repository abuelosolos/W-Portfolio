import { useState } from 'react';
import { placeholder } from '../assets/images';

// <img> that falls back to a neutral placeholder if the source is missing or fails to load.
export function Img({ src, alt = '', ...props }) {
  const [failed, setFailed] = useState(false);
  return <img src={!src || failed ? placeholder : src} alt={alt} onError={() => setFailed(true)} {...props} />;
}
