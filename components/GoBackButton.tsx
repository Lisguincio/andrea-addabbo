'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';


const GoBackButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const router = useRouter();
  return (
    <button
      ref={ref}
      className={cn("btn btn-circle", className)}
      onClick={() => router.back()}
      {...props}
    >
      {children}
    </button>
  );
});
GoBackButton.displayName = "GoBackButton";

export default GoBackButton;