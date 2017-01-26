---
title:  "Favorite Alfred Tricks"
date:   2016-03-21
categories: blog
tags:
- alfred
- apps
permalink: /favorite-alfred-tricks/
image: /assets/posts/Favorite-Alfred-Tricks.jpg
pre_https: true
---
My Mac is useless without [Alfred](https://www.alfredapp.com/). That's no joke. I try to use my wife's profile once in a while. It's painful for me and hilarious for her to watch. I keep hitting the Alfred shortcuts and staring at it like it's broken.
<!--more-->

I didn't get this dependent overnight. I started using Alfred a few years ago and have slowly built up the number of use cases I have for it. So if you're just starting out, don't feel like you need to adopt a whole bunch of things at once. Find one or two that you know you'll use and build from there. Here are some of the ways I use Alfred.

## Launching Apps

I mentioned this in a [previous article](http://joebuhlig.com/mac-navigation/), but it bears repeating because it's so important. I rarely use [Mission Control](https://en.wikipedia.org/wiki/Mission_Control_%28OS_X%29) on the Mac. I'd rather jump straight to an app without hunting down the window that looks like the one I want. I set up workflows (Powerpack feature) that allow me to hit a keyboard shortcut and show/hide the app I want. This pulls up the app I want without a misfire.

![Alfred App Launch](/assets/posts_extra/favorite_alfred_tricks/alfred-show-app-shortcut.jpg)

## Clipboard History

I copy text and links all the time, and sometimes I need to copy/paste multiple portions of text at once. Take my weekly [newsletter](http://joebuhlig.com/newsletter) for example. It has the title, excerpt, and link for each post that was published that week. I could flip back and forth nine times and get everything copied over, but that's ridiculous. Instead I pull up each post, copy all the pieces I need, and use the clipboard history in Alfred to paste each piece without flipping between apps. 

![Alfred Clipboard History](/assets/posts_extra/favorite_alfred_tricks/alfred-clipboard-history.jpg)

## Email

I use Google Apps for my email and haven't found a need for a local client because the web client works so well. This means checking my email requires entering the url for Gmail, and because I run a few different accounts I need to be able to pinpoint the exact email address. Using TextExpander, I set up a snippet that expands to the url for the account I want and presses Enter. Invoking Alfred and entering my snippet abbreviation sends me directly to my email. Though sometimes I wonder if I've made this too easy.

- `xemp` = `https://mail.google.com/mail/u/0/#inbox%key:enter%`
- `xemjb` = `https://mail.google.com/mail/u/1/#inbox%key:enter%`
- `xemfh` = `https://mail.google.com/mail/u/2/#inbox%key:enter%`
 
## Searching Files

This is a pretty standard way to use a launcher like Alfred. And if you're just getting started with one, it's a good place to start. If I need to open a file, I rarely go to Finder. I almost always start typing into Alfred.

![Alfred File Search](/assets/posts_extra/favorite_alfred_tricks/alfred-file-search.jpg)

## Font Awesome

Because I develop for the web, I use the [Font Awesome](https://fortawesome.github.io/Font-Awesome/) library of icons a lot. It's a part of nearly every website I've worked with. So when I ran across a [workflow](https://github.com/ruedap/alfred2-font-awesome-workflow) for searching and pasting in the classes for every icon, I installed it immediately.

![Alfred Font Awesome](/assets/posts_extra/favorite_alfred_tricks/alfred-font-awesome.jpg)

## Dictionary/Thesaurus

I find myself looking for synonyms and definitions quite a bit, and Alfred makes it really easy on me. It has a built-in mechanism for searching the dictionary for a word and offering synonyms. I did change the keyword needed to search the dictionary from _define_ to _def_,  just to make it a bit quicker.

![Alfred Define](/assets/posts_extra/favorite_alfred_tricks/alfred-define.jpg)

## Someday/Maybe Lists

Because I keep so many idea lists, I wanted a quick way to pull them up. So I created a workflow in Alfred that uses the keyword _ofsm_. It opens a link (copied from OmniFocus) to my folder of Someday/Maybe lists.

![Alfred Someday Maybe](/assets/posts_extra/favorite_alfred_tricks/alfred-someday-maybe.jpg)