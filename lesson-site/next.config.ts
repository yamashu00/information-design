import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pagesのリポジトリ名に合わせてbasePathを設定（本番環境のみ）
  basePath: process.env.GITHUB_ACTIONS ? "/information-design" : "",
  images: {
    // 静的エクスポートではNext.jsの画像最適化が使えないため無効化
    unoptimized: true,
  },
};

export default nextConfig;
