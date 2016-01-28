---
title:  "Time and Dollars"
date:   2016-01-29
categories: blog
tags:
- budget
- time
permalink: /time-and-dollars/
image: /assets/posts/Time-and-dollars.jpg
---
When I started my business, I wasn't in a place to say no to anything. I needed to provide an income, and every little bit helped. But recently I've had to start deciding which activities are most worth my time and which ones need to be put aside.
<!--more-->

This isn't a decision I can make by sitting in front of a fire drinking coffee. As much as I like coffee, it's not *that* good. I need some numbers to reveal the biggest (and smallest) returns on my time. I started [tracking my time](http://joebuhlig.com/tracking-time-with-launch-center-pro/), but I need to dig deeper than that.

## Budget

Every good business has a budget. And mine, H&A Tech, is no different. Without it, I don't know if I'm making money or losing money. This simple document has a line for income and separate lines for each type of expense I incur. At the beginning of each month I plan the expenses and expected income for the month, and I do what I can to stick to it. Any deviation can create issues for my family later.

This is pretty standard, but it deviates from the norm when I pull in transactional data. I have a second tab that accepts copy-pasted transactions from my bank. Once a month I pull in this data and then augment each line item with a client and activity. It sounds tedious, but with the help of a few filters similar transactions can be filled in simultaneously.

Because I'm correlating the transactional data with the budget categories, I can see a clear summary of each month. How well did I stick to the plan?

Then I have savings. With an online business comes subscriptions and those often have annual payments. I handle those with a savings tab in the spreadsheet, but that's a topic for another day.

## Google Sheet

This might be a bit hard to get your head around so I put together an example budget for you to look through. I keep my budget in a Google Sheet so I made a copy and cleared it out for you to see. Here are the tabs you'll find in [the example](https://docs.google.com/spreadsheets/d/1kDUSdsIKvtUnXxd4z9hgBQMUiht1oq_p6Iixl6dTyCU):

1. Budget - the plan for the month (includes the summary)
2. Transactions - the bank transactional data
3. Savings - long term expenses and savings funds

## From Budget to Time Tracker

The budget is in place and the [time tracker](http://joebuhlig.com/tracking-time-with-launch-center-pro/) is tracking away. So I created a new tab in the time tracker to import the transactional data from the budget. With the data pulled over, I group the time and transactions by month, client, and activity using pivot tables. It looks like this:

<img class="center-image post-image-small" src="/assets/posts_extra/Time and Dollars/time-aggregation.jpg" />

With the datasets each grouped in the same way, they can now be tied together into a single table. I do this with the SUMPRODUCT function as [explained here](https://blogs.office.com/2012/04/26/using-multiple-criteria-in-excel-lookup-formulas/) which makes it a one-step process. Once the data is all in one place, I can run another pivot table to figure out where my time is most valuable.

## By Client

Is my time better spent on my own projects or working for my clients? And the follow-up question: which clients give me the best return on my time? If I have a client that requires a lot of support and effort but there isn't much for income to compensate, I either need to raise my rates or consider letting them go. It's difficult to know about these situations without data. Once I have the information, I can make my decision with confidence.

## By Activity

The other segmentation I need to understand is the activity breakdown. What type of work has the highest monetary value? I ask this because I'm not sure if my return is higher when I write for myself or when I consult a client. By switching the pivot table to group by activity, I can see which types of work give me the highest returns and which ones I should consider scaling back.

## Results 

Setting this up can be labor-intensive, but I hope you see the value here. Working for yourself can bring a lot of opportunities your way, and knowing which ones to take on and which to pass by can be tricky. This process gives you real numbers to work with and makes it less of a guessing game.
