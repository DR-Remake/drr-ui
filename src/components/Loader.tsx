import loaderAvif from "../assets/loading.avif";
import loader from "../assets/loading.png";
import loaderWebp from "../assets/loading.webp";

export function Loader() {
  return (
    <div className="flex h-full min-h-screen flex-col text-white">
      <div className="fixed inset-0 -z-10 size-full flex-1 bg-main-layout bg-cover bg-center bg-no-repeat"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <picture className="size-32 animate-spin rounded-full">
          <source srcSet={loaderWebp} type="image/webp" />
          <source srcSet={loaderAvif} type="image/avif" />
          <img src={loader} alt="Loading..." className="w-full" />
        </picture>
      </div>
    </div>
  );
}
