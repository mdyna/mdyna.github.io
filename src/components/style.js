import { createGlobalStyle } from "styled-components"
import configs from "../../site-config"

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

  header {
    display: flex;
    padding: 0px 50px;
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
  }

  .logo > p {
    color: ${configs.topbar_title_color};
    display: flex;
    font-weight: bold;
    padding-bottom: 1px;
  }

  .headerIcon {
    width: 50px;
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

  @media only screen and (max-width: 992px) {
    header {
      padding: 0;
    }
    nav > ul {
      color: #fff;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
    }
    nav > ul li {
      padding: 0;
      i {
        display: none !important;
      }
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
  @media only screen and (max-width: 992px) {
    .altMonitorWithPrintsPreview{
      width: 100%;
    }
    .monitorWithPrintsPreview {
      width: 100%;
    }
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
    max-width: 350px;
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
    margin: 15px;
  }

  @media only screen and (max-width: 992px) {
    .appName {
      margin-top: 0px;
      font-size: 20vw;
      line-height: 20vw;
    }
    .appLead {
      font-size: 10vw;
      line-height: 10vw;
    }
    .appSublead {
      font-size: 5vw;
      line-height: 5vw;
      text-align: center
    }
    .appSubLeadContainer {
      padding: 5px;
      justify-content: center
    }
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

    .download-buttons {
      display: flex;
      a {
        background-color: ${configs.cta_title_color};
        padding: 10px 25px;
        margin: 15px;
        line-height: 18px;
        font-family: Open Sans;
        font-weight: bold;
        font-size: 14px;
        border: none;
        border-radius: 100px;
        color: ${configs.main_color};
        i {
          font-weight: normal;
          font-size: 18px;
        }
        span {
          display: block;
          font-weight: normal;
        }
      }
    }
    @media only screen and (max-width: 992px) {
      .download-buttons{
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
      }
    }

  }
  .changelog {
    display: flex;
    margin-top: 52px;
    flex-flow: column;
    align-items: center;
    flex-grow: 1;
    flex: 0 1 auto;
    h2.appVersion{
      color: ${configs.changelog_title_color};
    }
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
        margin: 20px;
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
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
      max-height: 350px;
      &.open {
        max-height: 5000px;
        transition: max-height 1s ease-in-out;
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
@media only screen and (max-width: 992px) {
  .featuresTitle {
    font-size: 15vw;
    line-height: 15vw;
    letter-spacing: 3px;
  }
  .appLead {
    font-size: 10vw;
    line-height: 10vw;
  }
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
    margin-top: 50px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;


    .donations {
      background-color: ${configs.main_color};
      padding: 30px;
      margin: 10px;
      color: ${configs.cta_title_color};
      text-align: center;
      width: 100%;
      h3 {
        margin: 5px;
      }
      .crypto {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        margin: 10px;
        .crypto-value-pair {
          margin: 10px;
          dixplay: flex;
          flex-flow: column wrap;
        }
      }
    }
    .personalContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row nowrap;
      img {
        height: 200px;
        width: 200px;
      }
    }
  }



  .footerText {
    color: ${configs.footer_text_color};
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 66px;
    display: flex;
    align-items: center;
    display: flex;
    flex-flow: column;
    width: 1em;
    align-items: flex-start;
    a {
      color: ${configs.footer_text_color};
    }
  }
  .copyrightText {
    color: ${configs.main_color};
    margin-bottom: 50px;
    text-align: center;
  }

  .footerIcons {
    padding-bottom: 70px;
    margin: 64px 64px 0px 0px;
    justify-content: center;
    display: flex;
  }

  @media only screen and (max-width: 992px) {
    .footerText {
      width: 100%;
      line-height: 1.5;
      text-align: center;
      padding-top: 54px;
      align-items: center;
      padding-bottom: 61px;
    }
    .footerIcons {
      padding-bottom: 70px;
      display: flex;
      margin: 0 auto;
    }
    footer {
      .personalContainer {
        display: flex;
        align-items: center;
        flex-flow: column;
      }
    }
  }

  }
  .hidden {
    display: none;
  }
`
