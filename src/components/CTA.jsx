import React from "react"
import Img from "gatsby-image"
import configs from "../../site-config"

class CTA extends React.PureComponent {
  render() {
    const { downloadLinks, data } = this.props
    console.log(downloadLinks)
    return (
      <div className="cta" id="cta">
        <div className="container">
          <div className="cta-text">
            <h1>
              <i className="fas fa-download" />
            </h1>
            <h1>Ready to gige it a try ?</h1>
            <h3>Download the MDyna client for free</h3>
          </div>
          <Img
            fluid={data.monitorWithPrintsPreview.childImageSharp.fluid}
            className="monitorWithPrintsPreview"
          />
          <div className="download-buttons">
            <button>Download</button>
            <button>Download</button> <button>Download</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CTA
