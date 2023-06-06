import localFont from "next/font/local";

const matter = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Matter-Light.otf",
      weight: "300",
    },
    {
      path: "../../public/assets/fonts/Matter-Medium.otf",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/Matter-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/Matter-Semibold.otf",
      weight: "600",
    },
  ],
  display: "swap",
});

const circular = localFont({
  src: [
    { path: "../../public/assets/fonts/CircularStd-Black.otf",weight: "900" },
    { path: "../../public/assets/fonts/CircularStd-Bold.otf",weight: "700" },
    { path: "../../public/assets/fonts/CircularStd-Book.otf", weight: "450" },
  ],
  display: "swap",
});

export {
    matter,circular
}