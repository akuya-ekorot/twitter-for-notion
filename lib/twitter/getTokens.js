import { TwitterApi } from "twitter-api-v2";

export default async (code, codeVerifier) => {
  const client = new TwitterApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  const data = await client.loginWithOAuth2({
    code: code,
    codeVerifier: codeVerifier,
    redirectUri: process.env.CALLBACK_URL,
  });

  return data;
};
