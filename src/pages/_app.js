import "@/styles/globals.css";
// adding font awsome here
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Prevent Font Awesome from dynamically adding its CSS
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
