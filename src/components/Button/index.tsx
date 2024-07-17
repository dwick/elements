import React from "react";
import cn from "classnames";

export default function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={cn(props.className, 'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500')}>{children}</button>
   
}