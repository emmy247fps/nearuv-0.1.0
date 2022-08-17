import { createGlobalStyle } from "styled-components";

const color = {

  orangePrimary: "#b33400",
  orangeSecondary: "#f74902",
  blackPrimary: "#0F1111",
  blackSecondary: "#16181b",
  whitePrimary: " #ffffff",
  whiteSecondary: "#f3f3f3b0",
  greyBorder: "#4c4c4c",
    greenPrimary: "#1ded61",
  redPrimary: "#b50303",
    bluePrimary: "#0c09ea",
  grey: "#e7e7e7e7",
  ash: '#3d3e3f',
  whiteBoxShadowSecondary: "#e3e3e3",
  iconTransitionBlackPrimary: " #0F1111 0.9s ease-in-out",
  iconTransitionWhitePrimary: " #ffffff 0.9s ease-in-out",
  whiteGrayBlockedContent: "#2624245c",
  blackGrayBlockedContent: "#2624245c",
  whiteThird: "#f1eded",// create for other colors too


};

const LightTheme = {
    body: color.whitePrimary,
  primary: color.whitePrimary,
  fontColor: color.blackPrimary,
  headerBackground: color.whitePrimary,
  iconsColor: color.blackSecondary,
  badgeFontColor: color.whitePrimary,
  badgeBackground: color.blackPrimary,
  searchBarBackground: color.grey,
  border: color.blackSecondary,
  barBoxShadow: color.whiteBoxShadowSecondary,
  badge: color.blackSecondary,
  hoverColor: color.redPrimary,
  sidebarBackground: color.whiteSecondary,
    cardBackground: color.whiteSecondary,
  canvasHeaderColor: color.whiteSecondary,
  hoverBackground: color.whiteSecondary,
  icontTransition: color.iconTransitionWhitePrimary,
  productCardShadow: color.whiteBoxShadowSecondary,
  topMenuBlockedContent: color.whiteGrayBlockedContent,
  sellersCanvasItems: color.whiteThird,
    link: color.redPrimary,

};

const OrangeTheme =  {
  primary: color.orangePrimary,
    body: color.orangePrimary,
    fontColor: color.whitePrimary,
    headerBackground: color.orangePrimary,
    iconsColor: color.whitePrimary,
    badgeFontColor: color.orangePrimary,
    badgeBackground: color.blackPrimary,
    searchBarBackground: color.grey,
    border: color.whitePrimary,
    barBoxShadow: color.whiteBoxShadowSecondary,
    badge: color.whiteSecondary,
    hoverColor: color.redPrimary,
    sidebarBackground: color.orangeSecondary,
    cardBackground: color.orangeSecondary,
    canvasHeaderColor: color.orangeSecondary,
    hoverBackground: color.orangeSecondary,
    iconTransition: color.iconTransitionBlackPrimary,
    productCardShadow: color.whitePrimary,
    topMenuBlockedContent: color.whiteGrayBlockedContent,
    link: color.redPrimary,

  
  };

const DarkTheme = {
  primary: color.blackPrimary,
  body: color.blackPrimary,
  fontColor: color.whitePrimary,
  headerBackground: color.blackPrimary,
  iconsColor: color.whitePrimary,
  badgeFontColor: color.blackPrimary,
  badgeBackground: color.blackPrimary,
  searchBarBackground: color.grey,
  border: color.whiteSecondary,
  barBoxShadow: color.whiteBoxShadowSecondary,
  badge: color.whiteSecondary,
  hoverColor: color.redPrimary,
  sidebarBackground: color.blackSecondary,
  cardBackground: color.ash,
  canvasHeaderColor: color.blackSecondary,
  hoverBackground: color.blackSecondary,
  iconTransition: color.iconTransitionBlackPrimary,
  productCardShadow: color.blackSecondary,
  topMenuBlockedContent: color.whiteGrayBlockedContent,
    link: color.redPrimary,
    greenPrimary: color.greenPrimary

};

const GlobalStyles = createGlobalStyle`

body , .itemDetailinfoContainerButton{
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
}
.title, .amount, .itemDetailinfoContainerBrandLink a, .product__price .figure, .containContentProduct__icons .iconButtons:hover{
     color: ${(props) => props.theme.link};
}
.header {
    background: ${(props) => props.theme.headerBackground}
}

.header__icons, .video__canvas__left__content__video__icons, .sidebar li, .header__icons__environment, .header__left__menu{
    color: ${props => props.theme.iconsColor}
}
.header__left__logo{
    background: ${(props) => props.theme.iconsColor}
}

.search__bar {
    background: ${(props) => props.theme.searchBarBackground};
    border-color: ${props => props.theme.searchBarBicons__environmentrderColor}
}

.search__bar input {
    color: ${props => props.theme.fontColor};
}

.search__bar button {
    color: ${props => props.theme.iconsColor};
}

.footer {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.fontColor}
}

.badge, .video__top span {
    background: ${props => props.theme.badgeBackground};
    color: ${props => props.theme.badgeFontColor};
}


 .header .sidebar {
    box-shadow:  ${props => props.theme.barBoxShadow};
}

.footer__icons, .header__icons {
    -webkit-top-highlight-color: transparent;
    transition: ${props => props.theme.iconTransition};
}

.footer__icons__basket {
    background: ${props => props.theme.badge};
    color: ${props => props.theme.badgeFontColor}
}

.clicked,
.cursor:hover,
.footer__icons__home:hover,
.footer__icons__gift:hover,
.footer__icons__basket:hover,
.footer__icons__apps:hover,
.footer__icons__search:hover {
   color: ${props => props.theme.hoverColor}
    }

.sidebar, .left__side__nav {
    background: ${props => props.theme.sidebarBackground};
    border-left: 5px solid ${props => props.theme.body};
    
}
 .productDisplayContainer {
     box-shadow: 0px 0px 8px 1px ${props => props.theme.productCardShadow}
 }

.sidebar .open {
    border-right: 4px solid  ${props => props.theme.sidebarBackground};
    border-radius: 0 18px;
}

.sidebar li:hover, .active {
    background: ${props => props.theme.hoverBackground};
    border-right: 4px solid  ${props => props.theme.sidebarBackground};
    border-radius: 0 18px;
}



.sidebar hr, .left__side__nav hr {
    color: ${props => props.theme.iconsColor}
}

.left__side__nav__menus li:hover, .mobile__footer li:hover {
    box-shadow: 0px 0px 5px 0px ${props => props.theme.fontColor}
}

.sidebar::-webkit-scrollbar, .video__canvas__left__content::-webkit-scrollbar, .sellers__body::-webkit-scrollbar {
    width: 6px;
    background: ${props => props.theme.sidebarBackground};
}

.sidebar::-webkit-scrollbar:hover, .video__canvas__left__content::-webkit-scrollbar:hover, .sellers__body::-webkit-scrollbar:hover {
    width: 6px;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.fontColor}
}

.sidemenu__content .open__sidemenu {
    background: ${props => props.theme.topMenuBlockedContent}
}

a {
    color: ${props => props.theme.fontColor}
}

.sidebar::-webkit-scrollbar-thumb, .video__canvas__left__content::-webkit-scrollbar-thumb, .sellers__body::-webkit-scrollbar-thumb {
    background: ${props => props.theme.fontColor};
    border-radius: 6px
}
.top__trending__itemImage {
    background: ${props => props.theme.fontColor};
}

.video__canvas {
    background: ${props => props.theme.body}
}

.video__title {
    color: ${props => props.theme.fontColor}
}
 
.video__canvas .video__canvas__right__content .video {
    background: ${props => props.theme.body};
    box-shadow: 2px 6px 1em ${props => props.theme.sidebarBackground}
}

.sellersCanvas.open {
    color:  ${props => props.theme.fontColor};
    background: ${props => props.theme.sidebarBackground};
    box-shadow: 2px 6px 1em ${props => props.theme.sidebarBackground};
}

.sellersCanvas .contain__content {
    background: ${props => props.theme.primary}
}

.product__card__wrapper {
    background: ${(props) => props.theme.headerBackground }
}

.overlay__name, .overlayText {
    color: ${props =>props.theme.hoverBackground }
}

.product_container_items img {
    box-shadow: 0px 0px 3px 0px ${props => props.theme.productCardShadow}
}
.profile__img {
    border-color: ${props => props.theme.border}
}
.icons__IoIosInformation{
    color: ${props => props.theme.iconsColor}
}
.commentNavbar{
    background: ${props => props.theme.fontColor};
    color: ${props => props.theme.fontColor}
}
commentHeader{
    background: ${props => props.theme.primary};
}
.subHeader{
    background: ${props => props.theme.sidebarBackground};
}
.SubmitIcon{
    background: ${props => props.theme.primary};
}
.textarea{
    background: ${props => props.theme.primary};
}
.productInfoCanvas{
    background: ${props => props.theme.primary};
}
.horizontalScroll .btnScroll {
    background: ${props => props.theme.iconsColor};
    color: ${props => props.theme.primary}
}
.productInfoCanvas .heading{
    background: ${props => props.theme.canvasHeaderColor};
}
tr:nth-child(even) {
     background: ${props => props.theme.canvasHeaderColor};
}
.sellersContainerHeading, .sidebarContainer{
    background: ${props => props.theme.body};
}
.contain__content{
     background: ${props => props.theme.cardBackground};
 }
 .itemDetailinfoContainerButton button, .progressBar[value]::-webkit-progress-value{
    background: ${props => props.theme.greenPrimary};
 }
 .progressBar[value]::-webkit-progress-bar{
     background: ${props => props.theme.sidebarBackground};
 }
  .textarea {
    color: ${props => props.theme.fontColor}
  }
`;

export { LightTheme, DarkTheme, OrangeTheme, GlobalStyles };
