/**
 * Extracts query parameters from a URL and returns them as an object.
 * @param url [optional] URL to extract parameters from. (deafult: current url)
 * @returns   Object with query parameters as key-value pairs
 */
export default function extractQueryParameters(url = window.location.href) {
  const urlObject = new URL(url);
  const params = {};

  for (const [key, value] of urlObject.searchParams.entries()) {
    params[key] = value;
  }

  return params;
}
