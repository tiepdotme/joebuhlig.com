---
title:  "OmniFocus Auto-Parser"
date:   2015-09-04
categories: blog
tags:
- omnifocus
permalink: /omnifocus-auto-parser/
image: /assets/posts/OmniFocus-Auto-Parser.jpg
---

I love it when my systems do things automatically. In this case, I can capture an idea for a someday/maybe list and it ends up in the right place in OmniFocus.

<!--more-->

I wrote about my original process for this [here](http://joebuhlig.com/using-omnifocus-for-somedaymaybe-lists/), but I've since refined it. I didn't like having an extra app icon sitting in my dock. I knew there had to be a better way to do it… and I found it.

I'm now using a launch agent. If that sounds intimidating, I completely understand. I originally stayed away because I thought it would be too complicated. But it turned out to be less difficult than I expected. If you need help falling asleep tonight, you can [read more about them](https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html) on Apple's developer site.

It's possible that I'll be making updates to this code in the future, so I added this to a new GitHub repository I've created: [OFScripts](https://github.com/joebuhlig/OFScripts). All of the code and instructions for how to install it can be found there.

From a high-level view, here's what happens:

## [<span></span>](#1-when-you-log-in)1\. When you log in

The launch agent starts running when you log into your account. That's all a launch agent does. It is a process that runs at log in. It can either run once or on intervals in the background. In this case, it runs at a specified interval.

## [<span></span>](#2-run-applescript)2\. Run AppleScript

The launch agent is set up to run an AppleScript. It runs first when when you log in and continues to run on an interval afterwards.

## [<span></span>](#3-parse-your-omnifocus-inbox)3\. Parse your OmniFocus inbox

The AppleScript takes your OmniFocus inbox and parses any tasks that start with “–“. You can learn how to create the parsing strings in [my original post](http://joebuhlig.com/using-omnifocus-for-somedaymaybe-lists/).

This system has become integral to my use of OmniFocus. With this running in the background, I can now email tasks directly into a project and context. The big one for me is the ability to use [Drafts](http://agiletortoise.com/drafts/)([iTunes](https://itunes.apple.com/us/app/drafts-4-quickly-capture-notes/id905337691?mt=8)) to automatically send tasks to a specific project and context. It makes it incredibly simple to get things into OmniFocus.

**Updates:**

**20150908:** Patrick at [http://schreibloga.de](http://schreibloga.de) was kind enough to write a python install script that you can run from command line to make the installation process a bit easier. You can find it in the GitHub repo here: [OFScripts](https://github.com/joebuhlig/OFScripts)

**20150908:** I had a quick back and forth with Tim Stringer at [Learn OmniFocus](http://learnomnifocus.com/?ref=11) about the AppleScript for this. We found a way to use Hazel to trigger this immediately when a new item comes to the inbox. If you're a Hazel user, you can set up this rule on your OmniFocus database which is located here:

`/Users/YourUsername/Library/Containers/com.omnigroup.OmniFocus2/Data/Library/Application Support/OmniFocus`

This has become my preferred way to use the script.

<img class="center-image post-image-medium" src="/assets/posts_extra/HazelAutoParser.png" />