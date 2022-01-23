---
title: "Highscore Server"
date: "2020"
cover: "/images/web/highscore/unstables.png"
slideshow:
  - "/images/web/highscore/unstables.png"
  - "/images/web/highscore/garden.png"
---

I wanted to have some competition in my Game Jam games. I figured easiest way to make people compete is to have persistent online leaderboards. So I created a simple server for leaderboards. It was first used in my Ludum Dare 46 game [Conway's Garden Life](/games/garden) and later in LD49 game [Unstables](/games/unstables). I wanted to be able to quickly add leaderboards for my future games, so one instance of the server can support multiple games and the APIs automatically filter scores for correct game. 

The server itself is quite simple [Express](https://expressjs.com/) web server with only a few API-endpoints exposed for the games. The scores are stored in [PostgreSQL](https://www.postgresql.org/) database. To prevent the most casual drive-by posting of arbitrary scores, the server implements a simple hash verification system based on score metadata and game specific secret. Every score entry can also contain some metadata to go with it. The Garden game uses the metadata field to store a replay of the game.

All code is available on my [GitHub](https://github.com/joonamo/highscore). It should be easily deployed by anyone for their games. I'm currently running it on Digital Ocean App Platform, but it should run pretty much anywhere you can setup node.js apps and connect to PostgreSQL database.

## Used technology
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Digital Ocean App Platform](https://try.digitalocean.com/app-platform)
