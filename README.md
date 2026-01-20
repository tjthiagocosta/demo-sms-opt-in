# Saenz Global SMS Consent Demo

## Consent storage (internal note)
Submissions are recorded by `app/api/sms-consent/route.js` and appended to
`data/consents.jsonl` as JSON Lines. Each record stores:

- timestamp
- phone and phoneSanitized
- pageUrl
- ipAddress
- userAgent
- consentText and consentVersion
- termsUrl and privacyUrl

Note: Vercel serverless file storage is ephemeral. For production retention,
replace the file append with durable storage (Postgres, S3, or another datastore)
while keeping the same fields for compliance.

## Local development
```
npm install
npm run dev
```
# demo-sms-opt-in
