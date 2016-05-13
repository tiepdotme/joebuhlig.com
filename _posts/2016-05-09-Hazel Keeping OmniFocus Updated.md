---
title:  "Hazel Keeping OmniFocus Updated"
date:   2016-05-09
categories: blog
tags:
- hazel
- omnifocus
permalink: /hazel-keeping-omnifocus-updated/
image: /assets/posts/hazel-keeping-omnifocus-updated.jpg
---
There are times when you need a feature in software that doesn't currently exist. Sometimes that leads to exploring alternatives or even creating your own, which is how inventors and entrepreneurs get a lot of their ideas.
<!--more-->

In our current app culture, there is a growing push for extensibility and the ability to interact with the core data of a service from other apps. This ability has become necessary in my core applications. I've reached a point where there are no apps out there that have _all_ the features I'm looking for.

I don't see this as a bad thing. It simply means my view of software and my willingness to augment the existing functionality reaches beyond the current options. This does not mean an app is the wrong choice. Basically, I'm asking for things that either don't exist in any current app, such as [shuffling tasks](http://joebuhlig.com/32/), or it means that the developer has yet to implement them.

With something as personal as a task manager, we're certain to find shortcomings in every option available. Some people decide to work within the system they've chosen while others search for and create structures to fill in the gaps with new, bolt-on features. Again, this doesn't mean you've chosen the wrong tool. It means you understand yourself and the app well enough to develop a system that is specific to you.

I've done this feature augmentation with OmniFocus. The Omni Group is excellent at making their apps scriptable and they have zero intentions of changing that. This is only [one of the reasons](http://joebuhlig.com/why-i-use-omnifocus/) I've made OmniFocus my life manager of choice. They understand the impossibility of creating a tool that fits everyone, so they make it possible for us to customize our experience.

The experience I've created on my Mac has a hands-off mentality. I've written a handful of AppleScripts to create features I rely on. I could run these daily or every time I want to my database to update, but here's a better solution: [Hazel](https://www.noodlesoft.com/kb/).

Hazel has the ability to run a script when a certain criteria has been met. That criteria is extremely flexible and has allowed me to fine-tune this new functionality. The following is an overview of these augmented features that Hazel has allowed me to add to OmniFocus without any manual interventions.

## Auto-Parser

There has been [great progress](https://discourse.omnigroup.com/t/implementation-details-for-omnifocus-2-14-automation/24179?u=joebuhlig) on this in recent weeks but I often have a desire to capture an idea and send it to a specific project and context from my phone. I could use the new URL scheme but it's not as quick and smooth as using the [Auto-Parser](https://github.com/joebuhlig/OFScripts/tree/master/Auto-Parser). I've written about this [in the past](http://joebuhlig.com/omnifocus-auto-parser/), but the short of it is that it allows me to email a task into OmniFocus and let my Mac put it into the correct home within my database. I let Hazel run this script in the background every time OmniFocus syncs.

## Scheduled Reviews

Some people love the ability to do daily "mini-reviews" in order to keep their projects updated. I prefer to do them all at once and on scheduled days. Since OmniFocus doesn't currently support this, I wrote [this script](https://github.com/joebuhlig/OFScripts/tree/master/Update%20Reviews) which resets the "Next Review Date" to my scheduled date depending on the review cycle I have set for that project. I used to run this manually whenever I saw the perspective highlight but now I let Hazel run it (without the confirmation) on a daily basis.

## Weather Activation

Sometimes I add features that I feel should be a part of the core software, like scheduled reviews. This is far from that. I wanted to turn projects on or off depending on weather conditions, namely temperature. [This script](https://github.com/joebuhlig/OFScripts/tree/master/Weather%20Activation) does exactly that. Again, I let Hazel run it daily and it searches for projects with notes that meet a certain criteria. Based on the results, it decides if the project should be made active or not. This is really handy for spring and fall maintenance projects.

## Text File Report

I generate a daily report that shows all the tasks I've completed that day. It gives me a historical record that I can use for clients, but mostly I just like to be able to look back on a certain day and see what I did. It's not necessary but I like the satisfaction in seeing it. [This script](https://github.com/joebuhlig/OFScripts/tree/master/Daily%20Task%20Report) takes the tasks completed yesterday and puts them into a text file. Hazel runs it daily to give me a single file for each day.

Although I would love to see these features built-in, I understand they are too specific to my preferences and a broader implementation would add too much to an already intimidating and powerful tool.
