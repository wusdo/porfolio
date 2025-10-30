/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. STATİK ÇIKTI AYARI (GitHub Pages için ZORUNLU)
  // Bu ayar, 'npm run build' çalıştırıldığında 'out' klasörünü oluşturur.
  output: 'export', 

  // 2. BASE PATH AYARI
  // Projeniz 'https://<kullanici>.github.io/<repo-adınız>/' adresinde açılacağı için gereklidir.
  basePath: '/<porfolio>', 
  assetPrefix: '/<porfolio>/', 

  // 3. Mevcut Ayarlarınız
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;