---
title: "Snowmiku.net 2.0"
date: "2023"
cover: /images/web/snowmiku-next/screenshot-desktop.png
slideshow:
  - /images/web/snowmiku-next/screenshot-desktop.png
  - /images/web/snowmiku-next/screenshot-tablet.jpeg
  - /images/web/snowmiku-next/screenshot-phone.jpeg
---

I wanted to upgrade [Snowmiku.net](https://snowmiku.net) aggregator for the 2024 design contest. The goal was still the same: create the fastest and most user-friendly way to browse entries in the yearly Snow Miku design contests. Since I had recent good experiences of migrating [this portfolio](joonamo-dot-com) to [next.js](https://nextjs.org/), I decided to do the same thing with Snowmiku.net. I had updated the site to do routing with [React router](https://reactrouter.com/) and state managment with plain [React Hooks](https://legacy.reactjs.org/docs/hooks-intro.html) and migrating the front-end to next.js was surprisingly painless. I intended to keep the layout pretty much the same, still based on [Bulma](https://bulma.io/) framework, but I've polished few bits here and there, such as showing the the theme of the selected year.

The bigger migration was on the backend. Previously, the backend was written on [Python 3](https://python.org) and I had to migrate it to next.js's [TypeScript](https://www.typescriptlang.org/). The biggest problem with the old version was the slow page changes, so I took backend performance as my main goal on this renewal. Since the new backend is serverless, the Piapro results are cached in [CloudFlare R2](https://www.cloudflare.com/en-gb/developer-platform/r2/) and on top of that, next.js uses [Incremental Static Regeneration](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) to cache page results. I created a skeleton loader to prevent cumulative layout shift (CLS), but the users rarely see it because a cached page is almost always available. ISR can result in old contentent occosionally served to users, but that's only really noticeable when the design contest is on.

See the service live: [https://snowmiku.net](https://snowmiku.net).
All code in github: [https://github.com/joonamo/snowmiku-next/](https://github.com/joonamo/snowmiku-next/)

### Technologies used:
- [React](https://react.dev/)
- [next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bulma](https://bulma.io/)
- [CloudFlare R2](https://www.cloudflare.com/en-gb/developer-platform/r2/)