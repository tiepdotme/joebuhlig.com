---
title:  "Time Tracker With Running Status"
date:   2016-12-09
categories: blog
tags:
- time
permalink: /time-tracker-with-running-status/
image: /assets/posts/time-tracker-with-running-status.jpg
pre_https: true
---
I've been tracking where I spend my time for a while now. In the majority of cases it has been purely for personal use and decision-making, but since I have now taken a part time IT position, I need to know exactly how many hours I spend on the job and calculate whether or not I've met my expected quota for the week.
<!--more-->

In theory, it's simple. I work 20 hours a week as Director of IT at my church. But how do I know if I'm under or over my allotted time? I could go off a feeling, but I'm certain I'll always be wrong in my estimate.

Instead, I did what I always do: set up a system to track it for me. And with the power of IFTTT, Launch Center Pro, and Workflow, I'm able to let Google Sheets do all the hard work. In the end, this is what I see when I check my status:

<img class="center-image post-image-small" src="/assets/posts_extra/time-tracker-with-running-status/time-tracker.jpg" />

Getting the spreadsheet set up is easier by copy-paste than it is by explanation. The formulas are simply too much and too involved to explain. So I created a [copy of my tracker](https://drive.google.com/open?id=1X2gVw4j-dM6nz1jpGnKqyEONQWPm-Zk61n_P8yKTbOk) for you to view and replicate.

The part you'll need to edit is on the Report worksheet. You can manually adjust the Available Hours per week and it will take care of the rest.

As for data entry, I do it all through IFTTT. There are a lot of ways to do it but setting up applets to add a row to a Google Sheet is fairly straightforward.