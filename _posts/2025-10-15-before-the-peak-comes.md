---
layout: post
title: Before the peak comes - Software Engineering action story
---

## A few words of introduction

I've always wanted to write a Software Engineering action story. Yup, you heard correctly 😃. Usually there are not many strong emotions related to Software Development, so why action story? Because sometimes things are getting out of hand and engineers need to act quickly like action story heroes. Sounds cool? In reality it is stressful as hell...

This is not a 100% fictional story during my professional carreer I saw many similar failures and instabilities. The fact that they were solved/patched on an ongoing basis, so as not to stop operation of the platform, is due to the engineers performing the so-called on duty rotation. This means 24/7 readiness to react on signals that something may cause platform to stop serving clients. This story is in fact a tribute to on duty engineers, their commitment, to the stress they had to deal with in the face of crisis, to their camaraderie and readiness to look for a solution together. 

The story is titled "Before the peak comes", I hope you enjoy reading it. I need to warn you, the text is a bit technical, so please fasten your seat belts 😀. (feel free to jump to glossary at the end in case of doubts). 

Finally, I would like to dedicate this short story to the memory of ***Wojtek Stryszyk***. One of the many silent superheroes of Allegro Tech. Thanks Wojtek! Hope you would like this.


## Before the peak comes

##### <span style="color:indianred;">2:00 p.m., Friday</span>, communication channel of the Kwark team

<span style="color:steelblue;">Wojtek:</span> Two search engine servers stopped responding, it looks like they went into Full Garbage Collection (GC) - I will restart them.. 

<span style="color:seagreen;">John:</span> A bit strange at this hour of the day, there has been peace with GC for several weeks. <span style="color:steelblue;">@Wojtek</span> are you on duty this weekend? Maybe I'll add some extra coal to the stove? What would you say if I would spawn some additional servers?

<span style="color:steelblue;">Wojtek:</span> Might be useful - thanks. I'll look through the logs and see if I can find any unusual queries. Anything new was deployed in search services this week?

<span style="color:seagreen;">John:</span> As far as I know, Chicken and Jacek fiddled with the tooling and new index structure, but nothing with query handling.

<span style="color:aliceblue;">Chicken:</span> Last deployed 8 days ago. I think we're hanging around a bit, dudes 😃

<span style="color:seagreen;">John:</span> That’s how it goes… days go by so quickly 😂

<span style="color:steelblue;">Wojtek:</span> Someone is scanning us, page by page, but these queries look as usual, they were also in last week's log. There are some strange SQL queries 😃 but when I put them on a single machine for execution, it doesn't run into GC.

<span style="color:seagreen;">John:</span> SQL? Our shoppers learned to type SQL into the search box - LOL, WTF? Programmers will soon no longer be needed since customers ask questions in SQL.

<span style="color:aliceblue;">Chicken:</span> SQL?!?! 

<span style="color:steelblue;">Wojtek:</span> Well, nothing interesting - I'll keep digging and I'll send this SQL thing to the Security dept.

##### <span style="color:indianred;">7:05 p.m., Friday</span>, Grocery supermarket near Grunwaldzka street, Poznań

<span style="color:orange;">***The phone is ringing***</span> 

<span style="color:seagreen;">John:</span> What's up? <br/>

<span style="color:steelblue;">Wojtek:</span> The whole farm is on fire, one machine after another falls into the GC and dies, can you help me?

<span style="color:seagreen;">John:</span> Damn, I don't have a computer with me, I can be at home in 20 minutes. Call Chicken, he said he had no plans for the evening. I will finish shopping and join in as soon as I get back.

##### <span style="color:indianred;">7:07 p.m., Friday</span>, Chicken’s Hole, the phone is ringing

<span style="color:steelblue;">Wojtek:</span> Krzychu? (few people knows that Chicken’s name is Krzychu)

Little Chicken (aka Jasiu): I'm playing now, dad isn't here

<span style="color:steelblue;">Wojtek:</span> Jasiu, please give a phone to your dad for a moment, it's important

Little Chicken: bye bye

##### <span style="color:indianred;">7:08 p.m., Friday</span>, communication channel of the Kwark team**

<span style="color:aliceblue;">Chicken:</span> <span style="color:steelblue;">@Wojtek</span> did you call? 

<span style="color:aliceblue;">Chicken:</span> oh my gosh, I see everything is on fire... how can I help?

<span style="color:steelblue;">Wojtek:</span> I can only restart them, it crashes one by one, it takes a while to get back to work and warm up... if you could take over restarting, I'll try to find out what the hell it is

<span style="color:aliceblue;">Chicken:</span> Have you added more servers?

<span style="color:steelblue;">Wojtek:</span> John added a few machines in the afternoon, but it does not help much. It looks like some kind of attack.

##### <span style="color:indianred;">7:10 p.m., Friday</span>, company-wide communication channel #outages

Ragnarok: 50% of users have problems getting search results, I call the team @Kwark on duty eng. 

<span style="color:steelblue;">Wojtek:</span> We are on it, something is killing server by server. The machines go into Full GC one by one and stop responding. 

Ragnarok: Need help?

<span style="color:steelblue;">Wojtek:</span> Are we under some kind of DDOS now? 

Ragnarok: Traffic looks normal, I'll ask Security, but probably not.

##### <span style="color:indianred;">7:12 p.m., Friday</span>, communication channel of the Kwark team**

<span style="color:seagreen;">John:</span> I am back, how can I help?

<span style="color:aliceblue;">Chicken:</span> I am restarting servers, Wojtek looks for the cause. Traffic is slowly starting to grow, but impact on users is already visible ☹️

<span style="color:seagreen;">John:</span> <span style="color:steelblue;">@Wojtek</span> if you have nothing else for me to do, I will try to extend the http cache life, it should reduce the load on the servers

<span style="color:steelblue;">Wojtek:</span> thx.

##### <span style="color:indianred;">7:20 p.m., Friday</span>, company-wide communication channel #outages

DangerousRoman: Since this morning, someone has been trying to carry out SQL injection through a search input window. Single queries, several variants - it didn't look like anything dangerous. 

<span style="color:steelblue;">Wojtek:</span> I saw them, tested them and they don't seem to have any impact on the search engine. Any other anomalies?

DangerousRoman: No, but I'll check the records.

##### <span style="color:indianred;">7:22 p.m., Friday</span>, internal comm. channel of the Kwark team

<span style="color:seagreen;">John:</span> <span style="color:steelblue;">@Wojtek</span> Do you have examples of these SQLs? Roman wrote that there are several variants

<span style="color:steelblue;">Wojtek:</span> I think I have regexp that filters them all - here's a file with a copy of server logs. Maybe we will just cut them out rudely at the search service layer? I don't think there are many products named after SQL queries 😃

<span style="color:seagreen;">John:</span> I don't have any other idea, should I make a pull request? 

<span style="color:steelblue;">Wojtek:</span> I've already started.

<i style="color:orange;">Imagine that 10 million people knock on your door and want to buy something, and you are not able to even tell them that you are not able to sell anything today. How long would a queue of 10 million people be? probably about 7,500 km, the distance from Warsaw to New York is 6,850 km - imagine that they are all standing and waiting for you...</i>



##### <span style="color:indianred;">7:25 p.m., Friday</span>, company-wide communication channel #outages

Ragnarok: <span style="color:steelblue;">@Wojtek</span> how is it going? 40% of users still have trouble finalizing their search, and traffic is growing every minute

<span style="color:steelblue;">Wojtek:</span> We are working on solving this.

DangerousRoman: <span style="color:steelblue;">@Wojtek</span>, there are many more SQLs in the logs now than in the morning. It looks like they were sampling us in the morning and now they are "attacking", it's a strange attack, small scale, they don't get anything,  must have realized that we have problems because of it.

<span style="color:steelblue;">Wojtek:</span> O! This is probably the best we have, we will prepare a change that will filter out all SQLs from reaching the backend. Then we will check why it (doesn't) work.

Ragnarok: Ok. Do you need someone's help? 

<span style="color:steelblue;">Wojtek:</span> I have people for code review, so I guess I am ok.


##### <span style="color:indianred;">7:30 p.m., Friday</span>, Somewhere in Poland

<span style="color:orange;">Woman:</span> Have you ordered dog food?

<span style="color:darkorange;">Man:</span> No, Allegro does not work. I'm trying to search, but error page is best I can get... so I guess we'll go to the store tomorrow morning

<span style="color:orange;">Woman:</span> Okay. A bunch of amateurs, it's a simple website, how can you screw up something so simple like that...

##### <span style="color:indianred;">7:40 p.m., Friday</span>, communication channel of the Kwark team

<span style="color:seagreen;">John:</span> I was able to replicate this problem with Full GC. I played various combinations, you have to send a few pieces of this shit to kill the server. I managed to narrow it down to three queries, if the kiss of death hits the machine three or four times… that's it.

<span style="color:steelblue;">Wojtek:</span> I'm finishing the pull request with a change in query handling, just a moment.

Chicken: Fortunately, the frequency with which it comes is not increasing

<span style="color:steelblue;">Wojtek:</span> Pull request is ready, take a look plz

##### <span style="color:indianred;">7:50 p.m., Friday</span>, company-wide communication channel #outages

Ragnarok: Customer service is receiving more and more reports about customers being unable to search.

<span style="color:steelblue;">Wojtek:</span> We finished preparing the change. Only a few more minutes.

##### <span style="color:indianred;">8:00 p.m., Friday</span>, communication channel of the Kwark band

Chicken: I'm deploying to canary at 10%

Chicken: Ready

<span style="color:seagreen;">John:</span> Add more traffic...

Chicken: Increasing to 30%

<span style="color:steelblue;">Wojtek:</span> I will restart Isaura because it went into GC

Chicken: Deploying change for 60% traffic

<span style="color:seagreen;">John:</span> I think the storm is over, metrics look much better. Go for 100%.

##### <span style="color:indianred;">8:10 p.m., Friday</span>, company-wide communication channel #outages

<span style="color:steelblue;">Wojtek:</span> change implemented on 100% of traffic, it should stabilize…

Ragnarok: thanks, I see that apdex is going up. I can't get any errors when I click on the page myself. looks good.

##### <span style="color:indianred;">8:30 p.m., Friday</span>, communication channel of the Kwark team**

<span style="color:seagreen;">John:</span> Gentlemen, we earned a huge round of applause. We are saved!

<span style="color:steelblue;">Wojtek:</span> However, the mystery still remains a mystery. Gentlemen, thanks for your help, without you I would be fucked.

Chicken: 😃

Chicken: You can open a beer without any scruples

##### <span style="color:indianred;">8:40 p.m., Friday</span>, company-wide communication channel #outages

Ragnarok: Folks, thank you for today, the situation looks stable, I wish everyone a peaceful weekend. I'll setup a meeting on Monday to discuss what happened here.

<span style="color:steelblue;">Wojtek:</span> We still need to clarify a few issues, but everything will be described in postmortem. thanks for your help @DangerousRoman @Ragnarok

DangerousRoman: 🍻🍻


## Epilogue

##### <span style="color:indianred;">10:30 p.m., Friday</span>, communication channel of the Kwark team

<span style="color:steelblue;">Wojtek:</span> Is anyone there? 

<span style="color:seagreen;">John:</span> I'm just about to open the wine 😀

Jacek: I see that you had party without me... ☹️

<span style="color:steelblue;">Wojtek:</span> you weren't going to your in-laws in Szczecin today? 😀😀

Jacek: …you should call me even more 😀😀

<span style="color:steelblue;">Wojtek:</span> It bothers me that we don't have the source of the problem... These 3 queries cause a sudden, exponential increase in memory consumption, the others do not. 

<span style="color:seagreen;">John:</span> but did you find what's exploding there? 

<span style="color:steelblue;">Wojtek:</span> It seems to me that our mechanism for disabling special characters cannot cope with what comes there, there are hundreds of asterisks, question marks and other strange characters. With a few special fields which we have in index, such an asterisk generates two orders of magnitude more variants.

Jacek: I have just tested these queries on the new version of the index, the one we wanted to deploy on Monday. Nothing was getting clogged. 

<span style="color:steelblue;">Wojtek:</span> There are updates to several libraries. I will check whether the final queries are different on the new and old clusters....

<span style="color:seagreen;">John:</span> .. [ominous suspense music playing] 😀😀

(after several minutes)

<span style="color:steelblue;">Wojtek:</span> I think we have a solution, there is a difference in queries which reach backend servers, so this update of dependencies should help  - thanks guys, you can go to bed with a clear conscience 🍺🍺🍺🍺🍺


## Glossary

```Peak``` - peak of traffic, it is different with different services, in case of ecommerce evening peak of traffic starts around 8/9pm. It is crucial for service to be in a good shape when clients want to shop, this is an additional factor increasing tension when solving problems like the ones described in the story.


```Full GC``` - in Java Virtual Machines (JVM) based application, Full Garbage Collection is launched when entire memory is occupied and there is no space to allocate new objects. This kind of operation requires that all programs launched in a given JVM are stopped. For high throughput applications stopping a program for several seconds, even minutes means severe problems; it is sometimes faster to restart the whole application (of course this does not solve the root cause).

```SQL queries``` - SQL is a formal language used to query relational databases, this is a lingua franca for all analysts but definitely not to mere mortals. 

```SQL injection``` - hackers can try to inject additional SQL commands except regular user name  or user ID, in a poorly secured system this may lead to leaking users data or other unintended effects.

```farm/cluster/backend servers``` - group of servers responsible for given task eg. search engine cluster.

```DDOS``` - distributed denial of service attack, usual way to kill website.
 
```Security / Sec``` - security department, people who know how to get rid of nasty hackers and find potential vulnerabilities before someone is able to exploit them.

```Postmortem``` - document summarizes reasons of failure, which includes planned activities to avoid problems occurring in the future.

```Regexp``` - regular expressions it is magical way to abstract patterns in text for eg. Ada* will match with words Adam, Adama, Adamowi etc. 

```people for code review``` - code which is going to be responsible for handling queries of Allegro shoppers should be stable, readable and bugfree. Programmers are humans and make errors, to minimize chances of deploying faulty code, it is required that every new piece of code should be reviewed by other two engineers.

```deploy canary``` - deploy services for part of traffic to see if change is working well. This allows to minimize the chance to deploy faulty change.

```pull request``` - all code which will be changed, in one place, ready to be reviewed.

```Will restart isaura``` - at some point all servers responsible for handling allegro search engine were named with spanish female names. 

```Apdex``` - percent of users who are able to use service/website without problems. Low apdex means that a significant percent of users do not have access to websites.