import ArrowAnimation from "@/components/ArrowAnimation";
import { Loader } from "@/components/Loader";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import TermsOfServiceModal from "@/components/TermsOfServiceModal";
import { ModalsContextProvider } from "@/context/ModalsProvider";
import { createRootRoute, Link, Navigate, Outlet } from "@tanstack/react-router";
import NavBar from "../components/Header/NavBar";

export const Route = createRootRoute({
  component: App,
  notFoundComponent: () => <Navigate to="/" replace />,
  wrapInSuspense: true,
  pendingComponent: Loader
});

function App() {
  return (
    <ModalsContextProvider>
      <div className="flex h-full min-h-screen flex-col text-white">
        <div className="fixed inset-0 -z-10 size-full flex-1 bg-(image:--img-main-layout) bg-cover bg-center bg-no-repeat" />
        <ArrowAnimation />
        <header className="container flex justify-center bg-gradient-to-b from-black/90 to-transparent py-2 sm:px-16 md:justify-normal md:bg-none">
          <NavBar />
        </header>
        <div className="container m-auto flex flex-1 items-center px-8">
          <Outlet />
        </div>
        <footer className="space-y-8 bg-(image:--img-footer) bg-cover bg-center px-8 py-20 sm:space-y-0">
          <div className="flex flex-col items-center justify-center gap-8 font-semibold uppercase sm:flex-row sm:gap-4">
            <Link href="#">Home</Link>
            <p className="hidden sm:block">|</p>
            <Link href="#">Blog</Link>
            <p className="hidden sm:block">|</p>
            <Link href="#">Help</Link>
            <p className="hidden sm:block">|</p>
            <TermsOfServiceModal />
            <p className="hidden sm:block">|</p>
            <PrivacyPolicyModal />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
            <span>Developed by</span>
            <a
              href="https://www.linkedin.com/in/carlos-alberto-garcia-cifuentes-b90410210/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-bold"
            >
              @CarlinGebyte
            </a>
            <span>and</span>
            <a href="https://github.com/StrafeYosef" target="_blank" rel="noreferrer noopener" className="font-bold">
              @Yoseful
            </a>
          </div>
        </footer>
      </div>
    </ModalsContextProvider>
  );
}
