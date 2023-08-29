---
title: "ITL Bot"
date: "2023"
cover: /images/web/itl-bot/cover.png
slideshow:
  - /images/web/itl-bot/itl.png
  - /images/web/itl-bot/srpg.png
---

I wanted to create some competition for our local Dance Game community, so I created a score bot for [ITL Online 2023](https://itl2023.groovestats.com/) dance game league. The bot is quite simple: it runs on a timer in [CloudFlare Workers](https://workers.cloudflare.com/), fetches data from ITL's APIs and posts scores to Discord once a day. Previous day's data is stored in [CloudFlare KV](https://developers.cloudflare.com/workers/learning/how-kv-works/) and the daily score message includes visualization about players passing each other on the leaderboard. I created another bot based on ITL bot for the later [Stamina RPG 7](https://srpg7.groovestats.com/) event.

All code can be found in Github for [ITL Bot](https://github.com/joonamo/itl-bot/) and [SRPG Bot](https://github.com/joonamo/srpg-bot/). I even wrote readmes, so you can host the bots for your community!

### Technologies used:
- [TypeScript](https://www.typescriptlang.org/)
- [CloudFlare Workers](https://workers.cloudflare.com/)
- [CloudFlare KV](https://developers.cloudflare.com/workers/learning/how-kv-works/)
