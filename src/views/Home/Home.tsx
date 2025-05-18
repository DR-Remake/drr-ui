import carouselBoxBg from "@/assets/carousel-box-bg.png";
import FirstSlide from "@/assets/first_slide.jpg";
import newsletterFormBg from "@/assets/newsletter-form-bg.png";
import SecondSlide from "@/assets/second_slide.jpg";
import ThirdSlide from "@/assets/third_slide.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CustomCarouselNext,
  CustomCarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import NewsletterForm from "./components/NewsletterForm";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col gap-16 lg:flex-row lg:justify-center lg:gap-4">
      <div className="relative w-full pt-20 lg:h-full lg:w-6/12 lg:pt-0">
        <div className="absolute -top-20  -z-10 size-full  bg-(image:--img-dr-characters) bg-top bg-no-repeat sm:bg-auto lg:-top-56 lg:left-36"></div>
        <div className="relative size-full rounded-md p-2 sm:px-3 sm:py-4">
          <img src={carouselBoxBg} className="absolute inset-0 -z-10 w-full" alt="Carousel Box Background" />
          <Carousel
            opts={{
              loop: true
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnFocusIn: true,
                stopOnMouseEnter: true,
                active: true
              })
            ]}
            setApi={setApi}
          >
            <CarouselContent>
              <CarouselItem>
                <img src={FirstSlide} className="w-full" alt="carousel" />
              </CarouselItem>
              <CarouselItem>
                <img src={SecondSlide} className="w-full" alt="carousel" />
              </CarouselItem>
              <CarouselItem>
                <img src={ThirdSlide} className="w-full" alt="carousel" />
              </CarouselItem>
            </CarouselContent>
            <CustomCarouselNext />
            <CustomCarouselPrevious />
          </Carousel>
        </div>
        <div className="absolute left-1/2 flex -translate-x-1/2 translate-y-1.5 scale-75 gap-2 sm:translate-y-3 sm:scale-100">
          <div
            className={cn("size-4 bg-(image:--img-carousel-indicator) bg-cover bg-center", {
              "bg-(image:--img-carousel-indicator-active)": current === 1
            })}
          ></div>
          <div
            className={cn("size-4 bg-(image:--img-carousel-indicator) bg-cover bg-center", {
              "bg-(image:--img-carousel-indicator-active)": current === 2
            })}
          ></div>
          <div
            className={cn("size-4 bg-(image:--img-carousel-indicator) bg-cover bg-center", {
              "bg-(image:--img-carousel-indicator-active)": current === 3
            })}
          ></div>
        </div>
      </div>
      <div className="relative w-full flex flex-col rounded-md p-10 lg:w-3/12">
        <img src={newsletterFormBg} className="absolute inset-0 -z-10 size-full" alt="Newsletter Form Background" />
        <NewsletterForm onSubmit={() => {}} />
      </div>
    </div>
  );
}
