---
title:  "Creating Custom Web Searches in Alfred"
date:   2016-11-28
categories: blog
tags:
- alfred
permalink: /creating-custom-web-searches-in-alfred/
image: /assets/posts/creating-custom-web-searches-in-alfred.jpg
pre_https: true
---
Searching is one of the most technically complicated processes to build and yet the simplest to use. And it's almost universally accepted that every website has a way to search the entirety of their content. Connect this with the ability to search websites directly from Alfred and you can create a one-stop shop for searching all your favorite sites.
<!--more-->

Alfred can do searches in Google and many other websites out-of-the-box. But if you notice yourself searching a specific website repeatedly, it makes sense to set up a custom search within Alfred. If you continually repeat this process, you'll end up using Alfred for all your searches instead of going through the multiple steps required to open a site, find the search bar, and type your query.

To set up a new custom search, you first need to know how the site handles search queries from a URL standpoint. For joebuhlig.com, this is what that looks like:

{% highlight text %}
http://joebuhlig.com/search/?q=
{% endhighlight %}

Once you have that information, open Alfred preferences, go to Features, then Web Search. At the bottom-right you'll see "Add Custom Search." From there, simply fill out the details you want for the search. Here's the full example for this site:

<img class="center-image post-image-medium" src="{% if jekyll.environment == 'production' %}{{ site.cdn_url }}{% endif %}/assets/posts_extra/creating-custom-web-searches-in-alfred/alfred-custom-search.jpg" />

To make it even easier, you can [click here to install it directly](alfred://customsearch/Search%20joebuhlig.com%20for%20%7Bquery%7D/joe/utf8/nospace/http%3A%2F%2Fjoebuhlig.com%2Fsearch%2F%3Fq%3D%7Bquery%7D).

Using this search is quite simple. Invoke Alfred, type "joe" followed by your query. It'll look like this:

<img class="center-image post-image-large" src="{% if jekyll.environment == 'production' %}{{ site.cdn_url }}{% endif %}/assets/posts_extra/creating-custom-web-searches-in-alfred/alfred-search.jpg" />
