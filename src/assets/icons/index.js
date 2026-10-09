// Central icon registry. To swap an icon, replace the file or change one `src` below.
// `w`/`h` = rendered size (px) when the icon sits in its design slot (`slot` px, e.g. an 18px nav icon).
// <Icon name="github" size={30} /> scales these proportionally from the slot.
import github from './github.svg';
import instagram from './instagram.svg';
import x from './x.svg';
import linkedin from './linkedin.svg';
import behance from './behance.svg';
import telegram from './telegram.svg';
import arrowDiagonal from './arrow-diagonal.svg';
import arrowUpRight from './arrow-up-right.svg';
import caretLeft from './caret-left.svg';
import caretLeftLg from './caret-left-lg.svg';

// Mask icons: recolored with CSS (currentColor), so they follow the colour tokens and hover states.
export const icons = {
  github: { src: github, slot: 18, w: 18, h: 18 },
  instagram: { src: instagram, slot: 18, w: 18, h: 18 },
  x: { src: x, slot: 18, w: 18, h: 18 },
  linkedin: { src: linkedin, slot: 18, w: 18, h: 18 },
  telegram: { src: telegram, slot: 18, w: 18, h: 18 },
  behance: { src: behance, slot: 18, w: 18, h: 18 },
  arrowDiagonal: { src: arrowDiagonal, slot: 12, w: 17.97, h: 14.73 },
  arrowUpRight: { src: arrowUpRight, slot: 15, w: 15, h: 15 },
  caretLeft: { src: caretLeft, slot: 15, w: 15, h: 15 },
  caretLeftLg: { src: caretLeftLg, slot: 24, w: 24, h: 24 },
};

// Full-colour tool logos, used as plain <img>.
import toolClaude from './tool-claude.svg';
import toolNodejs from './tool-nodejs.svg';
import toolReact from './tool-react.svg';
import toolFigma from './tool-figma.svg';
import toolIbisPaint from './tool-ibis-paint.svg';
import toolNextjs from './tool-nextjs.svg';

export const toolIcons = {
  claude: { src: toolClaude, alt: 'Claude', size: 41 },
  nodejs: { src: toolNodejs, alt: 'Node.js', size: 41 },
  react: { src: toolReact, alt: 'React', size: 41 },
  figma: { src: toolFigma, alt: 'Figma', size: 41 },
  ibisPaint: { src: toolIbisPaint, alt: 'Ibis Paint X', size: 41 },
  nextjs: { src: toolNextjs, alt: 'Next.js', size: 35 },
};

// Hero floating icons: tile + rotation are baked into the SVGs (width/height attributes = native size).
import floaterFigma from './floater-figma.svg';
import floaterIbisPaint from './floater-ibis-paint.svg';
import floaterJavascript from './floater-javascript.svg';

export const floaterIcons = {
  figma: { src: floaterFigma, alt: 'Figma', size: 30 },
  ibisPaint: { src: floaterIbisPaint, alt: 'Ibis Paint X', size: 31 },
  javascript: { src: floaterJavascript, alt: 'JavaScript', size: 33 },
};
