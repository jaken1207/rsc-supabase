# _Notebooks_

更新日時： 24/7/12 18:19  
コース：11 途中

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
  - Server component  
    **データ取得、バックエンドに直接アクセス、access tocken, API key を含むサーバーとのやり取り、npm などのパッケージが大きいときは SC を利用する。**
    - サーバーで Rendering されるコンポーネント → js やパッケージは client に送られない
    - Data fetch に async function が使用できる
    - Secure Key が参照（使用）可能※env ファイル内の
    - Browser API が使用不可
    - useState,useEffect が使用不可
    - Event listener(onClick 等)は使用不可
  - Client component  
    **イベントリスナーの使用、useState,useReducer,useEffect,Customhooks の使用、useBrowser API の使用するときは CC を利用する**
    - ブラウザで JS を実行する
    - Data fetch に async function を使用できない  
      useEffect, React-query, SWR, use を使用する必要がある
    - Secure Key を使用不可
    - useState, useEffect 等を使用可
    - Event Listener(onClick 等)を使用可

<u>※ClientComponent に ServerComponent を使用することはできない。  
ClientComponent の Children として ServerComponent はネストできる</u>

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
  SSR の DataFetch が完了しないと HTML を返却しないという問題に対して StreamingHMTL である。処理が遅いコンポーネントに対して、suspence でラップすることで、他のコンポーネントが早く表示できる。
- Re-rendering by router.refresh(Mutation)
- gen types in Supabase
- CRUD operation with protected endpoint
- Middleware
  _continue..._
