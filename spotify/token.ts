const client_id = process.env.SPOTIFY_CLIENT_ID!;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;

let cachedToken: { token: string; expiresAt: number } | null = null;

export async function getSpotifyToken(): Promise<string> {
  const now = Date.now();

  if (cachedToken && cachedToken.expiresAt > now) {
    return cachedToken.token;
  }

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();

  const expiresIn = data.expires_in * 1000;
  cachedToken = {
    token: data.access_token,
    expiresAt: now + expiresIn - 10_000, // buffer di 10 sec
  };

  return data.access_token;
}
