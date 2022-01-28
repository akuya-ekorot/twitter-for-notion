import { prisma } from "@prisma/client";
import { TwitterApiv2 as Twitter } from "twitter-api-v2";

export default function handler(req, res) {
  const client = new Twitter({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  const { url, codeVerifier, state } = client.generateOAuth2AuthLink(
    process.env.CALLBACK_URL,
    { scope: "tweet.read tweet.write users.read offline.access" }
  );
}
