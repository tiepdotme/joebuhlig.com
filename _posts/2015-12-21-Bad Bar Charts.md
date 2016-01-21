---
title:  "Bad Bar Charts"
date:   2015-12-21
categories: blog
tags:
- charts
- data
permalink: /bad-bar-charts/
image: /assets/posts/Bad-Bar-Charts.jpg
---
In previous roles I worked on data analysis and visualization. When you boil it down, that just means I was well versed in Excel and building charts.
<!--more-->

I love the challenge of working on a chart until it displays the data honestly. That also means I notice bad designs in charts. There are many ways to skew results with chart design and they all make me see red. If you see a chart with one of these aspects, either ignore it or rebuild it. 

## Non-Zero Based Scale

<img class="center-image post-image-small" src="/assets/posts_extra/Bad Bar Charts/nonzero_baseline.jpg" />

This is one of the biggest culprits in bad charts. It's easy to change the baseline of a chart and make it look like there's a big difference between two segments. In the chart above, it looks like "Unsure" is drastically overpowering the "Unlikely" category. But if we change the chart to a zero-based axis, we can see that the difference is fairly small.

<img class="center-image post-image-small" src="/assets/posts_extra/Bad Bar Charts/zero_baseline.jpg" />

Now it's a lot harder to see the difference between the categories, but it provides a more accurate picture of what's going on because the visual matches the real data.

## Varying Width Bars

<img class="center-image post-image-small" src="/assets/posts_extra/Bad Bar Charts/bar_width.jpg" />

This is more subtle but it can make a big impact on how the outcome is perceived. If you make the already taller bars wider than the others, you increase the visual effect on the viewer and leave them with an exaggerated perception of the data.

## Unnecessary Lines

<img class="center-image post-image-small" src="/assets/posts_extra/Bad Bar Charts/extra_lines.jpg" />

In the same way that a non-zero based scale alters the view of the data, a scale that goes too high can also mislead you to thinking there is no difference between two data points. You want the scale to go from zero to the lowest possible number while still allowing room for the entirety of  the bars.

<img class="center-image post-image-small" src="/assets/posts_extra/Bad Bar Charts/removed_extra_lines.jpg" />

We can now see that Minnesota has a decent lead on the others. But we couldn't draw that conclusion until the scale was set appropriately.

## Inconsistent scale

<img class="center-image post-image-small" src="/assets/posts_extra/Bad Bar Charts/inconsistent_scale.jpg" />

If you don't have all the data points (or don't like them), you either need to forego the chart entirely or be honest. I have seen a similar chart used to show exponential growth of membership when in reality the membership growth rate was fairly consistent. Don't lie with the data.

<img class="center-image post-image-small" src="/assets/posts_extra/Bad Bar Charts/consistent_scale.jpg" />

When you include all of the data points, you can see a big difference. Your perception of the first is that the pace is picking up fast. The second chart shows that the rate of increase is normalized.

## 3D

<img class="center-image post-image-small" src="/assets/posts_extra/Bad Bar Charts/3d.jpg" />

This is just bad design. It's hard to get a feel for the difference in the bars because our eyes are trying to follow the perceived lines on the chart. And it looks bad. Don't do it.

Overall, these are really simple fixes. But they can have a major impact on the viewer and how they perceive the data. Don't lie with a visual. If the data doesn't show what you want, then you have bigger decisions to make. Get to work and change your methods to get to your desired outcome. Don't fabricate positive results.