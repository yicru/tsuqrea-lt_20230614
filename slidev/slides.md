---
theme: geist
layout: center
title: 爆速GraphQLサーバー構築！！！
transition: slide-left
---

# 爆速GraphQLサーバー構築！！！

2023/06/14 TSUQREA

@yicru

---
class: px-20
---

# 誰

## 宮前 雄一朗

- 🧑‍💻 **宮前を説明する文章が入ります**
- 📝 **宮前を説明する文章が入ります**
- 🎨 **宮前を説明する文章が入ります**

---
layout: center
---

# 我思う

---
layout: center
---

# 爆速でGraphQLサーバーを立てたい！！！

---
class: px-20
---

# どんな時に？

- **とにかく早く動くやつがほしい時**
- **技術検証を行いたい時**
- **ちょっとしたアプリケーションを作りたい時**

<div grid="~ cols-2 gap-2" m="-t-2">

<a href='https://github.com/warrenday/graphql-network-inspector/issues/101' target='_blank'>
    <img src="https://opengraph.githubassets.com/2f76a441b64c518d96afebb0a4cd2fd3945c7bae8cd784c6ab6a9102934f9dee/warrenday/graphql-network-inspector/issues/101">
</a>

<a href='https://github.com/yicru/google-identity-services-playground' target='_blank'>
    <img src="https://opengraph.githubassets.com/034c4be65ac409e0cda5d9417d72ad146e4734cbc568fa26451f888ecf030c7b/yicru/google-identity-services-playground">
</a>

</div>

---
class: px-20
---

# 何を求める？

- **早く作れる**
- **デプロイが楽**
- **運用費がかからない**

---
class: px-20
---

# 候補は？

- **tRPC**
- **Firebase, Supabase**
- **Next.js API Route**
- **Low Code Tools (Hasura?)**
- **garph**

---
layout: center
---

# Next.js + GraphQL Yoga

---
layout: center
---

# やってみましょう

---
layout: center
---

```shell
npx create-next-app@latest
```

---
layout: center
---

https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-nextjs#example

<div grid="~ cols-3 gap-10" m="-t-2">

<div grid="~ col-span-2">
```tsx
import { createYoga, createSchema } from 'graphql-yoga'

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        greetings: String
      }
    `,
    resolvers: {
      Query: {
        greetings: () =>
          'This is the `greetings` field of the root `Query` type'
      }
    }
  }),

  graphqlEndpoint: '/api/graphql',

  fetchAPI: { Response }
})

export { handleRequest as GET, handleRequest as POST }
```
</div>

<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fthe-guild.dev%2Fgraphql%2Fyoga-server%2Fdocs%2Fintegrations%2Fintegration-with-nextjs%23example">

</div>

---
class: px-20
---

# What's next ?

- 🔑 **認証** - Supabase / Clerk / Cloudflare Zero Trust
- 🗄️ **DB** - Supabase / Cloudflare D1🔥 / Vercel Postgres
- 📝 **型** - Pothos

---
layout: center
---

# おわり
