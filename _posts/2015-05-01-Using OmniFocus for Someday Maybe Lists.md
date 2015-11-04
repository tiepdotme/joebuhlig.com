---
title:  "Using Omnifocus for Someday/Maybe Lists"
date:   2015-05-01
categories: blog
tags:
- gtd
- omnifocus
permalink: /using-omnifocus-for-somedaymaybe-lists/
image: /assets/posts/Using-Omnifocus-for-Someday-Maybe-Lists.jpg
---

For a long time, I kept my active Next Actions in Omnifocus and my potential (someday/maybe) actions in Evernote. It worked, but it felt a bit cluttered so I moved it all into Omnifocus.

<!--more-->

{% include omnifocus_callout.html %}

## Why keep someday/maybe lists in Omnifocus?

The main reason I wanted someday/maybe lists in Omnifocus was the ease of activating them. It’s pretty common for me to pull items from these lists each week and spell out tasks for them. If they’re already in Omnifocus, it’s easy to change the project/context of the task or turn it into a project.

My secondary reason was to streamline the apps I used in my [GTD](http://joebuhlig.com/getting-things-done-introduction/) setup. [Omnifocus](http://joebuhlig.com/omnifocus-setup-workflow/) held all of my active tasks and projects while [Evernote](http://joebuhlig.com/evernote-setup-workflow/) held my goals, someday/maybe lists, and reference materials. It worked, but it never felt smooth.

The altered setup brought my goals and someday/maybe lists into Omnifocus. The goals portion was simple, but the someday/maybes were more of a challenge. I prefer to collect these directly to their respective lists. As far as I know, there’s not a way to enter text (without entering a project/context) and have it auto-process into the right place in Omnifocus. So I made my own:

## How it works:

In practice, here’s what I do:

1.  Open [Drafts](http://agiletortoise.com/drafts/) on my phone

2.  Type the item (and any notes about it)

    <img src="/assets/posts_extra/Drafts_Typing.png" />

3.  Select the action for the appropriate list

    <img src="/assets/posts_extra/Drafts_actions.png" />

Behind the scenes, here’s what happens:

1.  The title of the draft and the body of the draft are appended to a pre-formed subject line of an email.

2.  The email is sent to my [Mail Drop email address](https://support.omnigroup.com/omnifocus-mail-drop) with the custom subject line.

3.  The email is transformed into a task in Omnifocus and added to my inbox.

4.  An AppleScript that’s running in the background on my Mac finds the task in my inbox and parses it.

5.  The parsing procedure cleans up the title of the task and puts it in the correct place with the right metadata.

## The Setup

Requirements: Drafts app, Pro version of Omnifocus for Mac (you do not need the iOS app to make this work).

1.  For each someday/maybe list, add a Drafts action that sends an email to your MailDrop address with the following format for the subject line:

          --[[title]] @Context ::Project //[[body]]

2.  Open Script Editor on your Mac, and add the following AppleScript:

    {% gist joebuhlig/c91ca9d5a47ab09d3525 %}

3.  Save the AppleScript as an always open app.

    <img src="/assets/posts_extra/Always_Open_Application.png" />

4.  Open the app and set it to open at login by right-clicking the app icon in the dock.

## Notes

This process could be used with IFTTT or any other system that sends an automated email. As long as you can get the formatted subject line into the email and send it to your MailDrop address, the script will handle it. I’m using Drafts to do this since it’s my main digital capture tool.

Here’s an example of the full syntax you can use in the subject line:

     --Fix bathroom wiring! @After Hours ::House/Car - SA #friday #next monday $30 min //It’s driving me crazy.

This creates a flagged task named “Fix bathroom wiring” with the context of “After Hours and project of “House/Car - SA”. Its start date will be Friday with a due date of next Monday. The time estimate for it will be 30 minutes and the note will be “It’s driving me crazy.”

*   “--“ sets the name of the task.
*   The “!” after the task name is what sets the flag.
*   “@“ sets the context.
*   “::” sets the project.
*   The first “#” sets the defer date.
*   The second “#” sets the due date. If only one “#” exists, Omnifocus assumes it’s a due date.
*   “$” sets the time estimation.
*   “//“ sets the note for the task.

## Reviewing the someday/maybe lists

Since Omnifocus already has a Review process built in, these lists are easy to add. Select all of these lists and set the review period to every week and the review date as the next day you’ll do your [weekly review](http://joebuhlig.com/getting-things-done-reflect/). Each week when you take time for the weekly review, these will automatically be in the list of projects.

## Activating items

The best part about having someday/maybe lists in Omnifocus is the ease of activating items from them. When I review these lists and find a task I’d like to take on or need to complete soon, I can change the project/context that are assigned to it and it falls in place immediately.

This has been great for me. It’s removed the resistance I had to reviewing my someday/maybe lists and streamlined the process of acting on them when I decide to say “yes” to something. It also [frees my mind](http://joebuhlig.com/getting-things-done-introduction/). It’s one less app I need to look at when I’m trying to find a potential action item.

**Update:** If you're interested, I have an update to the process I'm using for this that you can [find here](http://joebuhlig.com/using-omnifocus-for-somedaymaybe-lists/).