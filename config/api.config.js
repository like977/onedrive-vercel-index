
module.exports = {
  clientId: '7a95feb4-e7fe-4063-850e-0b50e6b45bed',
  obfuscatedClientSecret: 'U2FsdGVkX1/JlMfILNHHsX9cxTTxFsDawTn+i2eerynhJZ9VNyf+IZR1Nu0kP6Wkwz/J3+sWBm2uS+AVR4Tvcw==',
  redirectUri: 'http://localhost',
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',
  scope: 'user.read files.read.all offline_access',
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
