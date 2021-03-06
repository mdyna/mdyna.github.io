import React from "react"
import configs from "../../site-config"
import PaypalDonateBtn from "./PayPalDonateBtn"

class Footer extends React.PureComponent {
  render() {
    return (
      <footer>
        <div className="personalContainer">
          <img src={configs.gravatar_url} alt="gravatar" />
          <p className="footerText">
            by{" "}
            {configs.your_link ? (
              <a href={configs.your_link}>{configs.your_name}</a>
            ) : (
              `${configs.your_name}`
            )}
          </p>
        </div>
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

          {configs.linkedin_username && (
            <a
              href={`https://www.linkedin.com/in/${configs.linkedin_username}`}
              aria-label="LinkedIn"
            >
              <span className="fa-stack fa-1x">
                <i className="socialIconBack fas fa-circle fa-stack-2x" />
                <i className="socialIconTop fab fa-linkedin fa-stack-1x" />
              </span>
            </a>
          )}

          {configs.email_address && (
            <a href={`mailto:${configs.email_address}`} aria-label="Email">
              <span className="fa-stack fa-1x">
                <i className="socialIconBack fas fa-circle fa-stack-2x" />
                <i className="socialIconTop fas fa-envelope fa-stack-1x" />
              </span>
            </a>
          )}
        </div>
        <div className="donations">
          <h3>Buy me a coffee</h3>
          <PaypalDonateBtn />
          <div className="crypto">
            <div className="crypto-value-pair">
              <h4>ETH</h4>
              <p>0x6a1FbdAF8ad2cAE7D05E89018Eb1B7C0Abca2191</p>
            </div>
            <div className="crypto-value-pair">
              <h4>BTC</h4>
              <p>13y1RAqVrBxYK9UEeFWBEyiExQE8CnkvkD</p>
            </div>
            <div className="crypto-value-pair">
              <h4>LTC</h4>
              <p>MRpfP5M4q5Y5oe3aZkCJModwLFHzftbAQ4</p>
            </div>
          </div>
        </div>
        <p className="copyrightText">
          <i className="fas fa-copyright" />
          {configs.app_creation_date === String(new Date().getFullYear())
            ? ` ${configs.app_creation_date} `
            : ` ${configs.app_creation_date} - ${new Date().getFullYear()} `}
          {configs.app_name}
        </p>
      </footer>
    )
  }
}

export default Footer
