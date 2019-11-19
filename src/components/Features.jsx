import React, { useState } from "react"
import Img from "gatsby-image"
import configs from "../../site-config"

class Features extends React.PureComponent {
  state = {
    featuresOpen: false,
  }

  toggleFeatures() {
    this.setState({
      featuresOpen: !this.state.featuresOpen,
    })
  }

  render() {
    return (
      <div className="features">
        <h1 className="featuresTitle">Features</h1>
        <div
          className={`featuresContainer ${this.state.featuresOpen && "open"}`}
        >
          {configs.features.map((feature, index) => {
            if (this.state.featuresOpen || index < 3) {
              if (feature.title) {
                return (
                  <div className="feature" key={`feature-${feature.title}`}>
                    <div>
                      <span className="fa-stack fa-1x">
                        <i className={`iconBack fas fa-circle fa-stack-2x`} />
                        <i
                          className={`iconTop ${
                            feature.fab ? "fab" : "fas"
                          } fa-${feature.fontawesome_icon_name} fa-stack-1x`}
                        />
                      </span>
                    </div>
                    <div className="featureText">
                      <h3>
                        {feature.title}
                        {feature.soon ? (
                          <span className="soonBadge">Soon</span>
                        ) : (
                          ""
                        )}
                        {feature.beta ? (
                          <span className="soonBadge">BETA</span>
                        ) : (
                          ""
                        )}
                      </h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                )
              }
            }
            return null
          })}
        </div>
        <button
          className="featuresToggleButton"
          onClick={() => this.toggleFeatures()}
        >
          {this.state.featuresOpen ? "Show less" : "Learn More"}
        </button>
      </div>
    )
  }
}

export default Features
