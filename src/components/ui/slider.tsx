"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { RiPauseFill } from "react-icons/ri";

import { cn } from "@/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center h-6", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative w-full h-1 overflow-hidden grow bg-text-label">
      <SliderPrimitive.Range className="absolute h-full bg-secondary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block w-8 h-6 transition-colors border-0 cursor-pointer bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      <RiPauseFill className="inset-center text-[#A8A8B3]" />
    </SliderPrimitive.Thumb>

    <SliderPrimitive.Thumb className="block w-8 h-6 transition-colors border-0 cursor-pointer bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      <RiPauseFill className="inset-center text-[#A8A8B3]" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
