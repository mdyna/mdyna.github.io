import { createGlobalStyle } from "styled-components"
import configs from "../../site-config"

const soon_badge_color = "#ef6c00"
const beta_badge_color = "#b22f23"

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700&display=swap');
  html {
    font-size: 62.5%;
    font-family: ${configs.font};
    line-height: 1;
    scroll-behavior: smooth;
  }

  body {
    font-size: 2rem;
    background-color: ${configs.body_background_color};
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 2rem;
  }

  // Better font rendering
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${configs.body_background_color};
  }

  a:link,
  a:hover,
  a:visited,
  a:active {
    color: ${configs.link_color};
    text-decoration: none;
  }

  // Various resets
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  .imageWrapper {
    // Sets the background image in the header area
    height: 714px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    width: 100%;
    border-radius: 0px 0px 40px 40px;
  }

  .headerImage {
    position: unset !important;
    height: 0 !important;
    display: block !important;

  }
  .headerImage > div{
    padding-bottom: 0 !important;
  }
  .headerImage img {
    z-index: -1;
    border-radius: 0px 0px 40px 40px;
  }

  .container {
    // Set up the container for the site content
    display: grid;
    margin: auto;
    max-width: ${configs.content_width};
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1070px) {
    .container {
      // Set up the container for the site content
      grid-template-rows: 115px 700px auto auto auto;
    }
  }

  @media only screen and (max-width: 992px) {
    .container {
      grid-column-gap: 0px;
      grid-template-columns: 1;
      grid-template-rows: 115px auto auto auto auto auto;
      grid-template-areas:
        "h h h h h h h h h h h h"
        "i i i i i i i i i i i i"
        "p p p p p p p p p p p p"
        "c c c c c c c c c c c c"
        "l l l l l l l l l l l l"
        "f f f f f f f f f f f f";
    }
  }

  header {
    display: flex;
    padding: 0px 50px;
    position: sticky;
    top: 0;
    width: 100%;
    background-color: ${configs.header_background};
    z-index: 2;
  }

  .logo {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    height: 115px;
  }

  .logo > p {
    color: ${configs.topbar_title_color};
    display: flex;
    font-weight: bold;
    padding-bottom: 1px;
  }

  .headerIcon {
    width: 50px;
    height: 50px;
    -webkit-clip-path: url(#shape);
    clip-path: url(#shape);
    margin-right: 15px;
  }
  // Navigation Links
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 115px;
  }

  nav > ul {
    color: #fff;
    display: flex;
    list-style-type: none;
  }

  nav > ul li {
    padding-left: 50px;
    text-align: right;
  }

  nav > ul li:first-child {
    padding-left: 0px;
  }

  nav > ul li a {
    display: flex;
    flex-flow: row wrap;
    justify-content: center
    i {
      margin-left: 5px;
    }
  }

  nav > ul li a:link,
  nav > ul li a:visited {
    text-decoration: none;
    color: rgba(${configs.topbar_title_color}, 0.6);
  }

  nav > ul li a:hover,
  nav > ul li a:active {
    text-decoration: none;
    color: rgba(${configs.topbar_title_color}, 1);
  }

  // App Title, Price, Description and Links

  .appInfo {
    display: flex;
    flex-wrap: wrap;
    padding-top: 60px;
    align-content: flex-start;
  }

  @media only screen and (max-width: 992px) {
    .appInfo {
      padding-top: 50px;
      justify-content: center;
    }
  }

  .appIconShadow {
    display: flex;
    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));
  }

  .appIconLarge {
    width: 220px;
    height: 220px;
    -webkit-clip-path: url(#shape120);
    clip-path: url(#shape120);
  }

  .appNamePriceContainer {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    justify-content: center;
    margin-left: 30px;
  }

  .appName {
    font-weight: 700;
    font-size: 10em;
    line-height: 180px;
    color: ${configs.title_color};
  }

  .appPrice {
    color: ${configs.app_price_color};
    font-weight: normal;
    margin-top: 13px;
  }
  .altMonitorWithPrintsPreview{
    width: 596px;
  }
  .monitorWithPrintsPreview {
    width: 596px;
  }
  .appSubLeadContainer {
    display: flex;
    flex-flow: row wrap;
    max-width: 1100px;
    margin: 30px auto;
  }
  .appSublead {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 57px;
    max-width: 455px;
    color: ${configs.title_description_color};

  }
  .appLead {
    color: ${configs.title_description_color};
    font-family: Montserrat;
    font-weight: bold;
    font-size: 64px;
    line-height: 57px;
    max-width: 50px;
  }

  .appVersion {
    color: ${configs.app_version_color};
    font-weight: normal;
    margin-top: 13px;
  }

  .changelogTitle {
    color: ${configs.changelog_title_color};
    margin-top: 13px;
  }

  .featuresTitle {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 78px;
    text-transform: uppercase;
    /* or 108% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 24px;
    color: ${configs.feature_title_color};
    margin-top: 13px;
  }

  .cta {
    background-color: ${configs.main_color};
    padding: 30px;
    color: ${configs.cta_title_color};
    text-align: center;
    width: 100%;
    .cta-text {
      margin: 30px auto;
    }
    h1 {
      font-family: Montserrat;
      text-transform: uppercase;
      font-weight: normal;
      font-size: 36px;
      line-height: 48px;
      & i {
        margin-bottom: 10px;
        font-size: 100px;
      }
    }
    h3 {
      font-family: Open Sans;
      font-weight: normal;
      font-size: 14px;
      margin-top: 20px;
      line-height: 26px;
      color: ${configs.cta_subtitle_color};
    }
  }
  .changelog {
    display: flex;
    margin-top: 52px;
    flex-flow: column;
    align-items: center;
    flex-grow: 1;
    flex: 0 1 auto;
    h3 {
      margin: 10px;
      font-size: 2.2rem;
    }
    .releaseNotes {
      color: ${configs.feature_text_color};
      line-height: 32px;
      margin-top: 26px;
      white-space: pre-line;
      margin: 0 10vw;
      font-size: 1.8rem;
      h2 {
        font-size: 2.5rem;
      }
      h3 {
        font-size: 2.2rem;
      }
      ul {
        margin: 5px 2.5vw;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .appNamePriceContainer {
      width: 100%;
      margin-left: 0px;
      align-items: center;
      justify-content: center;
    }

    .appName {
      margin-top: 30px;
      text-align: center;
    }

    .appPrice {
      margin-top: 13px;
      text-align: center;
    }
  }

  .appDescriptionContainer {
    font-size: 2.5rem;
    font-weight: normal;
    width: 100%;
    align-items: flex-start;
    flex: 0 1 auto;
    line-height: 1.5;
    flex-flow: row wrap;
    display: flex;
    width: 100%;
    height: 210px;
    justify-content: space-between;
  }
  .versionAndDownloadContainer {
    align-self: flex-end;
    .appVersion {
      text-align: center;
      font-size: 14px;

    }
    a {
      background: #15171F;
      font-family: Open Sans;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: ${configs.app_title_color};
      border-radius: 100px;
      padding: 15px;
      border: none;
      i {
        margin: 0 5px;
        font-weight: 400;
        font-size: 24px;
      }
    }
  }

  .appDescription {
    letter-spacing: 2.8px;
    display: flex;
    align-items: flex-end;
    font-weight: 800;
    color: ${configs.app_description_color};
  }

  @media only screen and (max-width: 992px) {
    .appDescription {
      text-align: center;
    }
  }

  .downloadButtonsContainer {
    display: inline-block;
    margin-top: 42px;
    padding-bottom: 24px;
    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));
  }

  @media only screen and (max-width: 992px) {
    .downloadButtonsContainer {
      text-align: center;
    }
  }

  .windowsStore {
    height: 75px;
    margin-right: 24px;
  }

  @media only screen and (max-width: 992px) {
    .windowsStore {
      margin-right: 24px;
      margin-bottom: 0px;
    }
  }

  @media only screen and (max-width: 528px) {
    .windowsStore {
      margin-right: 0px;
      margin-bottom: 24px;
    }
  }

  .ubuntuStore {
    height: 75px;
    margin-right: 24px;
  }
  .webStore {
    margin-top: 24px;
    height: 75px;
  }

  // iPhone Device Preview

  .iphonePreview {
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: 100px;
  }

  .iphoneScreen {
    width: 349px;
    -webkit-clip-path: url(#screenMask);
    clip-path: url(#screenMask);
    margin-left: 26px;
    margin-top: 23px;
  }

  .videoContainer {
    width: 349px;
    height: 755px;
    -webkit-clip-path: url(#screenMask);
    clip-path: url(#screenMask);
    margin-left: 26px;
    margin-top: 23px;
  }

  .videoContainer > video {
    width: 349px;
    height: 755px;
  }

  @media only screen and (max-width: 1070px) {
    .iphonePreview {
      background-size: 100% auto;
      min-height: 450px;
    }

    .iphoneScreen {
      width: 322px;
      margin-left: 24px;
      margin-top: 22px;
    }

    .videoContainer {
      width: 322px;
      height: 698px;
      margin-left: 24px;
      margin-top: 22px;
    }

    .videoContainer > video {
      width: 322px;
      height: 698px;
    }
  }

  @media only screen and (max-width: 992px) {
    .iphonePreview {
      display: flex;
      background-size: 550px;
      background-position: center 0;
      margin-top: 47px;
      justify-content: center;
      padding-bottom: 75px;
    }

    .iphoneScreen {
      width: 226px;
      height: 488px;
      -webkit-clip-path: url(#screenMask);
      clip-path: url(#screenMask);
      margin: 0px;
      margin-top: 17px;
    }

    .videoContainer {
      width: 226px;
      height: 488px;
      margin-left: 0px;
      margin-top: 17px;
    }

    .videoContainer > video {
      width: 226px;
      height: 488px;
    }
  }

  @media only screen and (max-width: 552px) {
    .iphonePreview {
      background-size: 100%;
      min-height: 250px;
    }
  }

  // Feature List

  .features {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: center;
    background-color: ${configs.features_background_color};
    button {
      background-color: ${configs.main_color};
      color: ${configs.feature_button_text_color};
      font-family: Montserrat;
      padding: 25px;
      border-radius: 50px;
      outline: none;
      box-shadow: none;
      border: none;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      margin: 30px auto;
      text-transform: uppercase;
    }
    .featuresContainer {
      margin-top: 52px;
      display: flex;
      flex: 0 1 auto;
      flex-flow: row wrap;
      justify-content: center;
      overflow: hidden;
      flex-grow: 1;
      transition: all 0.5s ease-in;
      max-height: 350px;
      &.open {
        max-height: 15000px;
      }
    }
  }

  .feature {
    display: flex;
    flex-flow: column nowrap;
    margin: 50px;
    width: 240px;
    .featureTitle {
      display: flex;
      flex-flow: column nowrap;
      font-family: Montserrat;
      text-align: center;
      font-style: normal;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12px;
      margin-bottom: 20px;
      color: ${configs.feature_title_color};
      i {
        margin: 20px;
        font-size: 64px;
      }
    }
  .featureText > p {
    color: ${configs.feature_text_color};
    margin-top: 8px;
    line-height: 1.5;
    font-family: Open Sans;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
  }
}


.betaBadge{
  background-color: ${beta_badge_color};
  font-size: 10px;
  color: ${configs.feature_icons_background_color};
  padding: 3px;
  vertical-align: text-top;
  margin-left: 5px;
  border-radius: 5px;
}

  .feature:nth-child(-n + 3) {
    padding-top: 0px;
  }

  .feature:nth-child(3n) {
    padding-right: 0px;
  }

  .feature:nth-child(3n + 1) {
    padding-left: 0px;
  }

  .iconBack {
    color: ${configs.feature_icons_background_color};
  }

  .iconTop {
    color: ${configs.feature_icons_foreground_color};
  }

  .socialIconBack {
    color: ${configs.social_icons_background_color};
  }

  .socialIconTop {
    color: ${configs.social_icons_foreground_color};
  }


  @media only screen and (max-width: 992px) {
    .features {
      flex-grow: 1;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 11px;
    }

    .feature {
      display: flex;
      padding-top: 41px;
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
    }

    .feature:nth-child(-n + 3) {
      padding-top: 41px;
    }

    .feature:nth-child(1) {
      padding-top: 0px;
    }

    .feature:nth-child(3n) {
      padding-right: 15px;
    }

    .feature:nth-child(3n + 1) {
      padding-left: 15px;
    }
  }

  // Footer

  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

  .footerText {
    color: ${configs.footer_text_color};
    display: block;
    line-height: 1.5;
    width: 100%;
    text-align: center;
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .footerIcons {
    padding-bottom: 70px;
    display: flex;
  }

  @media only screen and (max-width: 992px) {
    .footerText {
      color: ${configs.footer_text_color};
      display: block;
      line-height: 1.5;
      width: 100%;
      text-align: center;
      padding-top: 54px;
      padding-bottom: 61px;
    }

    .footerIcons {
      padding-bottom: 70px;
      display: flex;
    }
  }

  .hidden {
    display: none;
  }
`
