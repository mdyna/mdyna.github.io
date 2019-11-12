import React from "react"
import Img from "gatsby-image"
import configs from "../../site-config"

class Header extends React.PureComponent {
  render() {
    const { data, version } = this.props
    return (
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
            <a href="#download">
              Download now<i class="fab fa-windows"></i>
              <i class="fab fa-ubuntu"></i>
            </a>
            <p className="appVersion">{version}</p>
          </div>
        </div>
        <div className="downloadButtonsContainer"> </div>
      </div>
    )
  }
}

export default Header
