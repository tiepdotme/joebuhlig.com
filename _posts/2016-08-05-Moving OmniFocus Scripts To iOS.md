---
title:  "Moving OmniFocus Scripts To iOS"
date:   20160805
categories: blog
tags:
- applescripts
- omnifocus
permalink: /moving-omnifocus-scripts-to-ios/
image: /assets/posts/moving-omnifocus-scripts-to-ios.jpeg
---
I have been hesitant to adopt the [new automation methods in OmniFocus](https://discourse.omnigroup.com/t/implementation-details-for-omnifocus-2-14-automation/24179?u=joebuhlig) for iOS. The abilities of the new URL Scheme are exciting but there's still quite a bit missing from the structure as it stands.
<!--more-->

The main piece I found missing was the "autosave" parameter to the `/add` URL. My current structure uses the [Auto-Parser](https://github.com/joebuhlig/OFScripts/tree/master/Auto-Parser) which allows Drafts to send tasks to the app without the need to confirm or edit an item. Thankfully, the Omni Group introduced this feature recently and I can now add items directly to OmniFocus on iOS and come back to Drafts without any extra steps. Here's the URL I'm using to add new Blog Post Ideas:

`omnifocus://x-callback-url/add?x-success=drafts4://&name=[[title]]&note=[[body]]&project=Blog%20Post%20Ideas&context=Running&autosave=true`

The `/paste` URL is a different story. Combined with Editorial or Workflow, this thing is awesome! It allows me to port two of the AppleScripts I use over to iOS.

The obvious one here is templates. [Ken Case shared an Editorial workflow](https://discourse.omnigroup.com/t/automation-in-omnifocus-2-14-released-2016-04-26/23985?u=joebuhlig) that takes a template project in Taskpaper format and adds it to OmniFocus. I'm using his workflow unedited and found it really easy to recreate my templates on iOS. Navigate to the project you want to use as a template, tap the Share button, and copy it. In Editorial I simply pasted the project into a new Taskpaper file and I'm set. All I have to do is open the template and run the workflow.

The other script I moved over was the ["Read Book Tasks" script](http://joebuhlig.com/reading-books-on-a-schedule/). This was a complete rebuild of the code in Workflow. Using it on iOS is the same as running the script on a Mac. Run the workflow, answer the prompts, and you get a sub-project for the tasks added to your inbox.

Everything above is about creating new tasks. In the world of data, we often refer to CRUD - Create, Read, Update, Delete. It's shorthand for the four ways you can work with information. You can make new data - Create. You can get existing data - Read. You can change or edit existing data - Update. And you can destroy the data - Delete. If you have the ability to do all four of these, you are able to do anything you want with the database.

If we overlay those four methods on top of the new OmniFocus URLs, we see only the first (Create) as a possibility. So we're still limited in what we can do on iOS. It's also why I'm not able to move [all of my scripts](https://github.com/joebuhlig/OFScripts) to iOS. It simply isn't possible. Given the support for AppleScripting that the Omni Group shows, I can imagine it is only a matter of time before the RUD of CRUD makes it to iOS.
