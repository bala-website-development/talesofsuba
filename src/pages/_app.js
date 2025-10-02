import ContextProvider from "@/context/ContextProvider";
import "@/vendors/animate.css";
import "@/vendors/custom-animate.css";
import "@/vendors/flaticon.css";
import "@/vendors/fontawesome-all.css";
import "@/vendors/linoor-icons.css";
import "@/vendors/reey-font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-circular-progressbar/dist/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "tiny-slider/dist/tiny-slider.css";
import { PrimeReactProvider } from "primereact/api";
// extra css
import "@/styles/expensetracker.css";
import "@/styles/style.css";
import "@/styles/hover.css";
import "@/styles/responsive.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
const MyApp = ({ Component, pageProps }) => {
  if (process.env.NODE_ENV !== "development")
    console.log = () => {
      "talesofsuba";
    };
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
