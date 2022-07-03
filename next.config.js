const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { createSecureHeaders } = require('next-secure-headers')

module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  webpack5: true
}

module.exports = withPWA({
  async headers() {
    return [
      {
        source: '/',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: 'self',
              scriptSrc: [
                'report-sample',
                'self',
                '//player.twitch.tv/js/embed/v1.js'
              ],
              styleSrc: ['report-sample', 'self'],
              objectSrc: 'none',
              baseUri: 'self',
              connectSrc: ['self', '//api.premiere.sh'],
              fontSrc: 'self',
              frameSrc: ['self', '//player.twitch.tv'],
              imgSrc: 'self',
              manifestSrc: 'self',
              mediaSrc: 'self',
              reportUri: '//62c07ccc9bc141b6c53719a4.endpoint.csper.io/?v=6',
              workerSrc: 'self'
            }
          },
          forceHTTPSRedirect: [
            true,
            { maxAge: 31536000, includeSubDomains: true, preload: true }
          ],
          frameGuard: 'sameorigin',
          xssProtection: 'block-rendering',
          referrerPolicy: 'same-origin'
        })
      }
    ]
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    buildExcludes: ['_next/static/', '_next/bundles/']
  }
})
