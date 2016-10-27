---
title:  "Behind The Scenes Of Working With Omnifocus"
date:   2016-10-28
categories: blog
tags:
- omnifocus
permalink: /behind-the-scenes-of-working-with-omnifocus/
image: /assets/posts/behind-the-scenes-of-working-with-omnifocus.jpg
---
More often than not, I find myself surprised by the questions I get after releasing a new script or product. After releasing [Working With OmniFocus](https://workingwithomnifocus.com) I received more emails about how the site is set up then I did about the course itself. It's apparent to me that this is something different that others are interested in. So here's how I did it.
<!--more-->

## WordPress

The core is WordPress. It's fast and easy to set up and I knew going this route would open a lot of doors to existing code. I could build the thing myself, but never in the same amount of time. There's a lot of flexibility in WordPress and I'm very familiar with it.

## A Small Orange

Anytime I build a new WordPress site, I turn to [A Small Orange](https://asmallorange.com/) for the hosting. I can run my own server through [Digital Ocean](https://m.do.co/c/b0f9f06b6067) but the peace of mind from handing it off is worth it to me. And frankly, the set up time is much faster and more painless with ASO. Throw in fast, quality support and I'm sold.

## Paid Memberships Pro

The membership mechanism I prefer is [Paid Memberships Pro](https://www.paidmembershipspro.com/). I like the single, yearly cost of PMPro and the extreme flexibility made possible by their add-ons and codebase. It takes care of my restricted content, payment gateways, the affiliate program, and email newsletter. And buying their annual license allows me to use it across an unlimited number of sites, which is great for building multiple online courses.

## Theme My Login

I don't know why more sites don't use [Theme My Login](https://wordpress.org/plugins/theme-my-login/). It seems very unprofessional to me when I am presented with the standard WordPress login screen on your site. TML fixes that and it's free. Use it.

## Vimeo

I chose [Vimeo](https://vimeo.com) for hosting the videos themselves for two main reasons: embedding control and their player API. I don't want the videos discoverable anywhere but on my site. That's how I can make it a paid course. And the API is what allows me to check for the amount of a video that's been watched by the user, which is important for VimPosts.

## WP VimPosts

This is the part most folks ask about. VimPosts is a WordPress plugin I wrote specifically for Working With OmniFocus. It's what allows me to embed the Vimeo video by adding only the ID number to the WordPress post. It uses the Vimeo player API to decide when to mark a video as "watched" and gives the user the ability to manually trigger "watched" as well. It also creates a shortcode I can use within a WordPress page for creating a list of videos like you [see here](https://workingwithomnifocus.com/list/).

Currently, this plugin is dependent on the Working With OmniFocus website and will break anywhere else. But in my work on Working With Alfred, I plan to make it a standalone plugin. If you're interested in staying up with the development process, [I have it on GitHub](https://github.com/joebuhlig/wp-vimposts). I have some new features planned for it and have considered making it available as a premium plugin but I'm currently undecided. If it's something you're interested in using, let me know in the comments below.
