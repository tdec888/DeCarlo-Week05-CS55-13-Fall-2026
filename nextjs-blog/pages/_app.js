// Developer note: `_app.js` is the root component for all pages in the app.
// It loads the site-wide stylesheet so every page shares the same global styles.
import './styles/global.css';
 
// Developer note: This wrapper renders whichever page component is active.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}