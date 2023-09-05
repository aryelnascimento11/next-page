/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'imagens.mdig.com.br',
            port: '',
            pathname: '/thbs/45184mn.jpg',
          },
        ],
      },
}

module.exports = nextConfig
