// Import the shared stylesheet so all pages use the same global visual styling.
import './styles/global.css';

// Export the custom App wrapper used by Next.js for every page in the application.
export default function App({ Component, pageProps }) {
  // Render the active page component while passing its props to keep navigation and page state working.
  return <Component {...pageProps} />;
}