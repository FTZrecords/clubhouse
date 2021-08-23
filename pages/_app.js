import Router from "next/router";

import "styles/reset.scss";
import "styles/loadbar.scss";
import "styles/global.scss";

Router.events.on("routeChangeStart", loadStart);
Router.events.on("routeChangeComplete", loadDone);
Router.events.on("routeChangeError", loadDone);

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

function loadStart() {
  document.getElementById("loadbar").className = "start";
}
function loadDone() {
  document.getElementById("loadbar").className = "done";
}
