import { cn } from "@/utils";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// Define the props
type CarouselProps = PropsWithChildren & EmblaOptionsType;

type DotsProps = {
  itemsLength: number;
  selectedIndex: number;
};

type ControlProps = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

const Dots = ({ itemsLength, selectedIndex }: DotsProps) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex items-center justify-center gap-1 my-2 ">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={cn({
              "h-2 w-2 mx-2 rounded-full transition-all duration-300 bg-[#41414D]": true,
              // tune down the opacity if slide is not selected
              "bg-text-label": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

const Carousel = ({ children, ...options }: CarouselProps) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  const CarouselControls = (props: ControlProps) => {
    return (
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={() => {
            if (props.canScrollPrev) {
              props.onPrev();
            }
          }}
          disabled={!props.canScrollPrev}
          className={cn({
            "px-4": true,
            "": !props.canScrollPrev,
            "": props.canScrollPrev,
          })}
        >
          <RiArrowLeftSLine className="text-2xl text-text-details" />
        </button>
        <Dots itemsLength={length} selectedIndex={selectedIndex} />
        <button
          onClick={() => {
            if (props.canScrollNext) {
              props.onNext();
            }
          }}
          disabled={!props.canScrollNext}
          className={cn({
            "px-4": true,
            "": !props.canScrollNext,
            "": props.canScrollNext,
          })}
        >
          <RiArrowRightSLine className="text-2xl text-text-details" />
        </button>
      </div>
    );
  };

  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div className="flex flex-col items-center justify-between">
      <div className="overflow-hidden" ref={emblaRef}>
        {/* 3. The inner div must have a display:flex property */}
        {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
        <div className="flex">{children}</div>
      </div>
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
    </div>
  );
};
export default Carousel;
