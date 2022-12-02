
module.exports = {
  clientId: '7a95feb4-e7fe-4063-850e-0b50e6b45bed',
  obfuscatedClientSecret: 'U2FsdGVkX182iGAlwEnGGzygdmuv7IEXElWuB/lrv+yA44LAa1UnUGVTvCMYosc+bMrP25IrV0rpJjdCxrow3A==',
  redirectUri: 'http://localhost',
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',
  scope: 'user.read files.read.all offline_access',
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
