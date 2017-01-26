---
title:  "A Text File Weather Forecast"
date:   2016-04-01
categories: blog
tags:
- text-files
- weather
permalink: /a-text-file-weather-forecast/
image: /assets/posts/A-Text-File-Weather-Forececast.jpg
pre_https: true
---
It never fails. I sit at our kitchen table over breakfast and mention to my wife that it's going to snow that day. The first question she asks? *"How much?"* I don't know! All I know is that my alert says it's supposed to happen!
<!--more-->

After going through this exchange so many times that my wife realized she was driving me crazy *then continued to ask because she enjoys taunting me*, I gave up and created my own weather forecast. I wanted to know temperatures and precipitation amounts and keep a daily record of each forecast. I figured if I was going to go through the trouble of creating it, I might as well make it possible to search a date and get the forecast from that day. I turned to text files and Google Scripts.

## Today

<img class="center-image post-image-small" style="width:40%;" src="/assets/posts_extra/a_text_file_weather_forecast/weather-today.jpg" />

To set this up, you'll need access to Google Drive and a [developer account with Weather Underground](http://www.wunderground.com/weather/api?apiref=6977fd0285651b13).

1. Create a new Google Apps Script in Google Drive.
2. Paste the code below into the script.
3. Replace the _X_s in the script with your Weather Underground API key and change the city/state to your location.
4. Set up a trigger to run the function automatically (Resources > Current project's triggers).

<img class="center-image post-image-medium" src="/assets/posts_extra/a_text_file_weather_forecast/app-trigger.jpg" />

Here's the script you'll need:

{% gist joebuhlig/488a95d9072b6c8a1500 %}

When run, the script will create a text file at the top-level of your Google Drive. From there you can use Hazel to move and rename these files however you like. For example, I use Hazel to rename the files to just the date and move them to DropBox within [my text file setup](http://joebuhlig.com/text-file-setup-and-workflow/).

<img class="center-image post-image-medium" src="/assets/posts_extra/a_text_file_weather_forecast/hazel-rule.jpg" />

## Yesterday

<img class="center-image post-image-small" style="width:40%;" src="/assets/posts_extra/a_text_file_weather_forecast/weather-yesterday.jpg" />

Once I had today's forecast working properly, I took the next step: keeping a history of what actually happened the day before. This was primarily so I could determine how much rain we had yesterday. I grew up on a crop farm. The most common question in a farming community is, "How much rain did you get last night?" That almost instinctual curiosity has never left me, but instead of setting up a rain gauge like most good farmers, I just altered my forecast script to give the data from the day before in the same format.

Everything for this historical record works the same as the forecast. The only difference is the location of the API call and the parsing of the data.

{% gist joebuhlig/d652e20182ed3c380e15 %}

The benefit of having both of these in place is the ability to compare the forecast to what actually happened. The only issue with doing this is the result: it shows just how bad forecasts really are at predicting weather. But hey, at least breakfast with my wife is less maddening.  
