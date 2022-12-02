
module.exports = {
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || '1768045871@qq.com',
  icon: '/icons/128.png',
  kvPrefix: process.env.KV_PREFIX || '',
  title: "Liam's OneDrive",
  baseDirectory: '/Public',
  maxItems: 100,
  googleFontSans: 'Inter',
  googleFontMono: 'Fira Mono',
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],
  footer:
    'Powered by <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">onedrive-vercel-index</a>. Made with ❤ by SpencerWoo.',
  protectedRoutes: ['/Private/u', '/Some/Protected'],
  email: 'mailto:spencer.wushangbo@gmail.com',
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/spencerwooo/onedrive-vercel-index',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/realSpencerWoo',
    },
  ],
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
