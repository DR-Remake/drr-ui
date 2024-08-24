import borderImage from "@/assets/border.svg";
import FirstSlide from "@/assets/first_slide.jpg";
import SecondSlide from "@/assets/second_slide.jpg";
import ThirdSlide from "@/assets/third_slide.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import NewsletterForm from "./components/NewsletterForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
      <div
        className="w-full rounded-md bg-primary bg-cover bg-center bg-no-repeat sm:w-8/12"
        style={{
          border: "10px solid",
          borderImage: `url(${borderImage}) 30`,
          borderImageSlice: "20"
        }}
      >
        <Carousel>
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
        </Carousel>
      </div>
      <div
        className="w-full rounded-md  bg-primary bg-cover bg-center bg-no-repeat sm:w-3/12"
        style={{
          border: "20px solid",
          borderImage: `url(${borderImage}) 15`,
          borderImageSlice: "15"
        }}
      >
        <NewsletterForm onSubmit={() => {}} />
      </div>
    </div>
  );
}
