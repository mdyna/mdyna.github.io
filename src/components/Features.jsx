import React from "react"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import configs from "../../site-config"

class Features extends React.PureComponent {
  state = {
    featuresOpen: false,
  }

  titleRef = React.createRef()

  scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 250)

  toggleFeatures() {
    trackCustomEvent({
      category: "Page Interactions",
      action: "Click",
      label: `Features toggled`,
      value: 5,
    })
    if (this.state.featuresOpen) {
      this.scrollToRef(this.titleRef)
    }
    this.setState({
      featuresOpen: !this.state.featuresOpen,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="features" id="features">
          <h1 className="featuresTitle">Features</h1>
          <div
            ref={this.titleRef}
            className={`featuresContainer ${this.state.featuresOpen && "open"}`}
          >
            {configs.features.map((feature, index) => {
              if (this.state.featuresOpen || index < 3) {
                if (feature.title) {
                  return (
                    <div className="feature" key={`feature-${feature.title}`}>
                      <div className="featureTitle">
                        <i
                          className={`iconTop ${
                            feature.fab ? "fab" : "fas"
                          } fa-${feature.fontawesome_icon_name}`}
                        >
                          {feature.titleImage}
                        </i>
                        <h1>{feature.title}</h1>
                      </div>
                      <div className="featureText">
                        <h3>
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
      </div>
    )
  }
}

export default Features
