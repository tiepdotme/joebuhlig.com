---
title:  "Targeted OmniFocus Templates With Workflow"
date:   2016-09-26
categories: blog
tags:
- omnifocus
- workflow
permalink: /targeted-omnifocus-templates-with-workflow/
image: /assets/posts/targeted-omnifocus-templates-with-workflow.jpg
---
I've been impressed by the speed of the Omni Group's release cycles lately. It's obvious they are hard at work on the automation methods for both iOS and macOS. One of these recent releases introduced the ability to create new projects within a specific folder on iOS.
<!--more-->

It's pretty straight-forward. You use the `/paste` URL as before but replace `target=projects` with `target=/folder/FOLDERNAME`, so you now get something like this:

`omnifocus:///paste?target=/folder/Articles&content=TASKPAPERCONTENT`

This opens a lot of doors, but I prefer to keep things simple by using a single Workflow. This new Workflow takes a text file in DropBox (containing a taskpaper template), replaces any placeholders (using this format: `«PLACEHOLDER»`), and places the new project in the folder you choose from the menu. 

You can [get this Workflow here](https://workflow.is/workflows/86f951099b6d40fcacfe7b0e4ab41d65).

If you look through the steps, you'll see an action that looks like this:

<center><img class="post-image-mini" src="http://joebuhlig.com/assets/posts_extra/targeted-omnifocus-templates-with-workflow/workflow-targets.png" /></center>

These are the selectable targets in the Workflow. You'll want to alter these to fit your structure. Just pay attention to the text and variable assignment under each choice and be sure to copy that format.

In the end, this allows me to pinpoint where I want my templated projects to land within OmniFocus without needing to manually move it after creation.
