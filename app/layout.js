import "@styles/global.css";
import Head from "next/head";
import { Merriweather, Montserrat, Raleway } from "next/font/google";

// Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-merriweather",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Juvielone Lagos",
  description: "My own portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html
        lang="en"
        className={`${montserrat.variable} ${merriweather.variable} ${raleway.variable}`}
      >
        <body>{children}</body>
      </html>
    </>
  );
};

export default RootLayout;
