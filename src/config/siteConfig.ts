export const siteConfig = {
  title: "My Site",
  description: "This is my site",
  navbar: [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "Login",
      path: "/login",
      hideInAuth: true
    },
    {
      label: "Register",
      path: "/register",
      hideInAuth: true
    },
    {
      label: "Profile",
      path: "/profile",
      isAuth: true
    }
  ]
};
