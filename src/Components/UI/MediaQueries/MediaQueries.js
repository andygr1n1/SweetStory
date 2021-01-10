// const size = {
//     mobileS: '320px',
//     mobileM: '375px',
//     mobileL: '425px',
//     tablet: '768px',
//     laptop: '1024px',
//     laptopL: '1440px',
//     desktop: '2560px'
// }
//
// export const device = {
//     mobileS: `(min-width: ${size.mobileS})`,
//     mobileM: `(min-width: ${size.mobileM})`,
//     mobileL: `(min-width: ${size.mobileL})`,
//     tablet: `(min-width: ${size.tablet})`,
//     laptop: `(min-width: ${size.laptop})`,
//     laptopL: `(min-width: ${size.laptopL})`,
//     desktop: `(min-width: ${size.desktop})`,
//     desktopL: `(min-width: ${size.desktop})`
// };


const size = {
    mobile: '351px',
    mobileL: '550px',
    tablet: '768px',
    laptop: '1230px',
    desktop: '2560px',
};

export const device = {
    mobile:`(max-width: ${size.mobile})`,
    mobileL:`(max-width: ${size.mobileL})`,
    tablet:`(max-width: ${size.tablet})`,
    laptop:`(max-width: ${size.laptop})`,
    desktop:`(max-width: ${size.desktop})`,
};

