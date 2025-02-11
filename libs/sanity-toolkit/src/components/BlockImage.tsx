import { SanityAsset } from '@sanity/image-url/lib/types/types';
import classNames from 'classnames';
import { urlFor } from '../index';

interface ImageAsset extends SanityAsset {
  urlText: string;
}

interface BlockImageProps {
  asset: ImageAsset;
  caption: string;
  size: number;
  alignment: 'center' | 'left' | 'right';
}

export const BlockImage = (image: BlockImageProps) => {
  const { asset, caption, size, alignment } = image;
  console.warn(size);
  return (
    <div className="w-full mt-8">
      <div
        style={{ width: `${size}%` }}
        className={classNames({
          'ml-auto mr-auto': alignment === 'center',
          'mr-auto': alignment === 'left',
          'ml-auto': alignment === 'right',
        })}
      >
        <img
          alt={asset?.altText || caption}
          src={urlFor(image).url()}
          width="100%"
        />
        <p className="text-sm text-gray-600 pt-2 text-center italic">
          {caption}
        </p>
      </div>
    </div>
  );
};
