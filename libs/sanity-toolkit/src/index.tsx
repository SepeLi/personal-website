import imageUrlBuilder from '@sanity/image-url';
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { PortableText, PortableTextProps } from 'next-sanity';
import { FC } from 'react';
import { client } from './client/client';

export * from './client/index';

export const SanityContent: FC<Pick<PortableTextProps, 'value'>> = ({
  value,
}) => (
  <PortableText
    value={value}
    components={{
      block: {
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            {children}
          </h2>
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

const builder = imageUrlBuilder(client);
export const urlFor = (image: SanityImageObject) => builder.image(image);
