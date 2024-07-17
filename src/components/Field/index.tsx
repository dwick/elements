import React, { ReactElement } from 'react';

type Props = React.PropsWithChildren<{
  className?: string;
  name: string;
  label: string;
  required?: boolean
}>;

export default function Field({ className, name, label, children, required }: Props) {
  return (
    <div className={className}>
      <label htmlFor='entry.1343615799' className="block text-sm font-medium leading-6 text-gray-900">{ label }{ required && ' *' }</label>
      <div className="mt-2">
        {React.cloneElement(children as ReactElement, { name, required })}
      </div>
    </div>
  )
}