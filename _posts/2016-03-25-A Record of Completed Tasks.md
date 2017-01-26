---
title:  "A Record of Completed Tasks"
date:   2016-03-25
categories: blog
tags:
- applescripts
- hazel
- text-files
permalink: /a-record-of-completed-tasks/
image: /assets/posts/A-Record-of-Completed-Tasks.jpg
pre_https: true
---
There are times when I want to look back and see what I did on a specific day. This is extremely helpful when I need a record for a client, but no matter the reason, I find myself referring to my task history frequently.
<!--more-->

There are two ways I access these completed tasks: in an OmniFocus perspective and in daily text files.

## Daily Review

The OmniFocus  perspective that I use to view my completed tasks is one of the stock perspectives, and doesn't require a Pro account. Here are the specific settings I'm using:

<img class="center-image post-image-small" src="/assets/posts_extra/a_record_of_completed_tasks/completed-perspective.jpg" />

Some days it can be a challenge to pick up where I left off the day before. I can look at the upcoming tasks on my Dashboard but that doesn't give me the context of what I  just finished doing for those projects. So at the end of my [Daily Review](http://joebuhlig.com/gaining-perspective-daily-review/) I look over this Completed perspective. It's a quick view of what I've been working on and helps me pick up where I left off. 

## Text Files

For longer term storage of completed tasks, I create text files detailing the progress of  tasks and projects that day. Under each project is a list of the completed tasks and their completion date.

<img class="center-image post-image-small" src="/assets/posts_extra/a_record_of_completed_tasks/task-report.jpg" />

The idea here is to create a historical record of what I did each day. It allows me to go back in time to any day I want and see exactly which projects I was working on and the progress I made.

## AppleScript and Hazel

These text files are created automatically, because there's no way I'm going to copy/paste the data into place every day. I wrote an AppleScript that creates them and the script is run by Hazel, so my Mac needs to be turned on to run it; I can't see the text file for yesterday until my Mac has had a chance to run the script today. I should note that this script is designed to be an external script, not embedded. Here's what the Hazel rule looks like:

<img class="center-image post-image-small" src="/assets/posts_extra/a_record_of_completed_tasks/hazel-rule.jpg" />

And here's the external AppleScript used in the rule:

{% gist joebuhlig/7e3a15b1d75cc1d745e5 %}

## iOS

You'll notice in the script that I'm saving the text files to my DropBox. The most common place for me to search these task reports is from my phone. With them syncing and being stored with the rest of my [text file setup](http://joebuhlig.com/text-file-setup-and-workflow/), I can easily search for a task or project in Editorial and determine when I completed it. 
