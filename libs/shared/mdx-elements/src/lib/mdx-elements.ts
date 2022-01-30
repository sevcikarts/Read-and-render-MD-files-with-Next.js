//import { Youtube } from './youtube/youtube';
import dynamic from 'next/dynamic'
import { CustomLink } from './custom-link/custom-link';


// export const mdxElements = {
//   Youtube,
// };

export const mdxElements = {
    a: CustomLink,
    Youtube: dynamic(() => import('./youtube/youtube')),
  };