
module.exports = {
  clientId: 'd87bcc39-1750-4ca0-ad54-f8d0efbb2735',
  obfuscatedClientSecret: 'U2FsdGVkX1830zo3/pFDqaBCVBb37iLw3WnBDWGF9GIB2f4apzv0roemp8Y+iIxI3Ih5ecyukqELQEGzZlYiWg==',
  redirectUri: 'http://localhost',
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',
  scope: 'user.read files.read.all offline_access',
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
