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
          <p className="appVersion">{version}</p>
        </div>
        <div className="downloadButtonsContainer"> </div>
      </div>
    )
  }
}

export default Header
