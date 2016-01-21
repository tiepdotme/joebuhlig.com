---
title:  "Workflow to Share Articles with Twitter Handle"
date:   2015-08-28
categories: blog
tags:
- apps
- workflow
permalink: /workflow-to-share-articles-with-twitter-handle/
image: /assets/posts/Workflow-to-Share-Articles-with-Twitter-Handle.jpg
---

I like to share articles on [Twitter](https://twitter.com/joebuhlig). And I want to make sure I give the author credit in the tweet. But it’s not always easy to find their Twitter handle.

<!--more-->

I can usually track it down, but I can quickly derail and find myself down a rabbit hole of links. I’m on a mission, but it’s too easy to click on another article and lose 20 minutes.

I mentioned the app [Workflow](https://workflow.is) ([iTunes](https://geo.itunes.apple.com/us/app/workflow-powerful-automation/id915249334?mt=8&at=1l3vnyQ)) on my [home screen post](http://macsparky.com/blog/2015/7/home-screens-joe-buhlig) for MacSparky’s site. It’s a tool that I continue finding more uses for. In this case, I found a way to search the source code of an article to find all the potential Twitter handles on the page.

## [<span></span>](#caveats)Caveats

Making this happen was easier than I was expecting, but there are a few caveats you should be aware of **before using this**:

1\. Intent, Share, Sharer

There are times when the list of handles shows up and has one of these values. It’s because the article has a share bar of some kind on it. I could find a way to exclude these from the list but it wasn’t a quick fix for me and I didn’t want to spend too much time on it.

2\. Not 100%

If there’s a handle on the page, the workflow usually finds them. But there are instances where I know that a handle is in the article and it still doesn’t find it. I haven’t been able to track down why, but it’s infrequent enough that I don’t worry about it.

## [<span></span>](#how-it-works)How it works

You can [find the workflow here](https://workflow.is/workflows/6ba3ee1f5f7d4be7bfbe5ed867848662), but here’s the process:

1\. Get the URL and expand it

I use this primarily from Pocket. It drives me crazy when services shorten links with their own shortener. So the first thing the workflow does is get the URL from the input and expand it. It then takes the expanded URL and saves it to a variable for later.

2\. Get URL contents and make HTML

It then takes the URL, fetches the content of the webpage, and creates an HTML document from it. This is what allows searching in the next step.

3\. Search for Twitter handles

Using a RegEx search string, it looks for anything that looks like a Twitter handle in the source HTML. It takes the results of that search and adds it to a list that you choose from.

4\. Create the share string

The last step is to create the string of text that will be passed to the share sheet. It uses the expanded URL from the beginning and the handle you selected to create the string. You can alter this for yours if you like a different format.

## [<span></span>](#using-the-workflow)Using the workflow

When you find an article you want to share, invoke the share sheet and hit Run Workflow. Select this workflow and wait for it to ask which Twitter handle to use. Once you’ve selected one, the share sheet will pop up again and you can pick your method of sharing. It will dump the created share string into the application. All you have to do is add your comment to the beginning of the string. Poof!

**UPDATE:** I had a number of requests to add the title of the article to the tweet. I wanted to encourage myself to add an original comment about the article, but sometimes want this as well. So I went ahead and [created another version](https://workflow.is/workflows/6898d8d15333417fa6da8ab316c32c5b) that adds the title to the beginning of the tweet. Enjoy!