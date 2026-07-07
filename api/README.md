# /api/social-stats

Serverless endpoint that returns live social media stats for قبيلة النعيم أهل الصفرا ٥١٥.

## Endpoint

```
GET /api/social-stats
```

## Response

```json
{
  "youtube": { "subscribers": 614, "videos": 184, "views": 211000 },
  "facebook": { "followers": 103000 },
  "totals": { "views": 211000, "videos": 184 },
  "updatedAt": "2026-07-07T10:00:00.000Z",
  "source": "live"
}
```

## Required environment variables (set in Vercel dashboard)

| Variable | Where to get it |
|----------|------------------|
| `YOUTUBE_API_KEY` | [Google Cloud Console](https://console.cloud.google.com/) → Enable YouTube Data API v3 → Create API key |
| `YOUTUBE_CHANNEL_ID` | YouTube channel page → View page source → look for `"externalId":"UC..."` |
| `FACEBOOK_ACCESS_TOKEN` | [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/) → Get Page Access Token (long-lived) |
| `FACEBOOK_PAGE_ID` | Facebook Page → About → Page Transparency → Page ID |

## Caching

- In-memory cache: 6 hours
- CDN cache (Vercel Edge): `s-maxage=21600, stale-while-revalidate=86400` (6h fresh, 24h stale-while-revalidate)

## Fallback

If both APIs fail or env vars are missing, the endpoint returns hard-coded fallback values matching the current shown numbers.

## Setup steps

1. Get YouTube API key (free tier: 10,000 units/day)
2. Find YouTube channel ID for `@qabilatalnaim`
3. Create Facebook Page Access Token (long-lived: 60 days)
4. In Vercel: Settings → Environment Variables → add the 4 variables
5. Redeploy — `/api/social-stats` will start returning live data