---
title:  "An Alternative to Evernote"
date:   2016-02-12
categories: blog
tags:
- evernote
permalink: /an-alternative-to-evernote/
image: /assets/posts/An-alternative-to-Evernote.jpg
---
I've been a supporter of Evernote for a long time. I've written a number of articles on it and convinced a number of friends and family to start using it. But I've run into some issues with it and it's come time to throw in the towel. I'm leaving Evernote.
<!--more-->

## Why leave Evernote?

It's proprietary. There are a lot of ways this [becomes an issue](http://joebuhlig.com/21/) in my daily workflows. 

- I capture ideas in Drafts and want to move that text to an article I'm writing. I can't easily get it into Evernote without a copy/paste in some form. 
- Uploading files to Evernote creates a mess when you want to edit them. This is primarily an issue on iOS. You have to monkey around with sharing the file to and from other apps to make it work and it usually creates new problems somewhere.
- I write in [markdown](https://en.wikipedia.org/wiki/Markdown) and want to convert it to html. There is zero support for markdown in Evernote.

I could go on, but I think you get the point. If you're good with their format and like using the Evernote apps for editing everything, it's great. But the moment you need to share the information with a non-Evernote user or edit it with something outside Evernote, the mess quickly grows.

I understand there is a [new sheriff at Evernote](https://blog.evernote.com/blog/2015/07/20/meet-evernotes-next-ceo-chris-oneill/), but if I want to have the freedom to use any app I want with the information I'm storing, I need to step away. I'm sure there are good things coming with the change in leadership and I genuinely hope it works out for them. I know a lot of people that rely on and love their service. 

## The New

I looked into a number of alternatives to Evernote. [DEVONThink](http://www.devontechnologies.com/) led the pack with its standard file database on the backend. But no matter which of these "all-in-one" solutions I looked at, they all either have a proprietary file format or they require (or highly recommend) you to use their own apps to work with your data. Neither of those requirements are something I'm willing to meet.

I'm ultimately looking for a way to access standard files from any app I choose. In the current app world, that means the information needs to be stored in raw text, images, or PDFs. In order for these files to be used by almost any app I choose, it needs to use DropBox as a backend. With those two criteria in place, it was pretty easy to whittle this down to a simple folder structure in DropBox.

I should note that I wanted this alternative to be something that is easy for others to use as well. I could build a new proprietary system or one that uses shell scripts and such, but that's not easily picked up by folks who aren't interested in scripting their Mac. I wanted this to be accessible.

## The Structure

The base of the system is a folder structure in DropBox. The folder that I use as an inbox becomes the center point for collection. This is identical to my methods in Evernote. It's called _!nbox_. Unless it has a preprocessed location, information goes here for organizing later.

After the inbox, I treat the remainder of my folder structure much like I would my tags from Evernote. Client projects have a dedicated folder under _Clients_. Each podcast episode has its own folder under _Podcasts_. This isn't complicated. 

The one grouping that gets special treatment is _Writing_. I keep a folder for all my writing (articles, podcast scripts, book chapters, website alterations) which is linked to Editorial to make writing from my phone easier. This is also linked to a [local git repository](http://joebuhlig.com/writing-with-github/) on my Mac which allows me to review changes from my editor. 

The base file formats I'm working with are:

- Text files
- Markdown files
- Images
- PDFs

It's pretty easy to find apps (no matter your OS) that will work with these file types, and their broad use means new apps are always being created to pair with them. Just look at [Brett Terpstra's iTextEditors](http://brettterpstra.com/ios-text-editors/) to see how many options you have on iOS for editing text files. There's a bunch, and they keep coming. 

## Capturing

Storing and working with the files is the easy part. Collecting things is where Evernote shines. It can be dead simple to get stuff into it, but once you step away from features like the Web Clipper, it gets more difficult. In this new setup, installing and using the DropBox app on all my devices eliminates most of the friction.

There are three main types of information I find myself capturing:

### 1. Web Pages

Sometimes I want to come back to a website because it's interesting; sometimes the design of the site intrigues me; other times I'm just gathering a bunch of research for a project. In all cases, I need to be able to save the webpage for later and I need to be able to do it from the Mac *and* iOS.

It's pretty simple on the Mac. There is a menu item called "Export as PDF..." under the File menu. You can [map this to a keyboard shortcut](http://computers.tutsplus.com/tutorials/how-to-set-up-custom-keyboard-shortcuts-on-your-mac--mac-176) (look at step 5) to make it faster to access. In my testing, these PDFs are full-text searchable as well.

From iOS, I was a bit stumped on this. I was trying to use Workflow to pull it off and kept thinking about ways to convert html to a PDF. But I couldn't get it to work right, and it seemed jumbled. Eventually I took a step back to think (which is what I usually need to do when things start looking muddled) and deduced that I simply wanted a way to share a PDF to DropBox. Then I remembered the "Save to DropBox" button in the Share Sheet. Hold on to your hats: It turns out that *this will convert the web page to a searchable PDF for you.* I was pretty darn excited to figure that out. 

### 2. Images

Most pictures I collect are done through my phone. I used to send pictures to my Mac using AirDrop and then move them to DropBox later. But when I discovered the "Save to DropBox" trick, those issues were gone. It saves an image directly to DropBox.

If I do take a screenshot with my Mac, I save it to the inbox or put it where it belongs right away, depending on what I'm doing. Working with images on the Mac in this way isn't much different than how I was using Evernote. They simply land in a new place.

### 3. Text

If I'm grabbing a quick note on something, it starts in nvALT (which is synced with DropBox). If it's an article or something longer, it goes into a Sublime Text project (also synced with DropBox). In either case, I can access the text from my phone in Editorial.

When I think of an idea or a paragraph I want to add to an article and I'm away from my Mac, I start in Drafts. I always start there, sometimes it stays there for a while. When it's time for the text to leave, I can create new text files out of it or send it to another app. There are too many options for what you can do with it from Drafts to spell them all out now. Again, options are gold, and I can do pretty much anything I want from here.

## In The End

I still have a lot of work to do pulling 14,000 notes from Evernote. I'm looking for ways to export the data and move it over, but for now I'm happy with where I'm putting all the new. It gets me away from a proprietary format and makes it a whole lot easier to use the apps I enjoy.