import "@/styles/core.scss";
import Footer from "@/components/Footer/Footer";
import MatrixRain from "@/components/MatrixRain/MatrixRain";
import Navbar from "@/components/Navbar/Navbar";
//  font-family: "Fira Code";
import { Fira_Code } from 'next/font/google';

//Preconnect to required origins Potential savings of 60 ms


/**
 * Root layout component for the application. Has a navbar and footer.
 * @param children - The child content nodes
 */
export default function RootLayout({children}) {
  return <html lang="en">
    <head>
    <link rel="preload" href="https://fonts.gstatic.com/s/firacode/v22/uU9NCBsR6Z2vfE9aq3bh3dSD.woff2"/>
    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5VvkrjJYTI.woff2"/>
    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAWRSf4VFk.woff2"/>
    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5Vvl4jL.woff2"/>
    <link rel="preload" href="https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeRhf6.woff2"/>
    <link rel="icon" href="/favicon.png" type="image/png"/>
    </head>

    <body>
      <MatrixRain />
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </body>
  </html>;
}
