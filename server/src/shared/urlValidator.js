const urlParser = (url) => {
  let formattedURL = url;

  if (!formattedURL.startsWith("http")) {
    formattedURL = "https://" + formattedURL;
  }
  if (!formattedURL.startsWith("https://www.")) {
    formattedURL = formattedURL.replace("https://", "https://www.");
  }

  return formattedURL;
};

module.exports = urlParser;
