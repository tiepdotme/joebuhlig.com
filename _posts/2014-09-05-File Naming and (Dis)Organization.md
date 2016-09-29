---
title:  "File Naming and (Dis)Organization"
date:   2014-09-05
categories: blog
tags:
- files
permalink: /file-naming-disorganization/
image: /assets/posts/File-Naming-and-(Dis)Organization.jpg
---

Naming and organizing files is extremely important. In today’s world, we can keep track of thousands of files. And with versioning getting to be a big deal, we have to have a way to keep track of it all.

<!--more-->

It’s quite common for me to get a file with revisions that has my original filename with something appended to the end. The typical is “v2” or the person’s initials “JB.” But every once in a while I get one back that has a monster attached to the end like, “v2 JB updated KR revised v4.” What?! Really?! Why is this ok?

I’ve also seen many folks that have hundreds, if not thousands, of folders. There will be project folders and people folders and general folders and pet folders and computer folders and and and...

Sometimes they have no overlap. But most of the time, a file can go multiple places. My question is: how do you decide which folder? And how long do you spend trying to decide?

A couple years ago, I was in the same place. I was randomly naming files and had folders full of folders full of folders. It took me 5 minutes to find a file and even then I was sometimes using search to find the one I was after.

Eventually, I got tired of it. I hated the never-ending folder structure and I desperately needed a common naming system. I did lots of research and tried to figure out what some other folks have done. They had a lot of really good ideas. But I eventually came up with my own system.

I wanted something that would easily follow me to any OS. I also wanted to use search for finding my files. I was already searching to find them anyway.

## My Nomenclature

I spent a long time brainstorming this piece. It needed to be simple and scalable. But I also wanted it to work in conjunction with my folder system. Here’s an example of what I came up with:

{% highlight text %}
Refx_14BL22_File Naming Examples_20140820_063420.pages
{% endhighlight %}

That looks like a mess! Let me decode:

### Tagging

The first part of that name is a tag. In this case, it’s for Reference files. I shortened it to Ref and added the [“x” for easy searching](http://joebuhlig.com/simple-trick-naming-tags/). When searching, this helps me filter down to just the type of file that I’m looking for. I have a number of them. Artx, Datax, Reportx, Reviewx, Templatex, etc...

### Project Code

I create a personal code indicator for every project that I’m working on. If I have a file that pertains to a project, I add the code for the project to the name of the file. If it’s a standalone file, I simply leave it out.

Adding the project code to the filename allows me to search my entire computer for the project code and pull up everything about that project.

### Key Words

This is what you commonly see in file names. Some words to help you understand what’s in the file itself.

### Date and Time

I always add a date and sometimes add the time to the file name. The format of it is: YYYYMMDD_HHMMSS. This makes it easy for me to do a “Save As”, change the date, and keep my own versions of files. It’s an easy way to eliminate the “v2” thing that people put at the end of their filenames.

In the end, I get a filename that looks like this:

{% highlight text %}
tagx_PROJCODE_Key Words_DATE_TIME.ext
{% endhighlight %}

I wanted to make it easy for myself to name my files. So I created a TextExpander snippet for naming files with and without project codes. I also have a snippet that creates the date/time stamp for me. Between the two, it’s really easy for me to name files.

## My Folder Structure (or lack thereof)

I maintain 3 folders. That’s it. !nbox, Active, and Archive. This plays very nicely with my file naming system. Given their names, you can probably guess how it works. But just in case, here’s how I use them:

### !nbox

Yes, that’s an exclamation point. I name it that way so that it’s sorted to the top of the folder list.

This is where all of my web downloads go and where I initially put any new file that I receive. This folder is in DropBox as I want these to sync across my computers and devices.

It truly is my inbox for files. At the end of each day, I process whatever is in this folder. Processing files means that I’m naming them (using the nomenclature above) and moving them to the Active folder.

### Active

The Active folder is where I keep all of the files that I’m currently working on. Again, this folder is in DropBox so I can sync these across computers. Because I keep all of the files I’m currently working with in one folder, I know exactly where to go to find them. Simple.

### Archive

If I haven’t used a file in 60 days, I move it to my Archive folder. This lives on an external drive since it can be massive. The file naming I do really starts to shine here. Because they are all in one place, I rely on searching to find the file I want. I don’t have to look in here very often but when I do, I can usually find the files I want in about 4 seconds.

One note here: I am not about to go through my Active folder to find the files I haven’t touched in the last 60 days. And I certainly won’t do it every day. This is where I use [Hazel](http://www.noodlesoft.com/hazel.php). I have a Hazel rule set up that checks my Active folder for any file that hasn’t been opened or modified in the last 60 days. If it finds any that match that criteria, it automatically moves them to my Archive folder. I never see it happen.

I’ve been using this system for a while now and really enjoy it. I’m always a few seconds away from any file I want. Until I realize I deleted instead of archiving. #facepalm