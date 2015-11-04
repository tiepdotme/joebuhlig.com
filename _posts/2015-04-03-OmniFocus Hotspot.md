---
title:  "OmniFocus Hotspot"
date:   2015-04-03
categories: blog
tags:
- files
- omnifocus
permalink: /omnifocus-hotspot/
image: /assets/posts/Omnifocus-Hotspot.jpg
---

In our digital age, we tend to receive a large number of files via email. And we need to review these files or make changes to them. As an [Omnifocus user](http://joebuhlig.com/omnifocus-setup-workflow/), that means I need to create tasks out of these files.

<!--more-->

{% include omnifocus_callout.html %}

I could invoke the quick entry dialog and drag the file into the notes field, but there are times when I have 10 files or more to do at once. That gets to be a lot of repetitive steps.

I started searching for a solution and came across [this post](http://www.asianefficiency.com/task-management/omnifocus-hotspot/) by the guys at Asian Efficiency. It’s a simple process using [Hazel](http://www.noodlesoft.com/hazel.php) to turn a folder into a hotspot. This folder will _sense_ that files are in it and add those files to Omnifocus automatically.

## The Set Up

1.  Create a dedicated folder

    You’ll need a folder to tie to the Hazel rule. I created one called “Omnifocus_Import.” Put it somewhere that’s easy to access. You might want to consider adding it as a favorite in Finder so it’s easy to access.

2.  Add the new folder to Hazel

    Add your new folder to the list of folders in Hazel. As an alternative, you can download [my folder and rule setup from here](http://joebuhlig.com/wp-content/files/Omnifocus_Import.hazelrules).

3.  Create a new Hazel rule

    Here’s a view of what mine looks like:

    <img class="center-image post-image-medium" src="/assets/posts_extra/Omnifocus-Hotspot.png" />

    I wanted the rule to automatically rename the file and move it to my Active folder, so I added those steps before the AppleScript, which is where the magic happens.

4.  Add the AppleScript to the rule

    Click on Edit script for the AppleScript and enter the following:

{% gist joebuhlig/0e8a29e5f91ac9533f89 %}

## Using the system

It’s quite simple - just drag and drop the files to your new folder. You could also set up a keyboard command with Automator, Alfred, or Keyboard Maestro to make it even easier. Once you’ve added the files to your new hotspot, Hazel will rename the file, move it to the folder you selected, and add a task to Omnifocus. It’s simple and saves a fair amount of time when you have a lot of files to act on.  