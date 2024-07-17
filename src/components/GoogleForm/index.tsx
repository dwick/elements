'use client';

import React from 'react';

type Props = React.PropsWithChildren<{
  action: string;
}>;

export default function GoogleForm({
  action,
  children,
}: Props) {
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const handleSubmit = React.useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(action, {
      method: 'POST',
      body: new FormData(e.currentTarget),
      mode: 'no-cors',
    });

    setSubmitted(true);
  }, [action]);
  return (
    <form onSubmit={handleSubmit} target='_blank'>
      { submitted ? <p>Thanks for contacting us! If you don&apos;t hear back within 48 hours please give us a call at (530) 650-9004.</p> : children }
    </form>
  )
}