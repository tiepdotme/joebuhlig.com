---
title:  "Scheduled Reviews in OmniFocus"
date:   2015-09-18
categories: blog
tags:
- omnifocus
- reviews
permalink: /scheduled-reviews-in-omnifocus/
image: /assets/posts/Scheduled-Reviews-in-OmniFocus.jpg
pre_https: true
---

Every Friday morning I do my [Weekly Review](http://joebuhlig.com/getting-things-done-reflect/). I do my Monthly Review on the first of the month and my Annual Review on the first of the year. How do I get OmniFocus to play nicely with this?

<!--more-->

OmniFocus has a great feature for reviewing projects at specific intervals. You can choose to review a project daily or every 50 years if you want. And when that date comes, the project is available in the Review perspective.

It's a great feature. You can set the date of your Weekly Review as the next review date for a project and tell it to cycle every week. Then the project can be reviewed every week on that day.

## The issue

What happens if you do your review a day late? You'd be fine the first time since the project would just wait, but the next week would bring chaos. Your projects would cycle one week and would now be available for review the day after your scheduled review. They cycled by a week, but the day it uses as a base is the day it was reviewed, which was a day late.

If you throw multiple reviews in the mix (bi-weekly, monthly, annual, bi-annual), it can start to get out of hand very quickly. You'll soon have a lot of projects that need to be reviewed, but they don't show up in the Review perspective.

## The solution

I wanted a way to enter the day for my Weekly, Monthly, and Annual Reviews and have OmniFocus automatically reset the review dates on my projects to the next date each of these occurs.

In other words, if I have a project marked for review weekly (even if it's every 3 weeks), I want the date for the next review to be the following Friday since that's when I do my Weekly Review. If it's marked for review monthly or yearly, I want the next date for my Monthly or Annual Review to be the next review date for those projects.

There's not a way to do this directly in OmniFocus, so I wrote an AppleScript. You can find the [script on GitHub here](https://github.com/joebuhlig/OFScripts). I originally set this up with a launch agent like I did for the [OmniFocus Auto-Parser](https://github.com/joebuhlig/OFScripts), which you can [learn more about here](http://joebuhlig.com/omnifocus-auto-parser/). But I've since reworked this to be run on command directly from OmniFocus.

## How it works

When you launch the script, it takes the next review date of the project and adjusts it forward to the next occurrence of the review. If the review cycle is weekly, the date is set to the next Weekly Review date. If the cycle is monthly or yearly, it is moved forward to the next date for each.

All I have to do is continue as normal and do my reviews on those days. If I see the indicator in OmniFocus before one of my scheduled reviews happens, I simply run the script.