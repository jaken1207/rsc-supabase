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

永田佑斗

# なぜ、この話題なのか。

- 2023 年 5 月 5 日、Next.js13.4 では、AppRouter が Stable になった。AppRouter によってレンダリング手法は転換期を迎えている。
- いままでのレンダリング手法をまとめ、最新のレンダリング技術のすばらしさを実感してもらおう。

# 参考文献

Zenn:[一言で理解する React Server Components](https://zenn.dev/uhyo/articles/react-server-components-multi-stage)

Zenn:[React Server Components を理解したい](https://zenn.dev/yuu104/articles/react-server-component)

Zenn:[SSR, CSR, SSG, PPR の整理](https://zenn.dev/beingish/articles/a5545ebf4f1fa7)

Zenn:[PPR - pre-rendering 新時代の到来と SSR/SSG 論争の終焉](https://zenn.dev/akfm/articles/nextjs-partial-pre-rendering)

Zenn:[SPA/MPA と CSR/SSR/SSG の分類](https://zenn.dev/mt877/articles/6dc3afe99ee794)

Udemy:[Next.js 13 App Router による次世代 Web 開発](https://defidejp.udemy.com/course/nextjs-supabase-app-directory/learn/lecture/37760856#overview)

# Client Side Rendering の登場

**単一の Web ページを読み込み、別の内容を表示する際には JavaScript を通じて内容を更新する。**

従来の Web アプリケーションは、HTML 全体をページ遷移の度に読み込む。SPA は従来型の Web アプリケーションよりも、より高速な UI の動作を実現可能。

ハイドレーション：ページがブラウザにロードされるときにその JS コードも実行され、ページは完全にインタラクティブになること。

#

![bg contain](public/images/presentation1.png)

# SPA の問題点

- ファーストビューが遅い
- SEO が弱い

Nextjs では Pre-Rendering（サーバー側で初期の HTML を生成）を行う。ハイドレーション用のミニマルな JS と共にクライアントへ送信。

#

![bg contain](public/images/presentation2.png)
