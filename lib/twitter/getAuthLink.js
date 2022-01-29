import { TwitterApi } from "twitter-api-v2";

export default () => {
  const client = new TwitterApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  const { url, codeVerifier, state } = client.generateOAuth2AuthLink(
    process.env.CALLBACK_URL,
    {
      scope: ["tweet.read", "users.read", "offline.access", "tweet.write"],
    }
  );

  const data = {
    url,
    codeVerifier,
    state,
  };
  // Redirect your user to {url}, store {state} and {codeVerifier} into a DB/Redis/memory after user redirection

  return data;
};
