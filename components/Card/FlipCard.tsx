"use client";

/**
 * @author: @dorian_baffier
 * @description: Card Flip
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";
import React, { createContext, useContext } from "react";
import { Card, CardBody } from "./Card";

export interface CardFlipProps {
  children: React.ReactNode;
  value: boolean;
  direction?: "left" | "right" | "up" | "down";
}

const CardFlipContext = createContext<{
  value: boolean;
  direction: "left" | "right" | "up" | "down";
}>({
  value: false,
  direction: "left",
});

function getMovement (direction : "left" | "right" | "up" | "down"){
  switch (direction) {
    case "left":
      return "[transform:rotateY(180deg)]";
    case "right":
      return "[transform:rotateY(-180deg)]";
      case "up":
      return "[transform:rotateX(180deg)]";
    case "down":
      return "[transform:rotateX(-180deg)]";
    default:
      return "[transform:rotateY(180deg)]";
  }
}

function getOrentietion( direction: "left" | "right" | "up" | "down"){
  switch (direction) {
    case "right":
      return "[transform:rotateY(180deg)]";
      case "left":
      return "[transform:rotateY(-180deg)]";
      case "up":
      return "[transform:rotateX(180deg)]";
      case "down":
      return "[transform:rotateX(-180deg)]";
    default:
      return "[transform:rotateY(0deg)]";
  }

}

export const CardFlip = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardFlipProps
>(({ children, className, value, direction="right" }, ref) => {
  return (
    <CardFlipContext.Provider value={{ value, direction }}>
      <Card
        ref={ref}
        className={cn(
          "perspective-[2000px] relative w-full h-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          value ? getMovement(direction) : "[transform:rotateY(0deg)]",
          className
        )}
      >
        {children}
      </Card>
    </CardFlipContext.Provider>
  );
});

export const CardFlipFront = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<typeof CardBody>
>(({ children, className }, ref) => {
  const { value } = useContext(CardFlipContext);

  return (
    <CardBody
      ref={ref}
      className={cn(
        "flex  absolute inset-5 [backface-visibility:hidden] [transform:rotateY(0deg)] flex-col transition-all duration-700 ",
        className,
        value ? "opacity-0" : "opacity-100"
      )}
    >
      {children}
    </CardBody>
  );
});

export const CardFlipBack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<typeof CardBody>
>(({ children, className }, ref) => {
  const { value, direction } = useContext(CardFlipContext);

  return (
    <CardBody
      ref={ref}
      className={cn(
        "flex absolute inset-5 [backface-visibility:hidden] flex-col transition-all duration-700 ",
        getOrentietion(direction),
        className,
        value ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </CardBody>
  );
});

