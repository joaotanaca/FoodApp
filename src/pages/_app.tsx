import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import GlobalProvider from "components/GlobalProvider";
import { Global } from "styles";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalProvider>
            <Global />
            <Component {...pageProps} />
        </GlobalProvider>
    );
}

export default MyApp;
