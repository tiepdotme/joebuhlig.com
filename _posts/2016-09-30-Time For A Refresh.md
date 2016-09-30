---
title:  "Time For a Refresh"
date:   2016-09-30
categories: blog
tags:
- development
permalink: /time-for-a-refresh/
image: /assets/posts/time-for-a-refresh.jpg
---
This past weekend my wife was gone on a retreat. That meant I took care of our girls on my own. They go to bed about an hour and a half before I do, and like any self-respecting web developer with an aging web design, I took advantage of the extra free time and made some major changes to the look and feel of my home on the web.
<!--more-->

The biggest change here are the layouts of the header and article feeds. Headers are always a challenge because you want them to be unique but they need to follow intuitive interface standards. This one took me 20+ iterations to get right and to feel good about. In the end, I wanted it to be simple to understand and easy to find what you're looking for.

Compared to the article feed layout, the header was simple. I went through 40+ versions of the layout, colors, and metadata to show. I know that there are a lot of factors that I personally look at when deciding to read an article. And I understand the frustration of not being able to find that one piece of data you need to get the context of the post. So I did my best to call out the date, tags, and length of each post so it's easy to get the background of the article before you jump in.

To go along with the look and feel is the new ability to use a dark or light theme. I stole this idea from Federico Viticci over on [MacStories](https://www.macstories.net). I love his implementation of it and built my own version. Since it's my blog and I'm a huge fan of dark themes, I made the dark theme default. You can switch back to the light theme with the theme toggle in the header. Though, I'm not sure why you would do that.

The last change worth noting is search. I moved over to [lunar.js](http://lunrjs.com/) to calculate the results for the search. This is primarily due to my use of [Jekyll](http://jekyllrb.com/) as a site generator. Lunar makes it a lot easier since I don't have any server-side methods I can use to generate the search results. You can use the search box in the header or by visiting the [dedicated search page](/search).

Overall, I'm really happy with this new setup and excited to share with you. But I'm very aware that redesigns like this often come with unexpected bugs. If you find an issue, please let me know about it in the [discussion below](#discourse-comments).
