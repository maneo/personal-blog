---
layout: post
title: Everything you ever wanted to know about uservices
---


04/10/2015 – 22:22
A few weeks ago I had a chance to pariticipate in GeeCON microservices (http://2015.microservices.geecon.org/) conference. We’ve (GeeCON team) always dreamed to have a conference near the sea side, so the Sopot sounds like a perfect place. In this post I wanted to summarize my observations and notes taken during the conference. Not all presentations were described here, for the rest of my impressions take, a look at my twitter feed.

“It’s Not Just MicroServices: Areas of focus for MicroService Success”, Fred George

During his opening keynote Fred introduced a Cynefin Framework, which to some extent explains the nature of the complex systems. Cynefin framework divides problems into 5 domains/types: obvious (or simple), complicated, complex, chaotic (we can make some assumptions and look for the answer) and disorder (lack of knowledge about nature of the problem). As far as I understand, in the beginning every problem solving quest starts in the disorder and afterwards can be categorized as one of obvious, complicated, complex or chaotic. The problem is that in the beginning we don’t know what kind of problem we are facing, so we don’t know what kind of tools are applicable (Cynefin framework makes some suggestions in this matter). Fred mentioned that most of the problems faced by modern companies can be categories as choatic. In this case we need to look for the new knowledge and learn quickly to get closer to optimal solution — which is unkown.

The Cynefin framework #geecon #microservices @fgeorge52 pic.twitter.com/Si8s8Dk8r2

— Szymon Stepniak (@wololock) September 11, 2015


What can be done to address such a use case? On the technical level, microservices looks promising here. This paradigm is well suited for cloud environments assuring scalability and productivity. It stress the discardability of software which is essential when we need to build prototype to verify our hypothesis and discard it when hypothesis is wrong. Fred presented the most common uservice architecture with the shared, dumb event bus, which gives async access to events to any service which is interested in particular piece of problem domain. After diving into technical aspects, Fred jumped into organization of work in microservice environments. I will just refer to my twitter notes here:

Kill the specialists, we need full stack problem solvers. In theory specialists are more productive but in practice specialization is causing the communication overhead and may lead to delays.
New project means you will get new job title
Fun — was one of the most frequent words in Fred’s keynote – when people have fun, they are more engaged and effective
It takes 3 to 10 weeks to build efficient team, so forming a team is a cost, that is why you should bring the work to the team
Microservices are usually mentioned as a technical paradigm but after Fred’s keynote it was clear that this approach needs to be reflected in the organizational structure.

“Swimming upstream in the container revolution”, Bert Jan Schrijver

Bert gave a very nice talk in which he described a few practices which he and his teams have adopted. Once again I will refer to my twitter notes and I will mention only the most interesting things from my personal point of view:

“Hands off” policy – No logging into servers, need a change or update, just update your puppet manifest. This one is crucial if we want to triet our infrastructure as code.
Nevertheless testing Puppet manifests before pushing them into production might be tricky
AWS has its limits (e.g. your pick of traffic might occur at the same time as others)
“Don’t depend on availiability of Ops experts” – this kill team progress.
Slides can be found here.

“Microservices – enough with theory, let’s do some coding”,
Tomek Szymański and Marcin Grzejszczak

This was the only presentation with the live coding — Tomek and Marcin produced around 5 lines of code ;-). Nevertheless it was the most technical presentation of the conference. What sleeps under the hood of the microservices ecosystem? Monitoring, alerting, deployment, dependency resolution and discoverability of services, all this on top ZooKeeper, Grafana, Ansible, ELK, Spring Boot, Hystrix, Rundeck and Slack ;-). Since “sudo apt-get install microservices” still does not work, we need to deal with the plethora of tools to automate all the steps necessary to build microservices. All the code examples were based on Accurest and 4Finance spring boot micro infra (https://github.com/4finance/micro-infra-spring).

Enough talking – let’s look at some diagrams 🙂 @szimano @MGrzejszczak at #geecon pic.twitter.com/3A245VcPCU

— Adam Dudczak (@maneo) September 11, 2015


Among other things Tomek and Marcin mentioned a very important practical feature/pattern – correlation id. In order to track the flow of the particular request in the stack of a few dozens of microservices you need to assign a unique identifier to every user request and pass it downstream. This allows you to visualize the request flow and debug/monitor your system.

In general it was a very nice presentation, nevertheless 30min was definately not enough to cover all the topics prepared by presenters.

“Scaling microservices at Gilt”, Adrian Trenaman

Adrian described the whole evolution of architecture at Gilt, starting from a successfull startup to a mature company who still want to innovate and grow.

Microservices architecture at @gilttech at #geecon pic.twitter.com/sWdwcZHGf8

— Adam Dudczak (@maneo) September 11, 2015


Voluntary adoption – give engineers freedom to choose tools their like. This is something similar to the theory of evolution 😉 productional use will verify which tools are accurate. Devs are smart enough to choose tools which works instead of new, shiny javascript framework (no offence).
Once again it was stressed that microservices are tighly connected to how organization operates.
Dark canary and Testing in Production (TiP) are prefered over traditional testing. Adrian mentioned that in case of read-only services TiP is very natural 😉 especially when implemented in a facebook way.
It’s starting to be a nice tradition, after opensourcing of Hermes by Allegro at GeeCON in May, also Gilt.tech decided to release their tool Ion roller during the GeeCON in Sopot! Hope to see more opensource activity during GeeCONs 😉
I was under huge impression of Adrian’s presentation and really glad that he decided to visit Sopot. Slides can be found here.

“Architecture without Architects”, Erik Dörnenburg

Erik’s talk was a closing keynote of entire conference. He was talking about the role of the architect in the modern software industry. Comparing software industry to the traditional architecture is wrong, software architecture is more like a town planning e.g. take a look at evolution of London and compare it to a long living IT systems.

Code city visualization (http://t.co/kup3sDS1QJ) #geecon pic.twitter.com/rzzgq3sDNy

— Adam Dudczak (@maneo) September 11, 2015


Erik presented a few very striking examples of how diagram abstraction is implemented by real systems, we as a developers need to be aware of abstractions which surrounds us. That is why architecture (abstraction/planning) and development cannot be separated. In the conclusion Erik stated that there is no reason to maintain the role architect as we know it, because most of the activities performed by archictects can and should be handled by developers.

Summary

I’ve really enjoyed this conference from both perspectives: as an organizer and as an participant. After this gig I am a great fan of single track conferences, this requires a lot more from the organizers — to select only the best talks (which is not that hard when you deal with focused event). But you don’t have this unpleasent feeling that you are missing something interesting like one usually have with multiple tracks.

Night hacking yesterday to set-up the WiFi for #geecon #microservices. It worked finally! pic.twitter.com/08x0p8rku4

— Tomek Bujok (@tombujok) September 11, 2015


Thanks to everyone who were involved in the organization, especially to Kuba Marchwicki, Tom Bujok and Michał Gruca our awesome collegues from Tricity JUG. Apart from these guys I need to mention Adrian Nowak (jesteś zajebisty!) and Łukasz Stachowiak who were the most active during the organization of the event.