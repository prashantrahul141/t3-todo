<br>
<p align="center">
   <img width="100" src="/public/static/favicon-big.png" alt="Site Icon">
</p>

<h1 align='center'>T3-Todo</h1>

<h6 align='center'>A to do app made using <a href='https://github.com/t3-oss/create-t3-app'>The T3 Stack</a>.</h6>
<br>

### Table of contents

- [Installation & Setup](#🛠️-installation--set-up)
- [ScreenShots](#🖼️-screenshots)
- [Technologies used](#💻-technologies-used)
  <br>

### 🛠️ Installation & Set Up

1. Clone the repo

```sh
git clone https://github.com/prashantrahul141/t3-todo.git
```

2. Add env file using these vars:

```sh
# Prisma
DATABASE_URL=postgresql db url

# Next Auth
# You can generate the secret via https://generate-secret.vercel.app/32
NEXTAUTH_SECRET=
# dev
NEXTAUTH_URL=http://localhost:3000
# prod
# NEXTAUTH_URL=

# Next Auth Discord Provider
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

# Github
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

You can see these docs to learn how to create OAuth app for <a href='https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps'>Github</a>, <a href='https://developers.google.com/identity/protocols/oauth2'>Google</a>, <a href='https://discord.com/developers/docs/topics/oauth2'>Discord</a>.

3. Install packages

```sh
npm i
```

4. Run the development build

```sh
npm run dev
```

<br>

### 🖼️ Screenshots

<img src="/public/static/meta/screenshot-1.png" alt="screenshot" width="500"/><br>
<img src="/public/static/meta/screenshot-2.png" alt="screenshot" width="500"/><br>
<img src="/public/static/meta/screenshot-3.png" alt="screenshot" width="500"/><br>
<img src="/public/static/meta/screenshot-4.png" alt="screenshot" width="500"/><br>
<img src="/public/static/meta/screenshot-5.png" alt="screenshot" width="500"/><br>
<img src="/public/static/meta/screenshot-6.png" alt="screenshot" width="500"/><br>
<img src="/public/static/meta/screenshot-7.png" alt="screenshot" width="500"/><br>

<br>

### 💻 Technologies used

- [Next.js](https://nextjs.org)
- [tRPC](https://trpc.io)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://typescriptlang.org)
- [Prisma (with PostgresSQL)](https://prisma.io)
- [NextAuth.js](https://next-auth.js.org)
