import React from 'react';
import NextImage from 'next/image';

export default function Image(props: React.ComponentProps<typeof NextImage>) {
  const basePath = process.env.CI ? '/elements' : '';
  return <NextImage {...props} src={basePath + props.src} />;
}
