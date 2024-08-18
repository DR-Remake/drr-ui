export const siteConfig = {
  title: "My Site",
  description: "This is my site",
  navbar: [
    {
      label: "Home",
      path: "/"
    }
  ],
  env: {
    BASE_API: import.meta.env.VITE_BASE_API ?? "http://localhost:3000/api"
  }
};
