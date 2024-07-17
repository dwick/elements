'use client';

import React from 'react';

export default function Input({ errorMessage, ...props }: React.HTMLProps<HTMLInputElement> & { errorMessage?: string }) {
  const handleInput = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('');
  }, []);

  const handleInvalid = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) e.target.setCustomValidity(errorMessage);
  }, [errorMessage]);

  return (
    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
      <input 
        {...props} 
        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        onInput={handleInput}
        onInvalid={handleInvalid}
      />
    </div>
  )
}