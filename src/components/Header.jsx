import React from "react"
import Img from "gatsby-image"
import configs from "../../site-config"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

class Header extends React.PureComponent {
  render() {
    const { data, version } = this.props
    return (
      <>
        <div
          className="imageWrapper"
          style={{
            background: configs.main_color,
          }}
        >
          <div className="container">
            <div className="appInfo">
              <div className="appIconShadow">
                <Img
                  fluid={data.appIconLarge.childImageSharp.fluid}
                  className="appIconLarge"
                />
              </div>
              <h1 className="appName">{configs.app_name.toUpperCase()}</h1>
              <div className="appNamePriceContainer">
                <p className="appDescription">{configs.app_description}</p>
              </div>
              <div className="appDescriptionContainer">
                <p className="appLead">{configs.app_lead}</p>
                <div className="versionAndDownloadContainer">
                  <a
                    href="#cta"
                    onClick={() => {
                      if (trackCustomEvent) {
                        trackCustomEvent({
                          category: "Page Interactions",
                          action: "Click",
                          label: `CTA clicked`,
                          value: 4,
                        })
                      }
                    }}
                  >
                    Download<i className="fab fa-windows"></i>
                    <i className="fab fa-ubuntu"></i>
                    <i className="fab fa-apple"></i>
                  </a>
                  <p className="appVersion">{version}</p>
                </div>
              </div>
              <div className="downloadButtonsContainer"> </div>
            </div>
          </div>
        </div>
        <div className="appSubLeadContainer">
          <Img
            fluid={data.altMonitorWithPrintsPreview.childImageSharp.fluid}
            className="altMonitorWithPrintsPreview"
          />
          <p className="appSublead">{configs.app_sub_lead}</p>
        </div>
      </>
    )
  }
}

export default Header
