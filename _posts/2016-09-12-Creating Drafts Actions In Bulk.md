---
title:  "Creating Drafts Actions In Bulk"
date:   2016-09-12
categories: blog
tags:
- apps
- drafts
permalink: /creating-drafts-actions-in-bulk/
image: /assets/posts/creating-drafts-actions-in-bulk.jpeg
---
When the Omni Group implemented the new [automation methods in OmniFocus for iOS](https://discourse.omnigroup.com/t/implementation-details-for-omnifocus-2-14-automation/24179?u=joebuhlig), I was both excited and worried. I had over 30 actions in Drafts that send text to OmniFocus using background emails as an action method. Switching all of those to use URLs was going to take some time.
<!--more-->

But then I remembered Drafts has its own URL scheme that allows you to import actions. So I embarked on a journey to create my 30+ actions in bulk. I likely spent more time working this out than it would have taken me to just edit each one by hand, but now I have a trick to share with you. You're welcome.

## 1. Manually create a template

You first need a template to work with. Create one action that the rest of your actions will be modeled after. In my case, it looked like this:

<img class="post-image-mini" src="/assets/posts_extra/creating-drafts-actions-in-bulk/template.png" />
<img class="post-image-mini" src="/assets/posts_extra/creating-drafts-actions-in-bulk/template-steps.png" />
<img class="post-image-mini" src="/assets/posts_extra/creating-drafts-actions-in-bulk/template-url-step.png" />

## 2. Copy the action

After your template action has been created, open it up and use the Share Sheet to copy it. This copies the import action URL for the Drafts action that we'll dissect.

<center><img class="post-image-mini" src="/assets/posts_extra/creating-drafts-actions-in-bulk/template-share-button.png" />
<img class="post-image-mini" src="/assets/posts_extra/creating-drafts-actions-in-bulk/template-share-sheet.png" /></center>

Here's a paste of this action so you get an idea of what you should see:

`x-drafts4://x-callback-url/import_action?v=2&tintColor=%5B%0A%20%200.451,%0A%20%200.29,%0A%20%200.553%0A%5D&shouldConfirm=0&logLevel=1&uuid=0E3E5B59-15B5-4010-8E8C-C9A69EE0CA88&disposition=2&actionSteps=%5B%0A%20%20%7B%0A%20%20%20%20%22actionStepType%22%20:%20%22URL%22,%0A%20%20%20%20%22urlTemplate%22%20:%20%22omnifocus:%5C/%5C/x-callback-url%5C/add?x-success=drafts4:%5C/%5C/&name=%5B%5Btitle%5D%5D&note=%5B%5Bbody%5D%5D&project=Bulk%20Actions%20Template&context=Running&autosave=true%22,%0A%20%20%20%20%22useSafariViewController%22%20:%20false,%0A%20%20%20%20%22encodeTags%22%20:%20true%0A%20%20%7D%0A%5D&description=&modifiedAt=2016-09-07%2012:02:42%20+0000&name=Bulk%20Actions%20Template&iconImageName=429-checkmark2`

## 3. Transfer to Numbers or Excel

You need to get this copied URL into a spreadsheet. I did mine on the Mac so I also needed to transfer it across devices. We'll use the spreadsheet to create new URLs in bulk.

![Spreadsheet](/assets/posts_extra/creating-drafts-actions-in-bulk/spreadsheet.png)

## 4. Create a list of new actions

You need a list of the new actions. Specifically, you need a list of the text that changes in the URLs. This will be used to create the new import links.

![Spreadsheet List](/assets/posts_extra/creating-drafts-actions-in-bulk/spreadsheet-list.png)

## 5. Break up the URL template

This really depends on the complexity of your Drafts actions but you need to look through your URL template and break it into the pieces that stay the same across all the new links. You want to remove the text that changes and keep the remaining pieces in separate cells in the spreadsheet. This makes our lives much simpler when we start putting it all back together.

![Spreadsheet Breakup](/assets/posts_extra/creating-drafts-actions-in-bulk/spreadsheet-url-breakup.png)

## 6. Format the replacement text

In my case, the URL template used a project name that matched the name of the action. So I created one format to the right of my list that handles both cases. Just pay attention to how your template looks and make sure your new text matches the original format.

![Spreadsheet Substitute](/assets/posts_extra/creating-drafts-actions-in-bulk/spreadsheet-substitute.png)

## 7. Create the new URLs

Once the template is broken apart and the replacement text has been formatted, we can concatenate all the pieces back together to create our new URLs.

![Spreadsheet New URLs](/assets/posts_extra/creating-drafts-actions-in-bulk/spreadsheet-new-urls.png)

## 8. Transfer to iOS and import

Select all those new URLs, copy them, and transfer them to iOS. I just pasted them into a text file that syncs via DropBox and opened it in Editorial. Then it's just a matter of tapping the link to add each action to Drafts.

<center><img class="post-image-mini" src="/assets/posts_extra/creating-drafts-actions-in-bulk/editorial.png" /></center>

I'll admit this isn't a clean process, but it gets the job done. And for the spreadsheet wizards, I'm aware that there are more unified ways of creating the new URLs. But if you know those methods, you likely don't need this tutorial.
