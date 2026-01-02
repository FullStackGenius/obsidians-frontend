import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lexend, satisfy } from '../../app/font';
export default function RootLayout({ children }) {
  return <><div className={`${lexend.variable} ${satisfy.variable}`} >{children}</div></>;
}
