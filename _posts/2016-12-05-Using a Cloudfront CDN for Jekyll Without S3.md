---
title:  "Using a Cloudfront CDN for Jekyll Without S3"
date:   2016-12-05
categories: blog
tags:
- jekyll
permalink: /using-a-cloudfront-cdn-for-jekyll-without-s3/
image: /assets/posts/using-a-cloudfront-cdn-for-jekyll-without-s3.jpg
pre_https: true
---
On occasion I find myself with a sliver of free time. And it seems inevitable that I use it to tinker with this site. Given my latest obsession with page load speeds, this time I directed my attention towards the implementation of a CDN.
<!--more-->

This is an idea I stole from Brett Terpstra who has an [article about his method](http://brettterpstra.com/2014/02/21/a-jekyll-cdn-with-cloudfront/) of doing the same. My case has some slight differences and if you do a search for how to use Cloudfront with Jekyll, you'll be hard-pressed to find an explanation of how to do it without using S3 for your hosting. Which is why I felt compelled to share my process with you.

I chose [Cloudfront](https://aws.amazon.com/cloudfront/) because I'm a fan of [AWS](https://aws.amazon.com) (Amazon Web Services) and they are fairly cheap in comparison to the other big names in industry. I've worked with AWS enough in the past to trust it. But here's how I set up Cloudfront to work with Jekyll:

## Setting Up Cloudfront

Once you have an account with AWS, open Cloudfront from the management console and create a new web distribution. There are only three settings I changed from the default.

__Origin Domain Name__ - This is your site homepage. I entered `joebuhlig.com`

__Origin ID__ - This is merely a description you want for the origin. I used `joebuhlig.com Resources`.

__Alternate Domain Names__ - This becomes the new base URL you'll use to serve the files from Cloudfront. I was very original and used `cdn.joebuhlig.com` for this.

With the settings in place and the distribution created, you'll be given a domain name for your distribution that looks similar to this: `abcdefg123456.cloudfront.net` We'll use this to set up our DNS record.

## Setting Up DNS

I'm not going into each registrar here, but the idea is to create a CNAME record on your domain with the host as your subdomain (in my case `cdn`) and the target as the domain name given for your distribution in the previous step (`abcdefg123456.cloudfront.net`).

You want to give this some time to populate and to allow AWS to do its magic. I left it alone and went to work on converting the URLs within Jekyll to accommodate the new CDN URL: `cdn.joebuhlig.com`.

## Setting Up Jekyll

As a Jekyll user, you are probably familiar with using the Liquid tag `{% raw %}{{ site.url }}{% endraw %}`. That variable is coming from the `_config.yml` file and we simply want to add `cdn_url` to it. Mine looks like this:

{% highlight yaml %}
baseurl: ""
url: "http://joebuhlig.com"
cdn_url: http://cdn.joebuhlig.com
{% endhighlight %}

With `cdn_url` in place, you need to go through your static files and image references and change the base URL from a relative reference or `{% raw %}{{ site.url }}{% endraw %}` to `{% raw %}{{ site.cdn_url }}{% endraw %}` instead. I recommend previewing this before you deploy it just to make sure it's working correctly and that Cloudfront is fully up and running. You can also test this by navigating to the base `cdn_url` itself and check if a copy of your site is available. If not, you need to wait for the DNS changes to populate.

## Jekyll Development

A problem you'll quickly run into is doing development of CSS and JS when your assets are being served from a CDN. In my workflow I run two commands: `jekyll s --future` to test and preview my site and `JEKYLL_ENV=production jekyll b` for a production build right before deployment. This allows me to use the Liquid variable `{% raw %}{{ jekyll.environment }}{% endraw %}` to test if I am in production, like so:

`{% raw %}{% if jekyll.environment == 'production' %}{{ site.cdn_url }}{% endif %}{% endraw %}`

If you use this in conjunction with the `cdn_url`, it means that when I'm building for production, the `cdn_url` is added and empty if it's for development. I'm left with relative and local URLs in development and the full CDN URL in production.

## Cache Busting

The last step here is adding a version number to the static assets that change fairly frequently. There are a number of ways to do this but I prefer the tried-and-true query string: `main.css?v=5`

Just like the `cdn_url`, I added `version: 1` to my `_config.yml` file. That allows me to append any asset URL to look like this: `{% raw %}/assets/main.css?v={{ site.version}}{% endraw %}` When used at the same time as the `cdn_url`, I'm left with this:

`{% raw %}{% if jekyll.environment == 'production' %}{{ site.cdn_url }}{% endif %}/assets/css/main.css?v={{ site.version }}{% endraw %}`

Now, I'm lazy and don't want to manually increment this version number every time I want to bust the cache so I again [stole a page from Brett Terpstra's book](http://brettterpstra.com/2013/03/05/site-versioning-with-jekyll/) and wrote a rake task to do it for me:

{% highlight ruby %}
desc "Bump version number"
task :bump do
    content = IO.read('_config.yml')
    content.sub!(/^version: (\d+)$/) {|v|
        ver = $1.next
        puts "At version #{ver}"
        "version: #{ver}"
    }
    File.open('_config.yml','w') do |f|
        f.write content
    end
end
{% endhighlight %}

Now all I need to do is run `rake bump` after I've edited static files and it will take care of the rest.
