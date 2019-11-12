import React from "react"
import { graphql } from "gatsby"

import Markdown from "markdown-to-jsx"
import Layout from "../components/layout"
import Api from "../components/api"
import SEO from "../components/seo"
import Nav from "../components/Nav"
import Header from "../components/Header"
import Changelog from "../components/Changelog"

import "@fortawesome/fontawesome-free/css/all.min.css"

import configs from "../../site-config"

function getExtensionName(name) {
  const split = (name && name.split(".")) || ""
  return split[split.length - 1]
}

function isExtensionValid(extension) {
  return configs.supported_extensions.indexOf(extension) !== -1
}

class IndexPage extends React.PureComponent {
  state = {
    ubuntuLink: "",
    version: "",
    releases: [],
    releaseNotes: "",
    windowsLink: "",
  }

  getReleases() {
    Api.get("/releases")
      .then(data => {
        if (data && data.data && data.data[0]) {
          const releaseData = data.data[0]
          const newVersion = releaseData.tag_name
          const newNotes = releaseData.body
          const newReleases = releaseData.assets
          if (newVersion && newReleases.length) {
            localStorage.setItem("version", newVersion)
            localStorage.setItem("releases", newReleases)
            localStorage.setItem("releaseNotes", newNotes)
          }

          return this.setState({
            releaseNotes: newNotes,
            version: newVersion,
            releases: newReleases,
          })
        }
        return this.setState({
          version: localStorage.getItem("version"),
          releaseNotes: localStorage.getItem("releaseNotes"),
          releases: localStorage.getItem("releases"),
        })
      })
      .then(() => this.getDownloadLinks())
  }

  getDownloadLinks() {
    const { releases } = this.state
    if (releases) {
      for (let i = 0; i < releases.length; i++) {
        const release = releases[i]
        const extension = getExtensionName(release.name)
        if (isExtensionValid(extension)) {
          if (extension === "exe") {
            this.setState({
              windowsLink: release.browser_download_url,
            })
          } else {
            this.setState({
              ubuntuLink: release.browser_download_url,
            })
          }
        }
      }
    }
  }

  componentDidMount() {
    this.getReleases()
  }

  render() {
    const { data } = this.props
    const { ubuntuLink, windowsLink, releaseNotes, version } = this.state
    return (
      <Layout>
        <SEO title="Home" keywords={configs.app_keywords} />

        <div
          className="imageWrapper"
          style={{
            background: configs.main_color,
          }}
        >
          <div className="headerBackground">
            <div className="container">
              <Nav data={data} />
              <Header data={data} version={version} />
              <Changelog releaseNotes={releaseNotes} />
              <div className="features">
                <h1 className="featuresTitle">Features</h1>
                <div className="features-container">
                  {configs.features.map(feature => {
                    if (feature.title) {
                      return (
                        <div
                          className="feature"
                          key={`feature-${feature.title}`}
                        >
                          <div>
                            <span className="fa-stack fa-1x">
                              <i
                                className={`iconBack fas fa-circle fa-stack-2x`}
                              />
                              <i
                                className={`iconTop ${
                                  feature.fab ? "fab" : "fas"
                                } fa-${
                                  feature.fontawesome_icon_name
                                } fa-stack-1x`}
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
                    return null
                  })}
                </div>
              </div>
              <footer>
                <p className="footerText">
                  Made by{" "}
                  {configs.your_link ? (
                    <a href={configs.your_link}>{configs.your_name}</a>
                  ) : (
                    `${configs.your_name}`
                  )}
                  {configs.your_city && ` in ${configs.your_city}`}
                </p>
                <div className="footerIcons">
                  {configs.facebook_username && (
                    <a
                      href={`https://facebook.com/${configs.facebook_username}`}
                      aria-label="Facebook"
                    >
                      <span className="fa-stack fa-1x">
                        <i className="socialIconBack fas fa-circle fa-stack-2x" />
                        <i className="socialIconTop fab fa-facebook fa-stack-1x" />
                      </span>
                    </a>
                  )}

                  {configs.twitter_username && (
                    <a
                      href={`https://twitter.com/${configs.twitter_username}`}
                      aria-label="Twitter"
                    >
                      <span className="fa-stack fa-1x">
                        <i className="socialIconBack fas fa-circle fa-stack-2x" />
                        <i className="socialIconTop fab fa-twitter fa-stack-1x" />
                      </span>
                    </a>
                  )}

                  {configs.github_username && (
                    <a
                      href={`https://github.com/${configs.github_username}`}
                      aria-label="GitHub"
                    >
                      <span className="fa-stack fa-1x">
                        <i className="socialIconBack fas fa-circle fa-stack-2x" />
                        <i className="socialIconTop fab fa-github fa-stack-1x" />
                      </span>
                    </a>
                  )}

                  {configs.email_address && (
                    <a
                      href={`mailto:${configs.email_address}`}
                      aria-label="Email"
                    >
                      <span className="fa-stack fa-1x">
                        <i className="socialIconBack fas fa-circle fa-stack-2x" />
                        <i className="socialIconTop fas fa-envelope fa-stack-1x" />
                      </span>
                    </a>
                  )}
                </div>
                <p className="footerText">
                  <i className="fas fa-copyright" />
                  {configs.app_creation_date ===
                  String(new Date().getFullYear())
                    ? ` ${configs.app_creation_date} `
                    : ` ${
                        configs.app_creation_date
                      } - ${new Date().getFullYear()} `}
                  {configs.app_name}
                </p>
              </footer>
              {/*TODO: Add App Store API */}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query {
    headerIcon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ubuntuStore: file(relativePath: { eq: "ubuntuStore.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    webStore: file(relativePath: { eq: "webStore.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    windowsStore: file(relativePath: { eq: "windowsStore.png" }) {
      childImageSharp {
        fixed(height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    appIconLarge: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerImage: file(relativePath: { eq: "headerimage.png" }) {
      childImageSharp {
        fluid(maxHeight: 714) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    monitorWithPrintsPreview: file(relativePath: { eq: "mockup2.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    altMonitorWithPrintsPreview: file(relativePath: { eq: "mockup.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
