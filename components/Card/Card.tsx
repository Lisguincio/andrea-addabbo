import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("card rounded-2xl bg-white p-6 shadow", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card-title", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardBody.displayName = "CardBody";

export { Card, CardTitle, CardBody };
