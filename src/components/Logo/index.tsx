import React from 'react';
import Image from "@/components/Image";

export default function Logo(props: Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
  return <Image src='/logo.png' alt='Elements Eatery & Bar' {...props} />;
}
