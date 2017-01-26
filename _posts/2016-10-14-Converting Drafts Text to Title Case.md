---
title:  "Converting Drafts Text to Title Case"
date:   2016-10-14
categories: blog
tags:
- drafts
permalink: /converting-drafts-text-to-title-case/
image: /assets/posts/converting-drafts-text-to-title-case.jpg
pre_https: true
---
Drafts is easily one of the most used apps on my phone. To me, it is the pinnacle of resistance-free digital capture. If I look through my list of processed drafts, the most common forms of text I capture are content ideas and book suggestions. This tells me I read, write, and record a lot. 
<!--more-->

I like my placeholders for these new ideas to be uniform. In this case that means each content idea - whether it's a blog post idea or a new video - is captured as the title I would use for the content itself.

But let's be serious, I hate hitting the shift key at the beginning of every new word and I'm terrible at remembering which words should be capitalized and which should remain lowercase.

Knowing the power of Drafts, I asked if it were possible for my capture tool to handle this for me. That question led me to [an article about title case](http://leancrew.com/all-this/2015/06/title-case-in-drafts/) and JavaScript by the always excellent Dr. Drang.

Using his script as a base, this is what I landed on:

{% highlight javascript %}
var small = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)";
    var punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";
  
    this.titleCaps = function(title){
        var parts = [], split = /[:.;?!] |(?: |^)["Ò]/g, index = 0;
        
        while (true) {
            var m = split.exec(title);

            parts.push( title.substring(index, m ? m.index : title.length)
                .replace(/\b([A-Za-z][a-z.'Õ]*)\b/g, function(all){
                    return /[A-Za-z]\.[A-Za-z]/.test(all) ? all : upper(all);
                })
                .replace(RegExp("\\b" + small + "\\b", "ig"), lower)
                .replace(RegExp("^" + punct + small + "\\b", "ig"), function(all, punct, word){
                    return punct + upper(word);
                })
                .replace(RegExp("\\b" + small + punct + "$", "ig"), upper));
            
            index = split.lastIndex;
            
            if ( m ) parts.push( m[0] );
            else break;
        }
        
        return parts.join("").replace(/ V(s?)\. /ig, " v$1. ")
            .replace(/(['Õ])S\b/ig, "$1s")
            .replace(/\b(AT&T|Q&A)\b/ig, function(all){
                return all.toUpperCase();
            });
    };
    
    function lower(word){
        return word.toLowerCase();
    }
    
    function upper(word){
      return word.substr(0,1).toUpperCase() + word.substr(1);
    }

draft.content = titleCaps(draft.content);
commit(draft);
{% endhighlight %}

To install it, [click here](x-drafts4://x-callback-url/import_action?v=2&tintColor=%5B%0A%0A%5D&shouldConfirm=0&logLevel=1&uuid=FB119A8F-ED30-4CE9-8A5A-CFBC5DE8147D&disposition=0&actionSteps=%5B%0A%20%20%7B%0A%20%20%20%20%22scriptText%22%20%3A%20%22%5C%2F%5C%2F%20Script%20steps%20run%20short%20Javascripts%5Cn%5C%2F%5C%2F%20For%20documentation%20and%20examples%2C%20visit%3A%5Cn%5C%2F%5C%2F%20http%3A%5C%2F%5C%2Fhelp.agiletortoise.com%5Cn%5Cnvar%20small%20%3D%20%5C%22%28a%7Can%7Cand%7Cas%7Cat%7Cbut%7Cby%7Cen%7Cfor%7Cif%7Cin%7Cof%7Con%7Cor%7Cthe%7Cto%7Cv%5B.%5D%3F%7Cvia%7Cvs%5B.%5D%3F%29%5C%22%3B%5Cn%5Ctvar%20punct%20%3D%20%5C%22%28%5B%21%5C%5C%5C%22%23%24%25%26%27%28%29%2A%2B%2C.%5C%2F%3A%3B%3C%3D%3E%3F%40%5B%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5C%5D%5E_%60%7B%7C%7D~-%5D%2A%29%5C%22%3B%5Cn%20%20%5Cn%5Ctthis.titleCaps%20%3D%20function%28title%29%7B%5Cn%5Ct%5Ctvar%20parts%20%3D%20%5B%5D%2C%20split%20%3D%20%5C%2F%5B%3A.%3B%3F%21%5D%20%7C%28%3F%3A%20%7C%5E%29%5B%5C%22%C3%92%5D%5C%2Fg%2C%20index%20%3D%200%3B%5Cn%5Ct%5Ct%5Cn%5Ct%5Ctwhile%20%28true%29%20%7B%5Cn%5Ct%5Ct%5Ctvar%20m%20%3D%20split.exec%28title%29%3B%5Cn%5Cn%5Ct%5Ct%5Ctparts.push%28%20title.substring%28index%2C%20m%20%3F%20m.index%20%3A%20title.length%29%5Cn%5Ct%5Ct%5Ct%5Ct.replace%28%5C%2F%5C%5Cb%28%5BA-Za-z%5D%5Ba-z.%27%C3%95%5D%2A%29%5C%5Cb%5C%2Fg%2C%20function%28all%29%7B%5Cn%5Ct%5Ct%5Ct%5Ct%5Ctreturn%20%5C%2F%5BA-Za-z%5D%5C%5C.%5BA-Za-z%5D%5C%2F.test%28all%29%20%3F%20all%20%3A%20upper%28all%29%3B%5Cn%5Ct%5Ct%5Ct%5Ct%7D%29%5Cn%5Ct%5Ct%5Ct%5Ct.replace%28RegExp%28%5C%22%5C%5C%5C%5Cb%5C%22%20%2B%20small%20%2B%20%5C%22%5C%5C%5C%5Cb%5C%22%2C%20%5C%22ig%5C%22%29%2C%20lower%29%5Cn%5Ct%5Ct%5Ct%5Ct.replace%28RegExp%28%5C%22%5E%5C%22%20%2B%20punct%20%2B%20small%20%2B%20%5C%22%5C%5C%5C%5Cb%5C%22%2C%20%5C%22ig%5C%22%29%2C%20function%28all%2C%20punct%2C%20word%29%7B%5Cn%5Ct%5Ct%5Ct%5Ct%5Ctreturn%20punct%20%2B%20upper%28word%29%3B%5Cn%5Ct%5Ct%5Ct%5Ct%7D%29%5Cn%5Ct%5Ct%5Ct%5Ct.replace%28RegExp%28%5C%22%5C%5C%5C%5Cb%5C%22%20%2B%20small%20%2B%20punct%20%2B%20%5C%22%24%5C%22%2C%20%5C%22ig%5C%22%29%2C%20upper%29%29%3B%5Cn%5Ct%5Ct%5Ct%5Cn%5Ct%5Ct%5Ctindex%20%3D%20split.lastIndex%3B%5Cn%5Ct%5Ct%5Ct%5Cn%5Ct%5Ct%5Ctif%20%28%20m%20%29%20parts.push%28%20m%5B0%5D%20%29%3B%5Cn%5Ct%5Ct%5Ctelse%20break%3B%5Cn%5Ct%5Ct%7D%5Cn%5Ct%5Ct%5Cn%5Ct%5Ctreturn%20parts.join%28%5C%22%5C%22%29.replace%28%5C%2F%20V%28s%3F%29%5C%5C.%20%5C%2Fig%2C%20%5C%22%20v%241.%20%5C%22%29%5Cn%5Ct%5Ct%5Ct.replace%28%5C%2F%28%5B%27%C3%95%5D%29S%5C%5Cb%5C%2Fig%2C%20%5C%22%241s%5C%22%29%5Cn%5Ct%5Ct%5Ct.replace%28%5C%2F%5C%5Cb%28AT%26T%7CQ%26A%29%5C%5Cb%5C%2Fig%2C%20function%28all%29%7B%5Cn%5Ct%5Ct%5Ct%5Ctreturn%20all.toUpperCase%28%29%3B%5Cn%5Ct%5Ct%5Ct%7D%29%3B%5Cn%5Ct%7D%3B%5Cn%20%20%20%20%5Cn%5Ctfunction%20lower%28word%29%7B%5Cn%5Ct%5Ctreturn%20word.toLowerCase%28%29%3B%5Cn%5Ct%7D%5Cn%20%20%20%20%5Cn%5Ctfunction%20upper%28word%29%7B%5Cn%5Ct%20%20return%20word.substr%280%2C1%29.toUpperCase%28%29%20%2B%20word.substr%281%29%3B%5Cn%5Ct%7D%5Cn%5Cndraft.content%20%3D%20titleCaps%28draft.content%29%3B%5Cncommit%28draft%29%3B%5Cn%22%2C%0A%20%20%20%20%22actionStepType%22%20%3A%20%22Script%22%0A%20%20%7D%0A%5D&description=&modifiedAt=2016-10-13%2014%3A03%3A20%20%2B0000&name=Title%20Case&iconImageName=action_script
).

From a practical standpoint, I set this up as an action key so I can use it easily. Now, all I do is type the idea, hit TI above the keyboard, and then action it off to where belongs.
