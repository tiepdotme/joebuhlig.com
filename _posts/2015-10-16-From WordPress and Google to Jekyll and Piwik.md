---
title:  "From WordPress and Google to Jekyll and Piwik"
date:   2015-10-16
categories: blog
tags:
- jekyll
- piwik
- development
permalink: /from-wordpress-google-to-jekyll-piwik/
image: /assets/posts/From-Wordpress-Google-to-Jekyll-Piwik.jpg
---

This website has run on WordPress and Google Analytics from day one and they've both treated me pretty well. But I've started to see a need for more flexibility in the site, so it's time for a big change.

<!--more-->

This is mostly a back-end change that shouldn't affect the UI much. There are a few small UI changes I'm making, but that's to make the site cleaner. The more I've gotten into web development and design the pickier I've become with my site. Ultimately, I'm looking for a simplified user experience for you and more respect for your privacy.

## Why WordPress and Google?

For about a year and a half I ran the site on [WordPress][WordPress] through [Bluehost][Bluehost] with Google Analytics.  It was easy and quick for me at the time. WordPress has a good, long track record so I fell in line to get my site up quickly. I didn't want to worry about technicalities - I needed to spend my time creating.

The standard for analytics has been Google Analytics for some time. Google has a reputation for having some of the best if not *the* best reports and tracking for your website. When I started I knew very little about tracking. I was just looking for a way to see what kind of traffic I was getting and almost everyone recommended GA. Sometimes I'm okay with taking the easy road if it means shipping something quickly. I can evaluate the nuances later. And I can always do the research and migration process after the launch if I need to - which is what I've done here.

## Why Jekyll?

As a replacement for WordPress, I've decided to create a static site using [Jekyll][Jekyll]. I ran across Jekyll through blog posts from [Brett Terpstra][BrettTerpstra]. I then spent a couple of hours researching and reviewing websites built with Jekyll. I was blown away by the load speeds involved.

I started looking at some of the numbers on my site and found that the average page was loading in about eight seconds. All of the tests I was doing on my machine came in around four seconds, but that didn't take into account the various devices that people use. That extra four seconds meant my site was way too slow. *Eight seconds?* Sites built with Jekyll are typically loading in less than one second.

I've been wanting to get into Ruby and Rails lately. Since Jekyll is built on Ruby and I [learn by using a language][LearnComputerLanguage], it made for a good project. Jekyll seems to be one of the most common static site generators as well. There's a lot of support and plugins for it already, so I felt comfortable joining that community.

Moving to a static site allows me the flexibility to build one-off pages and posts in a highly customized way. Since I'm becoming more particular about how things look and how you interact with them, it only makes sense. Jekyll seems to fit the bill quite well.

## Why Piwik?

I want to step away from the data collection that Google does on you. I don't want to share your data against your will and I don't want to put you into their system simply because you wanted to read my articles. I understand that you might be okay with this, but I'm learning that I'm not necessarily okay with this myself. There's a big backlash against ads and tracking right now and although I'm not wanting to jump on that bandwagon, it is something that I've been thinking a lot about lately.

And although tracking and ads are okay in some scenarios, I've found that I'm uneasy about the tracking that goes alongside Google Analytics. That might be unwarranted and unfounded, but I don't want to leave it when it makes me uncomfortable. A great example of this is [Marco Arment][MarcoArment] and his ad-blocking iOS app. He had a great app and it worked well, but it [didn't feel right][MarcoDidntFeelRight] for him. So he pulled it and Apple issued refunds. Google Analytics on this website falls in the same category for me. It might be okay, but I'm not comfortable with it.

I still have a need to understand the analytics for my site so I started looking for alternatives and ran across [Piwik][Piwik]. It allows me to collect the numbers that I'm looking for, but the data stays local. There is no master server that the numbers go back to. Your data never leaves the site. I have a database (that only I have access to) that stores the information and it sits on the same server that this website sits on. The data is anonymous and never goes anywhere. It allows me to get those numbers and not sacrifice your privacy in the process. I think that's a great trade-off.

## Hosting?

In the process of making the shift to a static site, I'm also launching a [new sub-domain][Tools] that will be running on Rails. I was previously running my hosting through Bluehost, but while setting up a Rails application, I found that Bluehost is not very easy to use for anything other than one-click installations. So I'm also moving my host over to [Digital Ocean][DigitalOcean] ([affiliate][DigitalOceanAffiliate]).

## When?

Today. I spent the last few weeks working on the static site. There are still some bugs I'm working out, but for the most part it's all here. Let me know what you think!

[Jekyll]: http://jekyllrb.com/
[Piwik]: http://piwik.org/
[MarcoDidntFeelRight]: http://www.marco.org/2015/09/18/just-doesnt-feel-good
[Tools]: http://tools.joebuhlig.com/
[Bluehost]: http://www.bluehost.com/
[WordPress]: https://wordpress.org/
[BrettTerpstra]: http://brettterpstra.com/
[MarcoArment]: http://www.marco.org/
[DigitalOceanAffiliate]: https://www.digitalocean.com/?refcode=b0f9f06b6067
[LearnComputerLanguage]: http://joebuhlig.com/7/
[DigitalOcean]: https://www.digitalocean.com/