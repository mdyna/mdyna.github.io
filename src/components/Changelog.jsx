import React from "react"
import configs from "../../site-config"
import Markdown from "markdown-to-jsx"

class Changelog extends React.PureComponent {
  render() {
    const { releaseNotes, version } = this.props
    return (
      <div className="changelog" id="download">
        <h1 className="changelogTitle">Changelog</h1>
        <h3>
          <a
            href={`${configs.app_github_url}/releases`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Full release notes
          </a>
        </h3>
        <h2 className="appVersion">{version}</h2>
        <Markdown className="releaseNotes">{releaseNotes || ""}</Markdown>
      </div>
    )
  }
}

export default Changelog
