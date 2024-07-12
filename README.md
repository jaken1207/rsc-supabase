# _Notebooks_

更新日時： 24/7/10 18:10  
コース：10.Root segments + file conventions

マークダウンのプレビュー  
_Control + K → V_

# プロジェクト概要

## 使用技術

[![Tizen](https://img.shields.io/badge/-Next.js-222.svg?logo=next.js&style=plastic&logoColor=white)](https://nextjs.org/)
[![Tizen](https://img.shields.io/badge/-typescript-222.svg?logo=typescript&style=plastic&logoColor=2fb1ed)](https://www.typescriptlang.org/)
[![Tizen](https://img.shields.io/badge/-supabase-222.svg?logo=supabase&style=plastic&logoColor=4FC08D)](https://supabase.com/)
[![Tizen](https://img.shields.io/badge/-tailwind-222.svg?logo=tailwindcss&style=plastic&logoColor=38bdf8)](https://tailwindcss.com/)

## _reference_

Udemy：[Next.js 13 App Router による次世代 Web 開発](https://defidejp.udemy.com/course/nextjs-supabase-app-directory/learn/lecture/37760856#overview)  
Repository：[GitHubRepo](https://github.com/GomaGoma676/nextjs-app-router-supabase)

### _Overview_

- NestedLayout
- Benefit of Server component(js bundle size + streamingHTML)
- Server component + Client component
- Data fetching in server component ("force-cache","no-store","revalidate")
  - cache option
    - force-cache <u>Static Rendaring ○</u> (defalut)  
      ビルド時に HTML を生成し、CDN にキャッシュするため、サーバーのデータ変更をリアルタイムに更新しない。  
      ビルド時に生成された HTML は .next>server>app>index.html に格納される。
    - no-store <u>Dynamic Rendaring λ</u>  
      サーバー側の変更を反映する
    - next : {revalidate:10}  
      一定時間たつとリロードし HTML を再生成する
- Static and Dynamic rendering
- Fetch level and segment level cache options
- Dynamic segment and generateStaticParams
- Client side caching in navigation
- Soft and Hard navigation
- Revalidation frequency
- Streaming server rendering with suspense (streamingHTML)
- Re-rendering by router.refresh(Mutation)
- gen types in Supabase
- CRUD operation with protected endpoint
- Middleware
  _continue..._
