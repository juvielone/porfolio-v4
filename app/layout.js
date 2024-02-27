import "@styles/global.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "JJ Dev",
  description: "My own portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
