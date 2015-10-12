---
title:  "Writing with GitHub"
date:   2015-09-11
categories: blog
tags:
- github
- setups
- writing
permalink: /writing-with-github/
image: /assets/posts/Writing-with-GitHub.jpg
---

I’ve written about my use of [Sublime Text for writing](http://joebuhlig.com/my-writing-setup/), but I didn’t share how I manage the edits from my editor.

<!--more-->

I write everything in [Markdown](http://daringfireball.net/projects/markdown/), which means the typical “track changes” tools don’t work very well in my workflow. I write the draft of an article, review and edit my own draft a couple times, and then send it to my editor. Since we do everything digitally, I needed a way to see what changes she has made as compared to my original.

The developer in me recognized the issue and immediately went to GitHub for versioning and merging updates. It has made the process really easy for me and for my editor. I don’t want her worrying about the delivery mechanism on top of all the editing. Here’s how I set it all up:

## [<span></span>](#the-setup)The setup

If you have experience with GitHub, this will all be second nature. If you don’t, I recommend looking at [this article](https://guides.github.com/activities/hello-world/) to get a feel for the terminology and flow of Git.

I created a folder in DropBox to house all of my writing. This includes articles, [podcast](http://joebuhlig.com/whaddyaknowjoe/) scripts, and even the [book](http://joebuhlig.com/omnifocus/) I’m writing.

Using the GitHub desktop app, I created a new local repository on top of this folder. I’ve found myself using the app even though I know how to use Git from the command line. It’s simple and feels faster to me.

That’s all there was to do, create a new folder and turn it into a repository. I should mention that if you’re inviting someone as a collaborator in the repository, you should keep this outside of DropBox. It can create a lot of issues with syncing. GitHub even warns you about it. I can get away with it because I’m the only one involved and it’s a local repository. Keeping it on DropBox allows me to view and edit files from my iPhone, and I like having that option.

## [<span></span>](#1-drafting)1\. Drafting

I work off of the master branch in the repository and make all of my commits there. For example, I’ll write my first draft of an article and then commit it. I then review and edit that draft and commit my own edits.

To make the commits easy to track, I use a TextExpander snippet for the commit summary with this format:

`Draftx_Articlex_YYYYMMDD`

For the first part, I use one of these tags - Draftx, Editx, Reviewx, Managex. My first draft is under Draftx, my edits are Editx, my editor’s changes go under Reviewx, and any changes to the repository (adding/deleting/moving files) go under Managex. As an aside, here’s [why I use the “x”](http://joebuhlig.com/simple-trick-naming-tags/) in those names.

The second portion of the commit summary is the type of writing I was doing - Articlex, Bookx, Podcastx, Websitex. Those are pretty self-explanatory.

## [<span></span>](#2-send-to-editor)2\. Send to editor

When I’m happy with what I’ve written and have the edits committed, I make a copy of the file and paste it into a DropBox folder I share with my editor. She is then able to do anything she wants to the file. I make sure she knows I’ll find every character that changes when she’s done.

## [<span></span>](#3-reviewing-changes)3\. Reviewing changes

When I’m notified that she’s done editing the piece, I create a branch off of the master branch. I simply name the new branch after the article or chapter that I’ll be reviewing.

After creating the new branch and switching to it, I replace my version of the file with the edited version. It’s a simple copy, paste, and confirm to replace the current version.

I can then go into GitHub and see all of the changes highlighted. If I want to accept her change, I do nothing. They will come through later. If I want to ignore her change or make tweaks, I go to the file and make the edits. Then I return to GitHub and keep working through the article.

When I’ve finished reviewing the changes and making my final edits, I commit the edited file to my newly created branch and then merge the new branch into the master. I could probably do this from the master branch but it just feels weird bringing someone else’s changes directly into the main structure. I prefer not to hear the neurotic developer in me screaming.

## [<span></span>](#tracking)Tracking

Something I’ve wanted to do with my writing for a while is track how many words I’ve written each day. Thankfully, using GitHub makes it possible to pull this off. It’s really technical, so I would say **this part is for the power users**.

With a Git repository, you can set up hooks to run when certain events happen. In other words, I can run a script when something happens in the repository. In this case, I used the “post-commit” hook because I wanted to run a script after I commit changes.

I added this code to the post-commit executable found in the “.git” directory of my writing repository:

{% gist joebuhlig/b0c3cd227c148685f98d %}

It checks to see if the commit is in the master branch. If it is, then it counts the words that have been added and subtracts the number of words that were removed. That number is then sent to a Google Sheet through a Google Script that I’ve published as a web app.

From the spreadsheet I can see each commit, the date and time of the commit, and how many words I wrote. I like seeing how much progress I’m making and can potentially use this data to find cycles in my writing patterns. If nothing else, it’s fun.

[Discuss this on Reddit.](https://www.reddit.com/r/joebuhlig/comments/3kj2wl/writing_with_github/)