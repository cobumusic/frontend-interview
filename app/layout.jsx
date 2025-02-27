import "@/styles/core.scss";
import Footer from "@/components/Footer/Footer";
import MatrixRain from "@/components/MatrixRain/MatrixRain";
import Navbar from "@/components/Navbar/Navbar";


/**
 * Root layout component for the application. Has a navbar and footer.
 * @param children - The child content nodes
 */
export default function RootLayout({children}) {
  return <html lang="en">
    <head>
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
