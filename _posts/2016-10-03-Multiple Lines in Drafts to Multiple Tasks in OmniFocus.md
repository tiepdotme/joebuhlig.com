---
title:  "Multiple Lines in Drafts to Multiple Tasks in OmniFocus"
date:   2016-10-03
categories: blog
tags:
- drafts
- omnifocus
permalink: /multiple-lines-in-drafts-to-multiple-tasks-in-omnifocus/
image: /assets/posts/multiple-lines-in-drafts-to-multiple-tasks-in-omnifocus.jpg
---
One piece missing in my Drafts actions arsenal was the ability to create a single draft with multiple tasks and send them all to OmniFocus via the new URL schemes. This isn't something I use often but there are times when it would be useful and can be the difference between capturing everything and missing a vital thought.
<!--more-->

So here we are. I made one. You can [install it here](x-drafts4://x-callback-url/import_action?v=2&tintColor=%5B%0A%20%200.451%2C%0A%20%200.29%2C%0A%20%200.553%0A%5D&shouldConfirm=0&logLevel=1&uuid=5E08F0B3-C571-4996-A264-85A42A72C277&disposition=2&actionSteps=%5B%0A%20%20%7B%0A%20%20%20%20%22scriptText%22%20%3A%20%22%5C%2F%5C%2F%20Script%20steps%20run%20short%20Javascripts%5Cn%5C%2F%5C%2F%20For%20documentation%20and%20examples%2C%20visit%3A%5Cn%5C%2F%5C%2F%20http%3A%5C%2F%5C%2Fhelp.agiletortoise.com%5Cn%5Cnvar%20text%20%3D%20%5C%22%5C%22%3B%5Cnvar%20tasks%20%3D%20draft.content.split%28%5C%22%5C%5Cn%5C%22%29%3B%5Cnfor%20%28i%20in%20tasks%29%20%7B%5Cntext%20%2B%3D%20encodeURIComponent%28%5C%22-%20%5C%22%20%2B%20tasks%5Bi%5D%20%2B%20%5C%22%5C%5Cn%5C%22%29%3B%5Cn%7D%3B%5Cn%5Cndraft.defineTag%28%5C%22OFTasks%5C%22%2C%20text%29%3B%22%2C%0A%20%20%20%20%22actionStepType%22%20%3A%20%22Script%22%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20%22actionStepType%22%20%3A%20%22URL%22%2C%0A%20%20%20%20%22urlTemplate%22%20%3A%20%22omnifocus%3A%5C%2F%5C%2F%5C%2Fpaste%3Ftarget%3Dinbox%26content%3D%5B%5BOFTasks%5D%5D%22%2C%0A%20%20%20%20%22useSafariViewController%22%20%3A%20false%2C%0A%20%20%20%20%22encodeTags%22%20%3A%20false%0A%20%20%7D%0A%5D&description=&modifiedAt=2016-09-28%2020%3A21%3A37%20%2B0000&name=OmniFocus%20-%20Multiple&iconImageName=action_reminder).

For those interested, it uses a JavaScript step that breaks each line of the draft apart and reassembles them in taskpaper format. This new string is stored in a new tag that can be used in the URL step. 

Here's what the JavaScript looks like: 

{% highlight javascript %}
var text = "";
var tasks = draft.content.split("\n");
for (i in tasks) {
    text += encodeURIComponent("- " + tasks[i] + "\n");
};

draft.defineTag("OFTasks", text);
{% endhighlight %}

And here's the URL step:

{% highlight text %}
omnifocus:///paste?target=inbox&content=[[OFTasks]]
{% endhighlight %}