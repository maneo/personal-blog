---
layout: post
title: Introducing NEP and the release of streets-editor
---

## Long intro aka Product Pitch

[Stories from old newspapers](https://www.instagram.com/historie_ze_starych_gazet/) IG profile which I was covering on this blog some time ago are just a side effect of working on something larger - a system called NEP. In a nutshell, NEP is a set of tools for exploring old Polish newspapers data. There are dozens of interesting old newspapers digitized in [Polish Digital Libraries](https://fbc.pionier.net.pl/), some of them are even searchable! I've created NEP to make it easier to find interesting things in this vast haystack of undiscovered knowledge. Easier? But... 
* These old newspapers have extensive bibliographic information - well, not really, most of them were digitized in a hurry and as the volume of work necessary to identify "interesting information" is really significant, description boils down to publication date and title.
* Despite that.. for sure you can search for some phrase/place or person and you will get relevant results - well, sometimes you can, sometimes you can't. Only part of digitized newspapers were OCRed (is searchable) there are also other problems.

Apart from these two main issues there is also one more thing.. why would people care about old newspapers? There are of course very interesting groups like historians or genealogists but what about a broader audience? Broader audiences usually don't have the key to open this trove full of treasures. 

That's of course my personal opinion, but imho without curated content, selected themes or some other anchor which connects historical content with modern life these old newspapers will remain interesting only for historians. What can be such an anchor?

According to the Polish Centre for Public Opinion Research (CBOS) almost 74% of Poles are interested in local history. This sounds serious enough! What is local history from an information retrieval point of view? I could build an elaborate scientific narrative here, but let's not overcomplicate this 😀 My first candidates for picklock to old newspapers were street names and entire addresses. What was happening on my street in the 1930s? Any interesting things happened in my district in 1938? Which streets are historically the hottest? Sounds interesting... I hope so 😀 (just to boost your interest... there is a lot of violence and quite a few romantic stories there 😀)

## Here comes streets-editor

This is how the whole NEP started - as a simple parser, which was trying to extract all street names and associate it with a link to a particular page (current tools link only to the entire issue of the newspaper, not the exact page, this is huge simplification for end-users). To do this efficiently you will need a list of historical streets with all variants and possible misspellings. Initially I started with a list extracted from various wikis - after reviewing initial results I found this dictionary as vastly incomplete. I've started to work with Poznań city plans from the great [Cyryl](https://cyryl.poznan.pl/) repository, I've manually verified and edited almost 750 street names. Daunting and boring tasks. This dictionary resulted in much better matches than the previous one. If you ever need a list of historical street names of Poznań, you can find the list in [here](https://github.com/maneo/gazety.poznan.pl) - feel free to contribute if you find any mistakes.

![example Poznań city plan, source: https://cyryl.poznan.pl/]({{site.baseurl}}/assets/images/posts/streets-editor/example_of_city_plan.jpg)


![example index of streets from city plan, source: https://cyryl.poznan.pl/]({{site.baseurl}}/assets/images/posts/streets-editor/streets-index.jpg)

As I've mentioned, preparing the list was a daunting and boring task. To speed this up a bit, I've created [streets-editor](https://github.com/maneo/streets-editor), simple application which is using AI to extract street names from historical plans, verify them, match them with modern streets, geo location data and additional resources like links to wikis and external portals. 


## Basic workflow

* Upload historical city map, use builtin AI features to extract streets/square/alleys names
* Edit and add new streets/square/alleys names
* Add name variants and misspellings
* Export data in json, to use in your/other application

![upload form and dictionaries browser]({{site.baseurl}}/assets/images/posts/streets-editor/se_01.png){: width="800px"}

![streets data editor]({{site.baseurl}}/assets/images/posts/streets-editor/se_02.png){: width="800px"}


## Advanced workflow

Street names are changing over the course of decades. Streets-editor allows you to create street names dictionaries for a given time period / decades. You can upload several historical city plans and prepare street names dictionaries for them. Several dictionaries can be also mapped to default dictionaries ex. modern street names. When the default dictionary is defined you can map streets from any other dictionary to default streets. 

Default dictionaries have additional metadata. You can assign (or automatically enrich) geolocation, links and text to it.

In other words, advanced workflow can look as follows:
* upload city plan for Poznań from 1938 (decade 1930 - 1939)
* extract streets using AI, correct errors manually
* upload list of modern Poznań streets names in form of csv file: city, prefix, street name, district
* mark modern streets as default dictionary
* enrich modern streets data with geolocation (one after another in web ui, or all at once in cli interface)
* assign links and additional information to most interesting street names
* map streets from 1930 - 1939 to modern names (one after another in web ui, or all at once in cli interface)
* export both dictionaries for further use in the Named Character Recognition engine or any other use case.

![default dictionary streets list]({{site.baseurl}}/assets/images/posts/streets-editor/se_03.png){: width="800px"}

![default dictionary street editor]({{site.baseurl}}/assets/images/posts/streets-editor/se_04.png){: width="800px"}


# Final thoughts

If you are interested in what streets-editor is doing, you can deploy it on your own (hope that README is comprehensive enough) or please let me know, I know where to find working instances 😀. 

What is even more important, if you are interested in helping me to prepare dictionaries for Poznań for years between 1939 and 1989 please, please let me know.

As most of the stuff which I've learned during this project is related to AI development, I will summarize this in my next post shortly.
