import "@styles/global.css";
import Navbar from "./components/Navbar";
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
  title: "JJ Dev",
  description: "My own portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${merriweather.variable} ${raleway.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
