---
title:  "TextExpander Snippet Nomenclature"
date:   2015-12-11
categories: blog
tags:
- textexpander
permalink: /textexpander-snippet-nomenclature/
image: /assets/posts/TextExpander-Snippet-Nomenclature.jpg
---

I currently have 217 snippets in TextExpander. That's likely not a big number for some people, but for my forgetful mind it's a lot. To keep them straight, I use a simple nomenclature for my snippet abbreviations.
<!--more-->

The general premise is to use a short group indicator followed by a more specific identifier. It's kind of like tagging. I still use groups in TextExpander to keep them clean, but this helps me remember them. 

## Links

There are some URLs that I type a lot. I use the links to [_Working with OmniFocus_](https://tools.joebuhlig.com/working-with-omnifocus/), [OFScripts](https://github.com/joebuhlig/OFScripts), this website, and my email accounts (Gmail) daily, so I added them to TextExpander. I use the group indicator `link` and an identifier like `wwo` to help me remember them. So I would type `link.wwo` to get `https://tools.joebuhlig.com/working-with-omnifocus/`.

{% highlight text %}
link.home = http://joebuhlig.com

link.tools = https://tools.joebuhlig.com

link.pod = http://joebuhlig.com/whaddyaknowjoe/

link.wwo = https://tools.joebuhlig.com/working-with-omnifocus/

link.ofscripts = https://github.com/joebuhlig/OFScripts
{% endhighlight %}

## Markdown

All of my writing is done in [markdown][Markdown] because I can get it into HTML so easily. It's only natural that I have a few snippets to make this even easier. To help me remember them, I use the group indicator `md`.

{% highlight text %}
*This one uses two snippets that I'll mention later*
md.curtab = [%snippet:xcurtitle%](%snippet:xcurlink%)

md.image = ![%|](/assets/posts_extra/)

md.reddit = [Discuss this on Reddit.](%filltext:name=Insert link to Reddit discussion%)
{% endhighlight %}

## YAML

A couple months ago I moved from WordPress to a [static site with Jekyll][WordPressToJekyll]. Part of the Jekyll environment involves "Front Matter" which is comprised of [YAML][YAML]. Every time I create a new article or podcast, I add this to the top of the markdown file. In my scenario, I also need to create the slug for the article. I've create the following snippets with the group indicator `yaml`.

{% highlight text %}
*For the slug, you first need to copy the text to be slugified.*
*I usually just copy the title of the article.*

yaml.slug = Javascript Snippet

var text = TextExpander.pasteboardText;
text = text.replace(/[^\w\s]/gi, '');
var newtext = text.split(" ").join("-");
TextExpander.appendOutput("/" + newtext.toLowerCase() + "/");
{% endhighlight %}
{% highlight text %}
yaml.blog =

---
title:  "Put Distractions in Their Place"
date:   2014-06-08
categories: blog
tags:
- email
- communication
permalink: /put-distractions-place/
image: /assets/posts/Put-Distractions-In-Their-Place.jpg
---
{% endhighlight %}
{% highlight text %}
yaml.pod =

---
title:  "8: Waiting to Upgrade"
date:   2014-06-08
categories: podcast
tags:
- apple
- hardware
permalink: /8/
image: /assets/posts/Waiting-to-Upgrade.jpg
podcast_link: http://traffic.libsyn.com/whaddyaknowjoe/WKJ008.mp3
podcast_file_size: 18.8 MB
podcast_duration: "20:21"
podcast_length: 19715453
---
{% endhighlight %}

## Code

I write a lot of code. I build my own websites and do freelance development. I use a number of languages, so I've created group indicators for each language: `html` for HTML, `css` for CSS, `rb` for Ruby, `py` for Python, and so on. And because HTML can get to be big, I broke it into groupings for individual tags as well.

{% highlight text %}
a.n = <a href="">%|</a>

p.n = <p>%|</p>

p.class = <p class="">%|</p>

div.n = <div>%|</div>

html.base = <html><head></head><body>%|</body></html>

html.clear = <div class="clear"></div>

html.img = <img src="%|" />
{% endhighlight %}

## IP Addresses

Along with coding, I have a number of IP addresses to keep track of. I don't like referencing a table somewhere or even looking them up in 1Password. I prefer to create shortcuts to them with `ip` as the indicator.

{% highlight text %}
ip.jb = XX.XX.XX.XX

ip.tools = XX.XX.XX.XX

ip.clientname = XX.XX.XX.XX

*You didn't think I'd actually share them, did you?*
{% endhighlight %}

## Catchall/Scripts

There are a lot of cases when I just want something short and it doesn't have to be grouped because I use them so much. Formatted dates are great and so are a few scripts I run frequently. I simply use `x` at the start of the snippet.

{% highlight text %}
*Today's date in the format of YYYYMMDD*
xtd = 20151211

*Next Monday's date in the format of YYYYMMDD. I have one for each day of the week.*
xnm = 20151214
{% endhighlight %}
{% highlight text %}
*The title of the current page in Safari*
xcurtitle = Applescript

tell application "Safari"
    set theName to name of front document
    return theName
end tell
{% endhighlight %}
{% highlight text %}
*The URL of the current page in Safari. It removes any querystrings as well.*
xcurlink = Applescript

tell application "Safari"
    set theName to name of front document
    set theURL to URL of front document
    set oldDelimiters to AppleScript's text item delimiters
    set AppleScript's text item delimiters to "?"
    set theArray to every text item of theURL
    set AppleScript's text item delimiters to oldDelimiters
    set theURL to item 1 of theArray
    return theURL
end tell
{% endhighlight %}
{% highlight text %}
xplan = Plan project for 

xwait = Waiting for 

xas = AppleScript

xgh = GitHub

xof = OmniFocus
{% endhighlight %}

[Discuss this on Reddit.](https://www.reddit.com/r/joebuhlig/comments/3wdbal/textexpander_snippet_nomenclature/)

[YAML]: http://yaml.org/
[Markdown]: https://daringfireball.net/projects/markdown/
[WordPressToJekyll]: http://joebuhlig.com/from-wordpress-google-to-jekyll-piwik/