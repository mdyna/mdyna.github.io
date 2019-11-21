import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Api from "../components/api"
import SEO from "../components/seo"
import Nav from "../components/Nav"
import Header from "../components/Header"
import Changelog from "../components/Changelog"
import Features from "../components/Features"
import Footer from "../components/Footer"

import "@fortawesome/fontawesome-free/css/all.min.css"

import configs from "../../site-config"
import CTA from "../components/CTA"

function getExtensionName(name) {
  const split = (name && name.split(".")) || ""
  return split[split.length - 1]
}

function isExtensionValid(extension) {
  return configs.supported_extensions.indexOf(extension) !== -1
}

class IndexPage extends React.PureComponent {
  state = {
    version: "",
    releases: [],
    releaseNotes: "",
    downloadLinks: [],
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
    const downloadLinks = []
    if (releases) {
      for (let i = 0; i < releases.length; i++) {
        const release = releases[i]
        const extension = getExtensionName(release.name)
        if (isExtensionValid(extension)) {
          downloadLinks.push(release.browser_download_url)
        }
      }
    }
    this.setState({ downloadLinks })
  }

  componentDidMount() {
    this.getReleases()
  }

  render() {
    const { data } = this.props
    const { releaseNotes, version, downloadLinks } = this.state
    return (
      <Layout>
        <SEO title="Home" keywords={configs.app_keywords} />

        <Nav data={data} />
        <Header data={data} version={version} />
        <Features />
        <CTA data={data} downloadLinks={downloadLinks} />
        <Changelog releaseNotes={releaseNotes} />
        <Footer />
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
        fluid(maxWidth: 220) {
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
