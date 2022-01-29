import { prisma } from "@prisma/client";
import getTokens from "../../../../lib/twitter/getTokens";

export default async function handler(req, res) {
  const { state, code } = req.query;

  const { codeVerifier, sessionState } = req.cookies;

  const {
    client: userClient,
    accessToken,
    refreshToken,
    expiresIn,
  } = await getTokens(code, codeVerifier);

  const { data: user } = await userClient.v2.me({
    "user.fields": ["profile_image_url"],
  });

  res.json(user);
}
