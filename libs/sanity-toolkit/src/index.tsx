import imageUrlBuilder from '@sanity/image-url';
import {
  SanityAsset,
  SanityImageObject,
} from '@sanity/image-url/lib/types/types';
import { PortableText, PortableTextProps } from 'next-sanity';
import { FC } from 'react';
import { client } from './client/client';
import { BlockImage } from './components/BlockImage';

export * from './client/index';

const builder = imageUrlBuilder(client);
export const urlFor = (image: SanityImageObject) => builder.image(image);

interface ImageAsset extends SanityAsset {
  urlText: string;
}

export const SanityContent: FC<Pick<PortableTextProps, 'value'>> = ({
  value,
}) => (
  <PortableText
    value={value}
    components={{
      types: {
        blockImage: ({ value }) => <BlockImage {...value} />,
      },
      block: {
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            {children}
          </h3>
        ),
        p: ({ children }) => <p className="text-gray-600">{children}</p>,
      },
      list: {
        bullet: ({ children }) => (
          <ul className="list-disc space-y-2 text-gray-600 pl-8">{children}</ul>
        ),
      },
    }}
  />
);
