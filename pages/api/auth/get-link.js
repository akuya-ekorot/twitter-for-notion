import getAuthLink from "../../../lib/twitter/getAuthLink";
import Cookies from "cookies";

export default async function handler(req, res) {
  const { url, codeVerifier, state } = getAuthLink();

  const cookies = new Cookies(req, res);

  cookies.set("codeVerifier", codeVerifier);
  cookies.set("sessionState", state);

  res.redirect(url);
}
