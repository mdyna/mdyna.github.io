module.exports = {
  // App Info
  github_api_url        : "https://api.github.com/repos/mdyna/mdyna-app",
  supported_extensions  : ['exe','AppImage'],
  google_analytics_ID   : "UA-138737086-1",                                        // Enter Google Analytics ID or ""
  app_github_url        : "https://github.com/mdyna/mdyna-app",                                  // Enter a link to downloadable file or (e.g. public Dropbox link to a .zip file).
  community_website     : "https://spectrum.chat/mdyna",
  video_or_screenshot   : "screenshot",                                           // "screenshot" or "video"
  app_url               : "https://mdyna.dev",                            // Domain of your website without path_prefix.
  path_prefix           : "/",                                                    // Prefixes all links. For cases when deployed to example.github.io/automatic-gatsbyjs-app-landing-page/.
  app_name              : "Mdyna",
  app_price             : "Free",
  app_creation_date     : "2018",
  app_description       : "Markdown | Code Syntax Highlighting | Dark Theme | WSIWYG Editor",
  app_keywords          : ["markdown", "code", "notes", "cards", "dark theme", "built-in editor", "react", "electron", "grommet"],

  // Personal Info
  your_name              : "David Morais",
  your_link              : "https://dmorais92.github.com",
  your_city              : "Lisbon",
  email_address          : "davidmorais92@gmail.com",
  facebook_username      : null,
  instagram_username     : "dmorais92",
  twitter_username       : "Psybork",
  github_username        : "dmorais92",
  youtube_username       : null,

  // Features List
  features               : [
    {
      title: "Markdown suppport",
      description:
        "Mdyna supports GFM Syntax. With Mdyna, you write markdown and you get beautiful formatted cards.",
      fontawesome_icon_name: "markdown",
      fab: true,
    },
    {
      title: "Dark & Light theme",
      description:
        "Use the app with your favorite color theme, Mdyna has both light and dark theme, and more incoming",
      fontawesome_icon_name: "palette",
    },
    {
      title: "Labels",
      description:
        "Tag your cards with labels so you can easily look for them.",
      fontawesome_icon_name: "tags",
    },
    {
      title: "Code Syntax Highlighting",
      description:
        "Javascript, Python, Java, C#... Mdyna cards support code syntax highlighting for every language.",
      fontawesome_icon_name: "code",
    },
    {
      title: "Free",
      description:
        "Built with React, Electron and other Open Source tools, Mdyna is completely free and open source. No ads, no subscription, forever.",
      fontawesome_icon_name: "react",
      fab: true,
    },
    {
      title: "Powerful editor",
      description: "In case you're not entirely familiar with the markdown syntax. Mdyna offers a powerful WYSIWYG editor.",
      fontawesome_icon_name: "pen-nib",
    },
    {
      title: "Keyboard shortcuts",
      description:
        "Mdyna offers several keyboard shortcuts for navigation, filtering and editing cards.",
      fontawesome_icon_name: "keyboard",
    },
    {
      title: "Boards",
      description:
        "In case labels and colors aren't enough, you can also organize your cards by boards, so that you can only see the cards that are relevant to you",
      fontawesome_icon_name: "chalkboard",
      soon: true,
    },
    {
      title: "Sync with Cloud",
      description:
        "Sync your notes with Google Drive or Dropbox so you can access them in multiple devices",
      fontawesome_icon_name: "cloud",
      soon: true,
    },
    {
      title: "Share cards",
      description:
        "Sync your cards with your mates with randomly generated links which make your cards public for up to 1 hour",
      fontawesome_icon_name: "share",
      soon: true,
    },
  ],
  header_background             : "rgba(0, 0, 0, 0.1)",
  topbar_title_color            : "#ffffff",
  cover_overlay_color_rgba      : "rgba(54, 59, 61, 0.8)",
  device_color                  : "monitor-with-prints",                          // Set to "black", "blue", "coral", "white", or "yellow"
  body_background_color         : "#15171f",
  primary_text_color            : "#1de9b6",
  content_width                 : "1170px",
  font                          : `"Helvetica Neue", sans-serif`,
  link_color                    : "#64ffda",
  app_title_color               : "#1de9b6",
  changelog_title_color         : "#1de9b6",
  app_version_color             : "#1de9b6",
  app_price_color               : "#ffffff",
  app_description_color         : "#ffffff",
  feature_title_color           : "#1de9b6",
  feature_text_color            : "#c5c6c7",
  feature_icons_foreground_color: "#1de9b6",
  feature_icons_background_color: "#181f27",
  social_icons_foreground_color : "#01a982",
  social_icons_background_color : "#181f27",
  footer_text_color             : "#c5c6c7",
}
