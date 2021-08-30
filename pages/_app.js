import "tailwindcss/tailwind.css";
import "../styles/global.css";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progrss = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progrss.start);
Router.events.on("routeChangeComplete", progrss.finish);
Router.events.on("routeChangeError", progrss.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
