---
title: "joonamo.com"
date: "2022"
cover: "/images/web/joonamodotcom/screenshot-1.png"
slideshow:
  - "/images/web/joonamodotcom/screenshot-2.png"
  - "/images/web/joonamodotcom/screenshot-phone.jpeg"
  - "/images/web/joonamodotcom/screenshot-tablet.jpeg"
  - "/images/web/joonamodotcom/screenshot-1.png"
---

I must admit it feels a bit redundant to tell you about the page you're currently visiting, but I think this is also interesting. Previously, I had my portfolio hosted on Squarespace, but I felt I didn't really get value for the money I paid for them. Originally, my main draw was to offload hosting and maintenance to someone else, but I think nowadays I can handle a simple static pages myself. I enjoy writing [React](https://react.dev/) and I wanted to learn [next.js](https://nextjs.org/), so I decided to do the same as all web developers: writing an overly complicated markdown to html converter instead of using something sane like Wordpress.

All of the code and content are contained in one [git repository](https://github.com/joonamo/joonamodotcom). The next.js builder uses [glob](https://github.com/isaacs/node-glob) to statically build all pages on build time. The site is hosted in [Vercel](https://vercel.com/), a Vercel build and deployment is automatically triggered whenever new content or code is pushed to the repository. Portfolio pages are configured with a [Front Matter](https://frontmatter.codes/) extended Markdown files. The Front Matter metadata configures page names, image carousels and possible YouTube videos. YouTube videos can also be embedded in the main body of the text with a special `youtube://` prefixed image tag. Since this was a learning project, the styling is done with [tailwindcss](https://tailwindcss.com/) tags. The only traditional css on the page is the fade animation on the images.

I'm very happy how the page looks and scales to different devices. The deployed pages are very fast from Vercel and developing the pages with React and next.js is a joy. Writing Markdown is good way to write blog posts like this, but I must admit it's a bit heavy that I need to upload new pages and images to Github instead of using a VYSIWYG editor...

All code in Github: [https://github.com/joonamo/joonamodotcom](https://github.com/joonamo/joonamodotcom)

## Used technology
- [React](https://react.dev/)
- [next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [tailwindcss](https://tailwindcss.com/)
- [Front Matter](https://frontmatter.codes/)
- [plaiceholder](https://plaiceholder.co/)
- Git