const SITES = [
  {
    url: /ovh\.co\.uk|(www\.)?ovhcloud\.com/,
    steps: [
      "#header_tc_privacy_button"
    ]
  },
  {
    url: /google\.com/,
    steps: [
      ".QS5gu.sy4vM"
    ]
  },
  {
    url: /consent\.google\.com/,
    steps: [
      "div.VfPpkd-WsjYwc:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)",
      "div.VfPpkd-WsjYwc:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)",
      ".IgeUeb > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)",
      "button.VfPpkd-LgbsSe-OWXEXe-k8QpJ"
    ]
  },
  {
    url: /reddit\.com/,
    steps: [
      "._2BNSty-Ld4uppTeWGfEe8r > form:nth-child(1) > button:nth-child(1)"
    ]
  },
  {
    url: /(www\.)?bing\.com/,
    steps: [
      "#bnp_btn_reject"
    ]
  },
  {
    url: /(www\.)?amazon\..+/,
    steps: [
      "#sp-cc-customize",
      "#savePrefs > span:nth-child(1) > input:nth-child(1)"
    ]
  },
  {
    url: /(www\.)?ebay\..+/,
    steps: [
      "#gdpr-banner-decline"
    ]
  },
  {
    url: /stackoverflow\.com/,
    steps: [
      "button.flex--item:nth-child(2)",
      ".js-consent-save"
    ]
  },
  {
    url: /(www\.)?youtube\.com/,
    steps: [
      "ytd-button-renderer.style-primary:nth-child(1) > a:nth-child(1) > tp-yt-paper-button:nth-child(1)"
    ]
  },
  {
    url: /(www\.)?microsoft\.com/,
    steps: [
      "button._1XuCi2WhiqeWRUVp3pnFG3:nth-child(2)"
    ]
  },
  {
    url: /modrinth\.com/,
    steps: [
      "button.btn:nth-child(1)",
      "button.iconified-button:nth-child(1)",
      "div.card:nth-child(2) > button:nth-child(2)"
    ]
  }
]

for(const site of SITES) {
  if(site.url.test(window.location.host)) {
    for(const step of site.steps) {
      const element = document.querySelector(step)
      if(element) {
        element.click()
      }
    }
  }
}