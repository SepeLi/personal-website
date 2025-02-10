import { PortableText, PortableTextProps } from 'next-sanity';
import { FC } from 'react';

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
          <ul className="space-y-4 text-gray-600">{children}</ul>
        ),
      },
    }}
  />
);
