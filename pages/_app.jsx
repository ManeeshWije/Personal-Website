import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}
