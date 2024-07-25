---
marp: true
theme: gaia
_class: lead
backgroundColor: #fff
---

<!--
headingDivider: 1
-->

# _レンダリング技術の遷移_

_永田 佑斗_

# なぜ、この話題なのか。

- 2023 年 5 月 5 日、Next.js13.4 では、AppRouter が Stable になった。AppRouter によってレンダリング手法は転換期を迎えている。

- いままでのレンダリング手法をまとめ、最新のレンダリング技術のすばらしさを実感してもらおう。

- コードは一切使わず説明する

# 参考文献

Zenn:[一言で理解する React Server Components](https://zenn.dev/uhyo/articles/react-server-components-multi-stage)

Zenn:[React Server Components を理解したい](https://zenn.dev/yuu104/articles/react-server-component)

Zenn:[SSR, CSR, SSG, PPR の整理](https://zenn.dev/beingish/articles/a5545ebf4f1fa7)

Zenn:[PPR - pre-rendering 新時代の到来と SSR/SSG 論争の終焉](https://zenn.dev/akfm/articles/nextjs-partial-pre-rendering)

Zenn:[SPA/MPA と CSR/SSR/SSG の分類](https://zenn.dev/mt877/articles/6dc3afe99ee794)

Udemy:[Next.js 13 App Router による次世代 Web 開発](https://defidejp.udemy.com/course/nextjs-supabase-app-directory/learn/lecture/37760856#overview)

# 前提知識

Single Page Application ↔︎ Multi Page Application
SPA・MPA ともにアプリケーションの種別
※CSR・SSR・SSG などはレンダリングの技術

- SPA:1 つの HTML ファイルで画面遷移を完結させ、動的に URL や画面内の要素を書き換えるアプリケーション
- MPA:各画面遷移ごとにファイルを要求するアプリケーション

[SPA と対になるのは MPA で、SSR と対になるのは CSR なんだよという話](https://zenn.dev/shunshimono/articles/2023-04-02_ssr-csr-mpa-spa)

#

![bg contain](public/images/presentation0.png)

# Client Side Rendering の登場

※ここでの CSR は Plain React.js app の意

**単一の Web ページを読み込み、別の内容を表示する際には JavaScript を通じて内容を更新する。**

従来の Web アプリケーションは、HTML 全体をページ遷移の度に読み込む。CSR は従来型の Web アプリケーションよりも、より高速な UI の動作を実現可能。

ハイドレーション：ページがブラウザにロードされるときにその JS コードも実行され、ページは完全にインタラクティブになること。

#

![bg contain](public/images/presentation1.png)

# CSR の問題点と Next.js の登場

- ファーストビューが遅い
- SEO が弱い

## Nextjs **Pages.Router 時代の突入**

SSR ができる React フレームワークとして 2016/10 に登場

Nextjs では Pre-Rendering（サーバー側で初期の HTML を生成）を行う。ハイドレーション用のミニマルな JS と共にクライアントへ送信。

※アクセス時に Pre-Rendering を行い、その後画面遷移は CSR と同じ

#

![bg contain](public/images/presentation2.png)

# SSR と SSG の登場

前述の Pre-Rendering(以下 PR) の技術こそが、**SSR・SSG（ISR）**。

- Sever Side Rendering（2016）
  PR のタイミングが**リクエスト時**
  用途：リアルタイムで変動するデータ
- Static Site Generator（2019）
  PR のタイミングが**ビルド時**
  用途：変動することがないデータ
- Incremental Static Regenerator（2020）
  PR のタイミングは、タイマー制（一定の期間で PR を作り直す）
  用途：少し変動するデータ（分類としては SSG）

# Pros and Cons

- SSR
  - （Pros）リクエストしたタイミングで生成するため、リアルタイムのデータを用いて描画できる
  - （Pros）ユーザーごとに内容を生成するため、プライベートな内容を含んでも問題となりづらい
  - （Cons）複雑なページは描画までに時間がかかる
  - （Cons）ネットワークを介するため、 CSR に比べるとユーザーからの入力に対するレスポンスは時間がかかる

#

![bg contain vertical](public/images/presentation3.png)

# Pros and Cons

- SSG
  - (Pros)リクエスト時に何も処理が走らないため、ユーザーの待ち時間はネットワークのみに依存する
  - (Pros)CDN による広域キャッシュが可能
  - (Cons)ユーザー全体を対象とするページ生成のため、個々のユーザーに向けたプライベートな内容を含むことができない。
  - (Cons)ユーザーからの入力を元にした動的な内容を生成できない

#

![bg contain vertical ](public/images/presentation4.png)

# Pros and Cons

- ISR
  - (Pros)SSG の Build 時間を短縮できる。
  - (Pros)SSR と比較したら DB 負荷は軽め。
  - (Cons)現段階では Nextjs フレームワーク依存。
  - (Cons)ユーザー全体を対象とするページ生成のため、個々のユーザーに向けたプライベートな内容を含むことができない。
  - (Cons)ユーザーからの入力を元にした動的な内容を生成できない

#

![bg contain vertical ](public/images/presentation5.png)

# SSG+Client fetch の登場

SSG と CSR を組み合わせ、お互いのメリットを享受できるようにしたもの。

#

![bg contain vertical ](public/images/presentation6.png)

#

App router
