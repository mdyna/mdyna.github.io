import React from "react"
import Img from "gatsby-image"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

class CTA extends React.PureComponent {
  getExtension = downloadLink => {
    const splitLink =
      downloadLink && downloadLink.split && downloadLink.split(".")
    return splitLink[splitLink.length - 1]
  }
  render() {
    const { downloadLinks, data } = this.props
    return (
      <div className="cta" id="cta">
        <div className="container">
          <div className="cta-text">
            <h1>
              <i className="fas fa-download" />
            </h1>
            <h1>Ready to give it a try ?</h1>
            <h3>Download the MDyna client for free</h3>
          </div>
          <Img
            fluid={data.monitorWithPrintsPreview.childImageSharp.fluid}
            className="monitorWithPrintsPreview"
          />
          <div className="download-buttons" id="download">
            {downloadLinks.map((link, i) => {
              const extension = this.getExtension(link)
              return (
                <a
                  onClick={() => {
                    if (trackCustomEvent) {
                      trackCustomEvent({
                        category: "Download",
                        action: "Click",
                        label: `${extension} Downloaded`,
                        value: i,
                      })
                    }
                  }}
                  href={link}
                  key={`extension-${link}`}
                  aria-label={`${extension} download link`}
                >
                  Download{" "}
                  {(extension === "exe" && <i className="fab fa-windows" />) ||
                    (extension === "deb" && <i className="fab fa-ubuntu" />) ||
                    (extension === "dmg" && <i className="fab fa-apple" />)}
                  <span>{extension}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default CTA
