---
title:  "Using Drafts"
date:   2015-10-10
categories: blog
tags:
- apps
- drafts
- setups
permalink: /using-drafts/
image: /assets/posts/Using-Drafts.jpg
---

[Drafts][DraftsApp] is one of those apps that I cannot go without. The funny thing is that my tech-resistant wife is now dependent on it as well. And you can be sure that I am pretty excited about [her use of it][TaskManagementEpisode].

<!--more-->

Drafts can be intimidating if you're not used to dreaming up ways to connect apps on your phone. So it's helpful to use other people's ideas as a baseline for building your own methods. Here are a some of my favorite ways to use Drafts:

## OmniFocus with note

[Install OmniFocus with Note Drafts Action](x-drafts4://x-callback-url/import_action?v=2&tintColor=%5B%0A%20%200.451%2C%0A%20%200.29%2C%0A%20%200.553%0A%5D&shouldConfirm=0&logLevel=1&uuid=BDE52DB2-95AF-4AD4-8734-17068C3E8C9F&disposition=2&actionSteps=%5B%0A%20%20%7B%0A%20%20%20%20%22urlTemplate%22%20%3A%20%22omnifocus%3A%5C%2F%5C%2F%5C%2Fadd%3Fname%3D%7B%7B%5B%5Btitle%5D%5D%7D%7D%26note%3D%7B%7B%5B%5Bbody%5D%5D%7D%7D%22%2C%0A%20%20%20%20%22encodeTags%22%20%3A%20false%2C%0A%20%20%20%20%22actionStepType%22%20%3A%20%22URL%22%0A%20%20%7D%0A%5D&description=First%20line%20saves%20to%20the%20title%20of%20a%20OmniFocus%20task%2C%20while%20the%20rest%20of%20the%20Draft%20is%20added%20to%20Notes%20section.%20The%20original%20draft%20is%20then%20archived%20automatically.%20&modifiedAt=2015-07-20%2012%3A13%3A49%20%2B0000&name=OmniFocus%20with%20Note&iconImageName=action_clipboard)

My primary use of Drafts is to capture tasks that will end up in OmniFocus. It's not uncommon to see the Drafts badge at six or higher. Those are typically tasks that will be moved to OmniFocus but I needed to capture them quickly.

## Save URL as PDF in DropBox

[Install Save URL as PDF Drafts Action](x-drafts4://x-callback-url/import_action?v=2&tintColor=%5B%0A%0A%5D&shouldConfirm=0&logLevel=1&uuid=D65D2C58-A84A-4517-8015-1BE97D43C6B5&disposition=2&actionSteps=%5B%0A%20%20%7B%0A%20%20%20%20%22writeType%22%20%3A%20%22create%22%2C%0A%20%20%20%20%22fileTemplate%22%20%3A%20%22%5B%5Bbody%5D%5D%22%2C%0A%20%20%20%20%22actionStepType%22%20%3A%20%22Dropbox%22%2C%0A%20%20%20%20%22folderTemplate%22%20%3A%20%22%5C%2FArticle_Import%22%2C%0A%20%20%20%20%22fileExtTemplate%22%20%3A%20%22txt%22%2C%0A%20%20%20%20%22fileNameTemplate%22%20%3A%20%22%5B%5Btitle%5D%5D%22%0A%20%20%7D%0A%5D&description=&modifiedAt=2015-09-28%2012%3A02%3A35%20%2B0000&name=Save%20URL%20as%20PDF&iconImageName=action_dropbox)

When I run across an article I'm interested in but I'm not sure what I want to do with it I'll dump it into Drafts. When I'm emptying my Drafts inbox during my [Daily Review][DailyReviewArticle] and run across one of these that I want to save as research, I use this action. It creates a text file in DropBox with the title of the article as the title of the file and puts the URL in the body of the file. My Mac will then turn that text file into a PDF that I can use for later.

## OmniFocus list

[Install OmniFocus List Drafts Action](x-drafts4://x-callback-url/import_action?v=2&tintColor=%5B%0A%20%200.451%2C%0A%20%200.29%2C%0A%20%200.553%0A%5D&shouldConfirm=0&logLevel=1&uuid=9B95D317-17CC-4336-809D-2410C52B7AF2&disposition=2&actionSteps=%5B%0A%20%20%7B%0A%20%20%20%20%22listName%22%20%3A%20%22Omnifocus%22%2C%0A%20%20%20%20%22noteDelimiter%22%20%3A%20%22%7C%22%2C%0A%20%20%20%20%22actionStepType%22%20%3A%20%22List%20in%20Reminders%22%0A%20%20%7D%0A%5D&description=&modifiedAt=2015-09-28%2015%3A57%3A57%20%2B0000&name=OmniFocus&iconImageName=action_reminder)

Close behind the _OmniFocus with Note_ action is the _OmniFocus List_ action. It works pretty much the same way as the first except I can brain-dump a list of items all at once. Each line in the draft will become a new task in OmniFocus.

## Today extension

<img class="center-image post-image-small" src="/assets/posts_extra/Drafts_Today_Clip.png" />

If I run across a quote that I want to embed in a blog post or share with someone, I can copy it and send it Drafts with the "+clip" action in the Today View. It lands in my Drafts inbox for triage later, but sometimes I go and action it right then.

## OmniFocus action key

<img class="center-image post-image-small" src="/assets/posts_extra/OmniFocus_Keyboard_Action.png" />

If I want to be really quick and send ideas to OmniFocus immediately, I can invoke the action key. It sits right on top of the keyboard so as soon as I'm done typing I can hit that to send it to OmniFocus immediately and start typing the next task without any delay. This one feature has me using Drafts for brainstorming sessions.

## Siri to Drafts

I have my default reminders list set to a list called "Drafts." Drafts is set up to pull items from this list into my Drafts inbox. This allows me to ask Siri to remind me of something and it will automatically end up in my Drafts inbox.

## OmniFocus Someday/Maybes

I've written about these in the past but I have a dedicated list of actions that take drafts and dump them into Someday/Maybe lists in OmniFocus without the need for any triage in my OmniFocus inbox. You can see how I [set up the actions here][OmniFocusSomedayMaybeArticle] and how I [automatically parse them here][OFAutoParserArticle].

And because I'm proud of her getting into digital capture methods, here's the one my wife uses all the time:

## Email yourself a task

[Install Email Yourself Drafts Action](x-drafts4://x-callback-url/import_action?v=2&tintColor=%5B%0A%20%200.031%2C%0A%20%200.455%2C%0A%20%200.627%0A%5D&shouldConfirm=0&logLevel=2&uuid=EA743F3F-8612-4615-88E4-6DAF1E0B344D&disposition=2&actionSteps=%5B%0A%20%20%7B%0A%20%20%20%20%22sendInBackground%22%20%3A%20true%2C%0A%20%20%20%20%22bccRecipientString%22%20%3A%20%22%22%2C%0A%20%20%20%20%22toRecipientString%22%20%3A%20%22example%40example.com%22%2C%0A%20%20%20%20%22subject%22%20%3A%20%22%5B%5Btitle%5D%5D%22%2C%0A%20%20%20%20%22replyTo%22%20%3A%20%22%22%2C%0A%20%20%20%20%22sendAsHTML%22%20%3A%20false%2C%0A%20%20%20%20%22sendInBackgroundPrefix%22%20%3A%20%22%22%2C%0A%20%20%20%20%22body%22%20%3A%20%22%5B%5Bbody%5D%5D%22%2C%0A%20%20%20%20%22actionStepType%22%20%3A%20%22Email%22%2C%0A%20%20%20%20%22ccRecipientString%22%20%3A%20%22%22%0A%20%20%7D%0A%5D&description=Open%20Mail.app%20email%20window%20with%20first%20line%20of%20draft%20as%20subject%2C%20and%20the%20remainder%20of%20the%20draft%20as%20the%20body.&modifiedAt=2015-10-08%2015%3A06%3A19%20%2B0000&name=Email%20To%20Do&iconImageName=action_email_filled)

Becky knows that having items sitting in her email inbox drives her crazy. She doesn't like seeing new emails that she needs to act on. And she knows that if she emails a task to herself she will move it out of her inbox and into her paper system as soon as possible. Her email inbox is the one digital place that she checks regularly. So it's nice for her to be able to email tasks to herself since she knows she'll act on them. She uses drafts with an action key above her keyboard to type the task and immediately send it to her email. This would drive me insane, but it has been very helpful for her.

Ultimately, I use Drafts to get things out of my head. Anytime I see something online or I have an idea, I add it to Drafts first. Sometimes I can make the decision about what I want to do with it right then and will action it off immediately. But most of time I find myself leaving it in Drafts until my [Daily Review][DailyReviewArticle]. Drafts is my primary tool for keeping my head clear and my mind focused.

[TaskManagementEpisode]: http://joebuhlig.com/5/
[OmniFocusSomedayMaybeArticle]: http://joebuhlig.com/using-omnifocus-for-somedaymaybe-lists/
[DailyReviewArticle]: http://joebuhlig.com/gaining-perspective-daily-review/
[DraftsApp]: https://itunes.apple.com/us/app/id905337691?mt=8&ign-mpt=uo%3D4
[OFAutoParserArticle]: http://joebuhlig.com/omnifocus-auto-parser/
