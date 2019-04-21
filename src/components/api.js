import axios from "axios"
import configs from "../../site-config"

export default axios.create({
  baseURL: configs.github_api_url,
  timeout: 3000,
})
