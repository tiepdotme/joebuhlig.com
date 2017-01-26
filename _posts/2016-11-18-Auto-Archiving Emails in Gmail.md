---
title:  "Auto-Archiving Emails in Gmail"
date:   2016-11-18
categories: blog
tags:
- email
permalink: /autoarchiving-emails-in-gmail/
image: /assets/posts/autoarchiving-emails-in-gmail.jpeg
pre_https: true
---
In the midst of reading for [Bookworm](http://bookworm.fm), I discovered my habit of quickly checking my email throughout the day. It's a simple habit on the surface, but try to break it and you'll find that willpower alone may not be enough to win.
<!--more-->

I set out to create resistance to checking my email from my phone. I can remove it entirely but I have legitimate scenarios that dictate the checking of email on the go. Since I can't remove it, I decided to force difficulties when opening an email in any scenario.

Instead of removing email on my phone, I wrote a Google Apps Script that moves any read message in my inbox to the archive. And it does so once every minute. It's basic and seems to not accomplish much since the messages end up in my archive anyway. But what if I need to reply? What if I need to act on that email? If I open it and don't reply immediately or don't capture in some way, it's gone. Not completely, but it's moved out of sight. And I will likely drop the ball since there is no placeholder in my inbox. That by itself is enough to keep me from opening mails on my phone. I can't have them disappear.

I should warn you that if you decide to set this up, it will be frustrating at first. I failed immediately and checked my email shortly after installing the script. I saw a message I wanted to read but knew I couldn't touch it or it would be gone since I didn't have time to act on it. I spent a lot of time trying to get around this setup and quickly found that I couldn't check a mail without a lot of extra steps. It's a lot easier to not check it at all.

__Warning: Before going further, make sure read messages are ready to be archived. They will be moved.__

To set this up you need to go to your Google Drive and created a new Google Apps Script. Here's the code to paste into that script:

{% highlight javascript %}
function autoArchiveGmail() {
    var threads = GmailApp.search('label:inbox is:read');
    for (var i = 0; i < threads.length; i++) {
        threads[i].moveToArchive();
    }
}
{% endhighlight %}

To run it the first time, click the debugger icon and give the script access to your Gmail:

<img class="center-image post-image-small" src="http://joebuhlig.com/assets/posts_extra/autoarchiving-emails-in-gmail/debugger.jpg" />

<img class="center-image post-image-small" src="http://joebuhlig.com/assets/posts_extra/autoarchiving-emails-in-gmail/permissions.jpg" />

Once the script is in place, set up a new trigger for it:

<img class="center-image post-image-small" src="http://joebuhlig.com/assets/posts_extra/autoarchiving-emails-in-gmail/trigger_menu.jpg" />

<img class="center-image post-image-large" src="http://joebuhlig.com/assets/posts_extra/autoarchiving-emails-in-gmail/trigger.jpg" />

I wish you all the best in checking email from your phone.
