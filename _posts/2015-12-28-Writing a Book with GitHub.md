---
title:  "Writing a Book with GitHub"
date:   2015-12-28
categories: blog
tags:
- book
- github
- writing
permalink: /writing-a-book-with-github/
image: /assets/posts/Writing-a-Book-with-GitHub.jpg
pre_https: true
---

A lot of time and effort go into writing a book. It gets even harder when you need to collaborate with your editor and make revisions.
<!--more-->

All of the edits must be reviewed and approved. Do you keep the change or do you toss it? Multiply this by hundreds of edits (or in my case thousands) and the task is enormous. Even when you think you nailed a paragraph, it can come back shredded (that means it's better in the end, right?).

When I wrote [_Working with OmniFocus_](https://tools.joebuhlig.com/working-with-omnifocus/) I used GitHub to manage all of the revisions and help me see the edits. I was doing all of my writing for the blog in Markdown and I didn't want to change that workflow for the book.  It turned out to be a great choice.

## File Layout

I kept the file structure for the book really simple. A single markdown file for the outline and a single file for each chapter. I wrote the first draft for the entire book before I went back to start editing. When I finished editing each chapter I uploaded a copy of it to a DropBox folder I share with my editor. That allowed her to get started while I kept editing the later chapters.

<img class="center-image post-image-tiny" src="/assets/posts_extra/Writing a Book with GitHub/file_structure.jpg" />

I created a local git repository on my computer with the GitHub for Mac application. I could do it via command line, but I like the UI that comes with the app. Every time I made edits to the book, I committed the changes to save a history of the work I was doing. 

## Receiving Edits

When my editor finished each chapter, she let me know via email or text. I created a new branch in my local repository that I used to overwrite my version of the chapter with hers. That gave me her edits on my machine with the GitHub application waiting for me to merge those changes. I read through each edit and made decisions.

<img class="center-image post-image-small" src="/assets/posts_extra/Writing a Book with GitHub/github_edits.jpg" />

It was simple to see any adds, deletes, or comments that she made. The interface clearly showed what had been done to the file. If I needed to revise what she had done, I could jump over to the file in Sublime Text, make the edits, and save it. When I was done acting on her edits, I committed the changes and then merged them into my master branch in GitHub.

## Version History

A big benefit of this process is the version history. I can look back on every commit I have made and roll back to that point in time. It keeps each revision and allows me to come back to them as needed. This is a huge load off of my brain. I don't have to worry about making a change - I know I can always undo it or look back on what I did and see the progression.

I plan to use this method for any books I write in the future. I use GitHub quite a bit, so I'm comfortable with it and it makes the editing process painless. Well, at least logistically.