---
title:  "Reading Books On A Schedule"
date:   2016-06-17
categories: blog
tags:
- books
permalink: /reading-books-on-a-schedule/
image: /assets/posts/reading-books-on-a-schedule.jpeg
pre_https: true
---
For years I have wanted to read more books. Prolific readers rave about the benefits and world-renowned leaders often attribute their ideas and successes to their habit of reading, but to me the benefits of having read a lot of books  was secondary to the innate sense that a realm of knowledge and experience was available to me, but I was missing it.
<!--more-->

Missing out on something is not inherently bad. It is actually a good thing in many cases. With firehoses of input available at every turn today, we need to decide to miss out on some things. And the more we can cut, the more head space and time we have to expand our minds and work towards our goals in life. I will be the first to say I am bad at this. Resisting the constant pull of potential updates is a war I fight daily.

In time, I have cut back on these overwhelming streams of unnecessary input, but I have only done so successfully with the addition of a replacement habit: reading books. Frankly, I don't have the self-control to pick up a book instead of my phone when the "just check" bug bites. I rely on staged environmental circumstances to make it happen. I leave my phone out of reach and keep a book readily available. That helps significantly, but taking it another step, I have committed to completing a book every two weeks.

This accomplishes two things. One, I need to read a significant portion of a book each day to hit my mark. Two, it forces me to look for time to read in the day. The combination of these two means I do not have near the time for social media and email as I did previously and instead use that time for books.

But there is a flaw in this design that I discovered early on. My procrastination tendency leads me to back loading the two-week period with higher page counts. This is mostly due to not knowing if I am on track to hit my goal on a daily basis. It appears simple to take the number of pages in the book and divide by 14 to know how far to read each day. But after day three or four, I start to lose track and do not want to continue recalculating where I should be.

Each time I start a new book, I create a new OmniFocus project for it. I have a series of tasks I complete after finishing a book. Since this project already exists, I took it to another level and added a "Read Book" group with subtasks for each day's reading. With that group flagged, I know what today's expected page count is by looking at [my Dashboard](http://joebuhlig.com/the-omnifocus-dashboard/).

<img class="center-image post-image-medium" src="http://joebuhlig.com/assets/posts_extra/reading-books-on-a-schedule/read-book-group.png" />

But reading a book every two weeks means I create these tasks quite frequently. And you can't expect me to do that manually every time, can you? A new script was in order.

When run, it asks four questions:

1. What is the title of the book?
2. How many pages are in the book?
3. When do you want to start reading?
4. When do you want to finish reading?

Using these answers, the script breaks the book into the correct number of tasks (one per day), each having the same number of pages to read. It adds these to my OmniFocus inbox so I can copy/paste or move them as I like. It programmatically adds @Read as a context, but the script can be altered as needed to fit your system. [This script](https://github.com/joebuhlig/OFScripts/tree/master/Read%20Book%20Tasks) can be found in my [OFScripts repository on GitHub](https://github.com/joebuhlig/OFScripts).

The result of this is a daily view of progress I need to make in order to hit my goal. Knowing the day's goal forces me to make time and cut back on the less important, trivial actions.