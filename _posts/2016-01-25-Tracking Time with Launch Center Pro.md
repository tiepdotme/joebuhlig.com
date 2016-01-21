---
title:  "Tracking Time with Launch Center Pro"
date:   2016-01-25
categories: blog
tags:
- apps
- ifttt
- launch-center-pro
permalink: /tracking-time-with-launch-center-pro/
image: /assets/posts/Tracking-time-with-launch-center-pro.jpg
---
Lately I've been tracking my time and starting to correlate it with dollars earned. The idea is to help me decide which types of work are the most valuable. This is a look at how I'm doing the time tracking portion using [Launch Center Pro](http://contrast.co/launch-center-pro/).
<!--more-->

## 1. Google Sheet

The data needs to live somewhere and I'm comfortable with Google Drive. So I created a new sheet with five columns:

1. __DateTime__ - Timestamp of when it was recorded.
2. __Client__ - Who is the activity for? This is mostly "Joe Buhlig."
3. __Activity__ - Writing an article, recording a podcast, coding, etc...
4. __Amount__ - How long was I doing the activity?
5. __Notes__ - Any notes I have about it.

With this format I can do roll-ups by client or by activity. It allows me to compare the time I spend on a client and the gross income from that client to determine my hourly rate. This makes it easy to know if my rates are where they should be.

It also helps me determine the types of work that are the highest paying. Doing a similar roll-up by activity will tell me if my time is better spent coding or consulting. But I have to be careful, because the answers can be a bit misleading. Writing articles for this site shows a zero for profit, but I know that writing is what brings people to my site. And in turn, that leads to sales elsewhere. So my conclusions are a judgment call, but it is helpful to have the data in front of me.

## 2. IFTTT

To collect the data I'm using a single recipe in [IFTTT](https://ifttt.com). It adds a row to the Google Sheet each time the LCP action is triggered. By passing different parameters to the recipe, I alter the data that is entered into the spreadsheet.

<a href="https://ifttt.com/view_embed_recipe/375147-time-tracking" target = "_blank" class="embed_recipe embed_recipe-l_13" id= "embed_recipe-375147"><img src= 'https://ifttt.com/recipe_embed_img/375147' alt="IFTTT Recipe: Time Tracking connects launch-center to google-drive" width="370px" style="max-width:100%"/></a><script async type="text/javascript" src= "//ifttt.com/assets/embed_recipe.js"></script>

## 3. Launch Center Pro

In LCP, I set up a different action for each activity I want to record. Each action uses the same url scheme to send the data on to Google. Here's what it looks like:

`launch://ifttt/trigger?name={{TimeTracking}}&value1={{Joe Buhlig}}&value2={{Development}}&value3=[prompt-num:Time in Mins]&value4=[prompt:Notes]`

The `name` parameter will always be the same: the Trigger Name in the IFTTT recipe. In this case, I'm passing my own name as `value1` because this particular action is for recording development work I do for myself. The last three values record the activity type, amount of time I spent on the task, and any notes I want to enter about it.

## In Practice

Whenever I start a new task, I start a stopwatch. When I finish the task or need to move on to something else, I stop the watch, open LCP, and select the action for the task I was working on. I enter the time and any notes about it and I'm done. This creates a new record in the Google Sheet that I can use for analytics later.
