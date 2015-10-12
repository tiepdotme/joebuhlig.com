---
title:  "Saving Full Articles in Evernote from RSS"
date:   2015-03-06
categories: blog
tags:
- evernote
- rss
permalink: /saving-full-articles-in-evernote-from-rss/
image: /assets/posts/Saving-Full-Articles-in-Evernote-from-RSS.jpg
---

There is no shortage of articles on the web. Reading (or at least skimming) hundreds of articles can be done easily in less than an hour. But have you ever tried keeping a record of all those articles?

<!--more-->

I often remember reading an article about something and want to pull it back up. I used to spend a lot of time trying to track it down. Sometimes I found it, but most of the time it was lost. Eventually, that frustrated me enough to look for a solution. I started looking for a way to automatically save all the articles I read, and Evernote was my tool of choice.

## My Reading Tools and Process

I use [Feedly](http://feedly.com) for my initial article screening. I use it to subscribe to almost 100 blogs. Every day I skim the headlines of their RSS feeds and decide which ones I want to read - but I don’t actually _read_ them in Feedly. Instead, I save them to [Pocket](http://getpocket.com).

Pocket is my “read it later” app of choice. It becomes a collection of the articles I want to read. Once I’ve read an article, I archive it. If I no longer want to read the article, I delete it.

## The Setup

You can use any RSS reader and any “read it later” service that is connected to [IFTTT](https://ifttt.com) for this. You’ll also need a Gmail account. Here’s how to set it up:

1.  Go to [uKeeper](http://www.ukeeper.com) and enter your Gmail address along with your [Evernote email address](https://blog.evernote.com/blog/2014/06/14/inbox-hero-email-evernote/).

    <img class="center-image" src="/assets/posts_extra/ukeeper.png" />

2.  Set up an [IFTTT recipe](https://ifttt.com/recipes/265750-send-full-articles-from-pocket-to-evernote) to send an email to drops@ukeeper.com with the URL you want to save.

    <a href="https://ifttt.com/view_embed_recipe/265750-send-full-articles-from-pocket-to-evernote" target = "_blank" class="embed_recipe embed_recipe-l_42" id= "embed_recipe-265750"><img src= 'https://ifttt.com/recipe_embed_img/265750' alt="IFTTT Recipe: Send Full Articles from Pocket to Evernote connects pocket to gmail" width="370px" style="max-width:100%"/></a><script async type="text/javascript" src= "//ifttt.com/assets/embed_recipe.js"></script>

Bonus: I also set up a Gmail filter to delete any message with drops@ukeeper.com in the “To” field. I read a lot of articles and didn’t want these emails cluttering up my account.

<img class="center-image" src="/assets/posts_extra/gmail-filter.png" />

## Using The Setup

Here’s the process I go through when reading articles and saving them to Evernote:

1.  I pull all of my RSS feeds into Feedly and skim headlines on my iPhone.

2.  I save articles to Pocket from Feedly by using their “Long Press To Save” feature.

3.  I read articles in Pocket from any of my devices.

4.  If I read the article, I archive it. If I don’t read it, I delete it.

That’s it! Every time an article is archived in Pocket, the IFTTT recipe sends an email to uKeeper with the URL in the body. uKeeper takes the URL, grabs the full text of the article, and forwards that text to Evernote. All I have to do is archive the article… which I was already doing.