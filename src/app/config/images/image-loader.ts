import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

import { W154H205, W44H66 } from './image-sizes';
import { NO_IMAGE } from 'src/app/constants';

export const provideUnsplashImageLoader = (
  cfg: { baseUrl: string } = { baseUrl: `https://images.unsplash.com` }
) => {
  const { baseUrl } = cfg;
  return {
    provide: IMAGE_LOADER,
    useValue: (config: ImageLoaderConfig) => {
      if (!config.width) config.width = W154H205.WIDTH;
      if (!config.src) return NO_IMAGE;
      return `${baseUrl}${config.src}&w=${config.width}`;
    },
  };
};
