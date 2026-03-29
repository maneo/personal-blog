---
layout: post
title: AI Assisted coding - thoughts so far
---

## Fast and furious

It's been more than 3 months since the initial draft of this post till now. It is strange to see how things are changing over the course of the last 3, 6, 12 months. To a large extent all look the same but AI assisted coding is a completely different discussion. There are still some hardcore devs who use "vibe coding" contemptuously as a swear word whenever AI emerges in the discussion, but it is much closer than ever to serious, more professionally sounding AI assisted coding. As my experience in using these AI tools for coding is growing, I decided to dump my current as it is... it might be interesting to read this post in 6 months :-)

## AI agents as partners in crime

One of the biggest discoveries along the way was the idea that AI is a great partner in preparing the plan of work. Yes, I know there is a planning mode, which allows you to see what AI is intending to do, and review this before execution but… it is not all. The really cool idea here is to prompt for building context. This boils down to two things: 1) discussion with an experienced partner, 2) use AI to enhance your prompts. The first one proved to be more useful in my case.  In general it can be as simple as one additional sentence in your prompt. Specify the need and at the end of the prompt add something like: “ask me 3 to 5 questions which will help you to better understand what I want to achieve”.  

Thanks to this you can have a really cool brainstorm session by adding “ask me 3 to 5 questions…. as long as I will tell you to stop and summarize”. When starting with the general idea for the app, having an expert-level partner in discussion helps you to identify corner cases, possibilities and challenges. Execute this as a part of your planning prompt and it works like a charm. 

Remember that there are models which are better at planning (with thinking mode), they are usually more expensive and it takes more time for them to process questions, but it is usually worth it, for tasks like described above. 

## Context is the king

Models fail to perform mainly because of problems with context: 1) contains too little information, 2) contains too much information, 3) is too muddy -- contains information related to many different things. When working with agents, context management is very important. 

There are some tactical and some strategic techniques here. On the strategic level, try to breakdown tasks, from the most general, to very specific.  For example: 
* first try to prepare short documents, in which you would agree on what app is supposed to do in the form of PRD-like documents. This would allow AI to look up (in its "head") for similar projects and use this experience in discussion. Save results of these discussions and use them later to building context in the following tasks. 
* Prepare a simple description of technical stack, use “ask me 3-5 questions” (aka Socratic method) to investigate all possible pros and cons of a given technology. Discuss the level of automated testing you would like to have, CI/CD pipelines etc. 
* Once again take documents from previous sessions and start planning endpoints / main components of the app, prepare a general plan with list of components, their parameters - something which in some cases can be pretty close to swagger-like documentation.
* With all these documents, scaffold the project structure - remember about using plan mode. With a plan being ready, you can make your own changes and then execute this plan. Ensure that model will not do more than you want eg. create a db schema - just project structure.
* Now select one component to start building the actual app. Pass all the documents in the prompt as context, use planning mode. 
* Proceed to the next feature...

This way of working gives you both control on what is going to be built and rich context information which can be reused later in the project, to generate documentation.

Coming back to context-related problems. Some things will be by definition outside of context eg. secrets or things out of reach (eg. on site configuration of jenkins or github), ask AI about what should be present there, verify this on your own or use MCP servers to allow AI to check correctness of on his own (not for secrets)

*What happens when the model is reaching the maximum size of context?* It is starting to make mistakes. Some people are saying that models stop performing when context utilization reaches 40%, I guess this will change with new models, nevertheless the rule of the thumb should be tasks need to be well defined and understandable, as specific as possible... well this also applies to tasks handed out to humans :-). Most tools nowadays are pretty good in applying automatic compaction which helps here a lot.

## You are the breaking pedal

When working with agents it is very tempting just to follow the currents, surf on AI waves... When you use planning modes and do the task breakdown well, apps start to appear very quickly. To achieve that, agents will generate a lot of code, it is very important for you to understand what is going on. Don’t rush with the code review, try to understand what is going on, add your remarks and ask agents to rewrite code you don’t like. What I really liked when working on my app was the ability to easily change direction. I wanted to add a new feature which required a change in database schema, I did the first iteration and didn’t like the overall impact of this change to readability of code. So, I simply asked agents to get back to base state and try once again with a different approach. No sad faces, no complaining that this needs to be rewritten. 

If agents tend to use solutions which you don’t like, use system prompt files like cursor.md/agents.md to pass you general intentions about code quality, test best practices. These files are super important, this is a team asset to hone nad polish.


## Intensity on the different level

On the other side of this one, AI assisted coding is much more intense than usual coding sessions. As a developer you start your day with a task, trying to figure out what to do, how to implement a solution for a problem in a task. Then you start implementing (with AI), and the solution is ready. Next steps would be code review, testing and after half of day (in best scenario) you have a solution. In case of agentic coding this can be much more intense, code/tests generate blazingly fast, so it is tempting to start two or three tasks in parallel. Result - context switches, a lot of code to read. I did my experiments with overseering two paralel agents coding two things in my app, it was a very intense experience. People now experimenting (or just doing) with agents overseering agents, imho it is the only reasonable way to keep up with this intensity. 
