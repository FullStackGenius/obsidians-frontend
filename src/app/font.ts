import localFont from 'next/font/local';

export const lexend = localFont({
  src: [
    { path: '../../public/fonts/Lexend-Thin.ttf', weight: '100' },
    { path: '../../public/fonts/Lexend-Light.ttf', weight: '300' },
    { path: '../../public/fonts/Lexend-Regular.ttf', weight: '400' },
    { path: '../../public/fonts/Lexend-Medium.ttf', weight: '500' },
    { path: '../../public/fonts/Lexend-SemiBold.ttf', weight: '600' },
    { path: '../../public/fonts/Lexend-Bold.ttf', weight: '700' },
    { path: '../../public/fonts/Lexend-ExtraBold.ttf', weight: '800' },
  ],
  variable: '--font-lexend',
  display: 'swap',
});

export const satisfy = localFont({
  src: '../../public/fonts/Satisfy-Regular.ttf',
  variable: '--font-satisfy',
  display: 'swap',
});


// @font-face {
//      font-family: 'Lexend';
//      src: url('../fonts/Lexend-Light.eot');
//      src: url('../fonts/Lexend-Light.eot?#iefix') format('embedded-opentype'), url('../fonts/Lexend-Light.woff') format('woff'), url('../fonts/Lexend-Light.ttf') format('truetype'), url('../fonts/Lexend-Light.svg#Lexend-Light') format('svg');
//      font-weight: 300;
//      font-style: normal;
//      font-display: swap;
// }
//  @font-face {
//      font-family: 'Lexend';
//      src: url('../fonts/Lexend-ExtraBold.eot');
//      src: url('../fonts/Lexend-ExtraBold.eot?#iefix') format('embedded-opentype'), url('../fonts/Lexend-ExtraBold.woff') format('woff'), url('../fonts/Lexend-ExtraBold.ttf') format('truetype'), url('../fonts/Lexend-ExtraBold.svg#Lexend-ExtraBold') format('svg');
//      font-weight: bold;
//      font-style: normal;
//      font-display: swap;
// }
//  @font-face {
//      font-family: 'Lexend';
//      src: url('../fonts/Lexend-Bold.eot');
//      src: url('../fonts/Lexend-Bold.eot?#iefix') format('embedded-opentype'), url('../fonts/Lexend-Bold.woff') format('woff'), url('../fonts/Lexend-Bold.ttf') format('truetype'), url('../fonts/Lexend-Bold.svg#Lexend-Bold') format('svg');
//      font-weight: bold;
//      font-style: normal;
//      font-display: swap;
// }
//  @font-face {
//      font-family: 'Lexend';
//      src: url('../fonts/Lexend-SemiBold.eot');
//      src: url('../fonts/Lexend-SemiBold.eot?#iefix') format('embedded-opentype'), url('../fonts/Lexend-SemiBold.woff') format('woff'), url('../fonts/Lexend-SemiBold.ttf') format('truetype'), url('../fonts/Lexend-SemiBold.svg#Lexend-SemiBold') format('svg');
//      font-weight: 600;
//      font-style: normal;
//      font-display: swap;
// }
//  @font-face {
//      font-family: 'Lexend';
//      src: url('../fonts/Lexend-Regular.eot');
//      src: url('../fonts/Lexend-Regular.eot?#iefix') format('embedded-opentype'), url('../fonts/Lexend-Regular.woff') format('woff'), url('../fonts/Lexend-Regular.ttf') format('truetype'), url('../fonts/Lexend-Regular.svg#Lexend-Regular') format('svg');
//      font-weight: normal;
//      font-style: normal;
//      font-display: swap;
// }
//  @font-face {
//      font-family: 'Lexend';
//      src: url('../fonts/Lexend-Thin.eot');
//      src: url('../fonts/Lexend-Thin.eot?#iefix') format('embedded-opentype'), url('../fonts/Lexend-Thin.woff') format('woff'), url('../fonts/Lexend-Thin.ttf') format('truetype'), url('../fonts/Lexend-Thin.svg#Lexend-Thin') format('svg');
//      font-weight: 100;
//      font-style: normal;
//      font-display: swap;
// }
//  @font-face {
//      font-family: 'Lexend';
//      src: url('../fonts/Lexend-Medium.eot');
//      src: url('../fonts/Lexend-Medium.eot?#iefix') format('embedded-opentype'), url('../fonts/Lexend-Medium.woff') format('woff'), url('../fonts/Lexend-Medium.ttf') format('truetype'), url('../fonts/Lexend-Medium.svg#Lexend-Medium') format('svg');
//      font-weight: 500;
//      font-style: normal;
//      font-display: swap;
// }
//  @font-face {
//      font-family: 'Satisfy';
//      src: url('../fonts/Satisfy-Regular.eot');
//      src: url('../fonts/Satisfy-Regular.eot?#iefix') format('embedded-opentype'), url('../fonts/Satisfy-Regular.woff2') format('woff2'), url('../fonts/Satisfy-Regular.woff') format('woff'), url('../fonts/Satisfy-Regular.ttf') format('truetype'), url('../fonts/Satisfy-Regular.svg#Satisfy-Regular') format('svg');
//      font-weight: normal;
//      font-style: normal;
//      font-display: swap;
// }