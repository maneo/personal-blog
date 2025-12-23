---
layout: post
title: Let's play - the only ML talk you need
---



https://youtu.be/kU5oVdEBcjA?si=OuzBptsTG53Qd7Am


https://youtu.be/XDMNm7PQpxk?si=tDaVttfqXfR_AcvM

https://youtu.be/3zOv3kFWnYc?si=0AIUWOoqUrZNULBf



Excellent question. The highlights from this presentation are **extremely relevant** today, perhaps even more so, because they serve as a perfect allegory for the challenges developers face when moving from traditional software to building with Generative AI and Large Language Models (LLMs).

Knowledge of machine learning fundamentals is not just relevant; it's becoming **essential** to move beyond simple API calls and build robust, reliable, and cost-effective AI-powered applications.

Here’s a breakdown of how each highlight from the presentation translates directly to the world of LLMs:

---

### How the Presentation's Highlights Apply to Generative AI and LLMs

#### 1. Problem Representation is Everything
*   **In the Presentation:** The speaker's initial failure was due to a poor representation of the game state. He manually engineered numerical features (positions, speeds) that didn't capture the essential patterns for a simple model to learn from.
*   **In the World of LLMs:** The "problem representation" is now primarily **prompt engineering** and the **context** you provide.
    *   A poorly designed prompt is the new "bad feature engineering." It gives the model confusing or incomplete instructions, leading to poor or unpredictable results.
    *   **Retrieval-Augmented Generation (RAG)** is a form of advanced problem representation. Instead of just a prompt, you are representing the problem by providing relevant documents as context. If you retrieve irrelevant documents, the LLM will generate a poor answer, just as the speaker's model failed with bad features.
    *   **Fine-tuning data** is another form of representation. The format, quality, and style of your examples directly shape the model's behavior.

The core principle is identical: You must frame the problem in a way the model can understand and act upon effectively.

#### 2. Offline Metrics Can Be Deceiving
*   **In the Presentation:** The model achieved 71-78% accuracy on a test set, which looked promising. However, in the actual game (the "production" environment), it was useless and performed worse than a random agent.
*   **In the World of LLMs:** This is one of the biggest challenges today.
    *   Automated metrics like BLEU or ROUGE scores can show that a model's output is syntactically similar to a reference text, but they can't tell you if the model is **hallucinating** (making things up), being rude, or missing the user's true intent.
    *   The ultimate test for an LLM application is **human feedback and user satisfaction**. Does the AI-powered chatbot actually solve the customer's problem? Does the code generator produce code that runs? This is the "live" test that matters, and it often reveals weaknesses that offline metrics miss.

#### 3. Establish a Simple Baseline
*   **In the Presentation:** The speaker’s machine learning models were worse than a simple random agent. This baseline immediately proved his initial approach was flawed and needed a complete rethink.
*   **In the World of LLMs:** This principle saves developers huge amounts of time and money.
    *   Your first baseline should be a **simple, zero-shot prompt** to a powerful, general-purpose model (like GPT-4o or Claude 3 Opus).
    *   Before you build a complex RAG system or spend weeks preparing a fine-tuning dataset, you must confirm that a simple prompt can't already achieve 80% of what you need.
    *   Other baselines include comparing a state-of-the-art model against a smaller, open-source model to see if the extra cost is justified.

#### 4. Avoid Premature Optimization
*   **In the Presentation:** The speaker immediately jumped to more complex models and feature representations without first ensuring his fundamental approach was sound.
*   **In the World of LLMs:** The classic example of premature optimization is **jumping straight to fine-tuning**.
    *   Many teams assume they need to fine-tune a model for their specific task from day one. In reality, the vast majority of use cases can be solved far more effectively and cheaply through advanced prompt engineering and RAG.
    *   The correct, iterative approach is:
        1.  Start with **Prompt Engineering**.
        2.  If that's not enough, move to **RAG**.
        3.  Only if RAG fails or you need a very specific *style/format* that context can't provide, should you consider **fine-tuning**.

---

### How Relevant is Knowledge of Machine Learning Fundamentals?

It is **critically important**. While you can get started with LLMs by treating them as a black-box API, you will hit a wall very quickly when you need to debug, improve, or optimize your application.

Here’s why the fundamentals matter:

1.  **Understanding Overfitting and Underfitting:** The speaker's Logistic Regression model was **underfitting**—it was too simple to capture the complexity of the game. A Random Forest model that memorizes training data is **overfitting**. When you fine-tune an LLM, you are facing the exact same risks. If you only train it on a small, repetitive dataset, it will overfit and fail to generalize to new, unseen prompts.

2.  **"Garbage In, Garbage Out":** This is the oldest rule in ML. The speaker's initial training data (his own gameplay) was not good enough to teach an optimal strategy. For LLMs, this applies directly to RAG and fine-tuning. If your knowledge base for RAG is inaccurate or your fine-tuning examples are low-quality, your model will confidently generate incorrect or unhelpful responses.

3.  **The Importance of Evaluation:** Knowing about metrics like accuracy, precision, and recall helps you think critically about how to measure success. While human evaluation is key for LLMs, you can design better evaluation systems by understanding what you are trying to measure—is it factual correctness (precision) or covering all relevant points (recall)?

4.  **Bias and Fairness:** Understanding that models learn statistical patterns from their training data is fundamental to recognizing that LLMs will inherit and amplify biases present in the vast amounts of text they were trained on.

In conclusion, the core principles of iterative development, data-centricity, and rigorous evaluation highlighted in this 2019 presentation are timeless. While the specific algorithms have evolved into massive transformer models, the fundamental challenges of translating a real-world problem into a format a machine can learn from remain exactly the same.

----------------------------


Of course. Here is a summary of the presentation and the most important outcomes for someone interested in classic machine learning.

Summary of the Presentation

The speaker, Adam Dudczak, presents an educational project where he attempts to teach a computer to play a simple spaceship shooter game called "Shmup." He frames this journey as "the only ML presentation you will ever need" because it covers many fundamental challenges and lessons encountered in real-world machine learning projects.

First Approach (Supervised Learning): The initial strategy was to treat the problem as a classic supervised learning task. He recorded his own gameplay to create a training dataset, where the "features" were numerical representations of the game state (player position, asteroid positions, distances, speeds) and the "label" was the action he took (move left, right, fire, etc.).

Initial Failure: Despite trying simple models like Logistic Regression and more complex ones like Random Forest, this approach failed spectacularly. The trained AI performed worse than a simple random agent, often just getting stuck in a corner. This happened even though the offline training accuracy seemed reasonable (around 70-80%).

Second Approach (Evolutionary Algorithms & Reinforcement Learning): Realizing the initial approach was flawed, he shifted to methods that allow the agent to discover the optimal strategy on its own, rather than just mimicking a human. He successfully used an evolutionary algorithm that evolved a sequence of moves over many generations, eventually finding the optimal strategy for this simple game: sweeping from side to side while constantly firing.

The presentation concludes that building an ML model is an iterative process of experimentation. The key is not just the model itself, but how you represent the problem, gather data, and define success.

Most Important Outcomes for Classic Machine Learning

For someone interested in classic (non-deep reinforcement) machine learning, the failures of the speaker's first approach provide the most valuable lessons.

Here are the key highlights:

Problem Representation is Everything: The single most important takeaway is that how you define your features is critical. The speaker's initial attempt to manually create numerical features (player_x, mob_x, dist_x, etc.) failed because this representation did not capture the dynamic nature of the game. A simple model couldn't find a useful pattern in this data.

Lesson: Your model is only as good as your data and features. Feature engineering is often more important than the choice of algorithm.

Offline Metrics Can Be Deceiving: The model had an evaluation accuracy of 71%, which might seem promising on paper. However, when deployed in the actual game, its performance was terrible. This demonstrates the gap that can exist between offline evaluation and real-world performance.

Lesson: Always test your model "in production" or in an environment that closely simulates it. The metric you optimize for (e.g., accuracy) must align with the actual goal (e.g., game score or survival time).

Establish a Simple Baseline: The speaker's sophisticated models were outperformed by a simple "random" agent. This comparison immediately showed that the ML approach was fundamentally flawed.

Lesson: Before building complex models, always create a simple, non-ML baseline (like a random choice or a simple heuristic). If your model can't beat the baseline, you need to rethink your approach.

Avoid Premature Optimization: The speaker tried increasing the complexity of his model and state representation (e.g., adding the previous game state as a feature) before having a working baseline. This did not solve the core issue.

Lesson: As the speaker quotes, "Premature optimization is the root of all ML evil." Start with the simplest possible representation and model that could work, and only add complexity once you have a functioning foundation.

------------- entire transcript --------------------


Of course, here's a transcript of the video.

"Okay, I guess we can start.

1, 2, 3. Hello. Uh good morning, everyone. Thank you for choosing this session.

Um my name is Adam Dudczak. I will tell you a bit about my small educational project, project, uh during which I was teaching computers to play games. As you know, programmers are lazy and this is the ultimate uh laziness. So, I want computers to play uh in games for me, so I don't have to. And the subtitle here is the only ML machine learning presentation you will ever need. Why such a bold statement? You will see in a minute while listening about my ups and downs that uh teaching computers to play games is a really nice uh way to practice your ML skills. And during this, during the working on a particular game, which we can treat as a problem, you might encounter uh problems which are quite common when you start dealing with the uh machine learning problems. Uh I encourage you all also to uh read more after this presentation so I will not cover everything. Nevertheless, I hope that you will find this interesting.

So, we want to teach computer to play games, the games as you see in the background. Uh but before that, a few words about me. I work at Allegro. Allegro is a e-commerce, the biggest e-commerce site in Poland. Uh I'm involved in Java related projects since quite a while and also doing Python a bit, especially in the area of data science. On my daily basis, I am responsible for the Allegro search engine. Uh and search engine in which we are using machine learning every day. Uh I was also and I am still a bit involved in Poznan Java user group and also in this small humble conference. So, let's go, where to start? We want to teach computer to play a game. So, we need to have a game. Uh how to get such a game in which programming language should we program this? Uh in terms of data science, the answer is quite simple. Uh as the uh Python is a lingua franca of data science and most of the new frameworks are developed with Python bindings or in Python itself, uh this is no brainer. We will do that in Python. Uh so if we are doing the whole thing in Python, maybe we will also find a game written in Python to hack it to plug our uh our machine learning or artificial intelligence in that game. So, while I was looking for the game which would be suitable to do that, I came across Pygame which is a pretty robust and battle-tested if you can say that for the game library, uh library which allows you to write simple arcade platform games easily. So, it is not um it deals with all the scaffolding, all the boilerplate code for you. So, you can write a nice game in a 100 something lines of code.

So, as a subject of my project, I decided to use a game called Shmup, which was the part of a tutorial for kids in which the children were taught how to uh to write games. So, a bit of a source code since this is a technical conference and source code looks awesome on the cinema screen, so I I was tempted to show you that. And you see here how Pygame what Pygame gives to us. So, the whole thing related to loading assets, converting them to particular resolution, to managing the game window, to deal with the physics, all this is already in. So, after the few lines of initialization, we have the core of a game, so the main loop. And as you see, this is not a very complicated code. We can easily plug in here our own things. So, what do you see here? We are running infinite loop which runs as long as the ship is not hit by an asteroid. Uh we are updating the whole graph, we are listening for the user's action for the key keyboard events. Uh we are updating the whole thing, detecting collisions, uh rendering the view and displaying the whole thing on the game window. Simple as that. So, let's go with the uh actual artificial intelligence. Let's go with machine learning. And since machine learning is all about data, what kind of data do we need to do that to to play this game? Let's see what we have on our hands. What is available. So, this is the game screen, you see the the coordinates, uh nothing nothing complicated also in here. We have the position of a ship. Uh we have a fixed size window. We have eight asteroids, this is also fixed value and our spaceship can move left, right. So, the game is quite simple, good to start with. We can also calculate the distance from the asteroids, we have its position, we have its speed, that also sounds like a relevant data and we have the position and speed of our laser beams. This all might be relevant, but let's start with something which is intuitive and simple.

Uh let's take as a our game state representation, let's take the position of the player, of the spaceship and its speed, uh and also let's put there information related to position of the asteroids. So, all this, I think it's a good representation to start with. And this should give us as an output a vector of numbers for every frame of a game. So, and what do we what do what do we want on the output? We want to decide which action to do, uh whether we should move left to right, whether we should shoot or do nothing. So, there are six possible values here and we want to predict which one is the best on top of the information which are in the game state. So, vector of numbers and the label, the class which we should assign to this vector in the end. So, this sounds like a classical supervised learning problem, classification. Those of you who had a some kind of uh machine learning uh activities at the university will know that as a classic problem, classic it also has classic solutions. So, let's start to model a bit.

And in order to do that, we need to get training data. Uh so, we need to get data which would show the algorithm how it should play. In order to do that, we will simply play that game and during our gameplay, we will save the information about the state and the action which was done by the by the player, by the person who is playing that game. So, this is also not a very complicated code. Uh you see here two other objects which are in the source code of the game. So, we have our spaceship which is player. We have our asteroid and we are adding I I I've add methods which allows us to track informations relevant for the game state. So, we can hook that in the main game loop. So, dump as vector is the actual thing and it also prints thing on the standard output. I also started to count uh asteroids which was hit to get the score from the particular gameplay. So, also nothing nothing very sophisticated here. So, we can save those data into some kind of database but standard output sounds like a decent database in this particular problem. So, I was just saving this to the log file while playing all those data were printed out and saved to the log file. So, you see here the vector of numbers. So, the game state at the first numbers, the last number is the actual action which was performed. And we have data, so everything should be fine. In terms of machine learning, machine learning is about data.

So, we have a game state, we have a representation of our problem, we have training data. Let's create a model. I've done this in the Jupiter notebook, it's a pretty neat tool, and I was prototyping with uh scikit-learn which is also uh quite well-known, well-documented library in Python which allows you to create and play with most of the machine learning algorithms. So, here I will loading the data from CSV file. As you see here at the bottom, we have 760 observations. So, it's not the I wouldn't call that big data. Nevertheless, it's good to start with. And let's go and create a model. So, in the first line here, you see how we are splitting our data into the training and test set. Uh we need the training and the test set to validate how our model performs on the observation which was not seen during the training. And I will use in this in this first approach, I use the logistic regression, which is simplest possible classifier and the whole training is the classifier.fit. So, it's not a very sophisticated thing also. Then we are evaluating the model and the classical measure used to evaluate the how classification is, is the accuracy. So, on the training set, we have 78% and on the test set, we have 71%. Is that good or is that bad, to be honest, I don't know.

I will show you in a minute why. Uh then we are dumping, we are saving the whole model to the file to use it afterwards in our game. So, we have a model, we have our baseline, the simplest model which we could have with our representation. So, the only thing which left to do is to plug that model into the game. So, this is also not a very sophisticated code. I've copied the source code of the game, so I have another version of the game which was uh played by the artificial intelligence agent. So, I am getting up the serialized model from file and I have a method which predicts the action on top of the game state. This is also plugged in to the main game loop instead of listening for the events from the keyboard. So, simple as that. Look at that. What's the hostile artificial intelligence or nightmare come true? It shoots as hell.

But not so fast. This hostile, aggressive artificial intelligence is random agent. So, it just takes one random number from this possible range of one to five and it scores 27 in 10 games. So, it's a pretty good strategy to move a bit and shoot a lot. And if this game can be played poorly, logistic regression plays it poorly. As you see, this is our artificial intelligence. So, we can sleep without our nightmares about the artificial intelligence ruling the world. A random forest is also not the future Skynet, at least in in in this case. So, let's let's let's try something different. Uh and before we go further, I wanted to tell you a bit about things which we observe here. So, in machine learning, there are two terms, underfitting and overfitting and good model is something between those two.

So, we want uh when we are dealing with underfitting, we are having a very poor uh predictions or classifications on the test set, which is a clue that this model is too simple to handle particular problem. And on the other side of it, we have overfitting which can be compared to the student who had who knows the answers for the questions from the previous edition of an exam and if the lecturer decides to use the same question, he will perform great. Uh nevertheless, if the lecturer decides to give different questions, the student doesn't have general knowledge to solve those puzzles and most likely he will fail. So, on the training set, we have a good good accuracy, for example, and on the test set, we have poor scores. And as I said, decision trees tend to overfit a lot. You need to be very uh careful when dealing with them uh to not overfit. And there are solutions for that. And we will come to that in a minute. So, just to conclude this first portions of problems.

So, in case of this particular representation, simple models are not enough for this representation and it's not the best idea when we don't have any working solution. So, if you think about this, we have 40-50 long values in this vector. So, this gives quite a significant problem space to reason about. And to handle such a huge space, we need a lot of observations and this might not be the good idea when we don't have a when we are not sure if this representation gives all the information. So, exactly the same as with everything in life, premature optimization is the root of a lot of evil. So, be be aware of that. So, let's get more data. Since machine learning is about data, as I said, we might have too few data and let's extend our representation of the problem.

So, when we are playing in the game, we are taking an action on top of that what we see and what we have done in the past. So, adding a memory to store information about previous game state might be a good experiment to to bet on. And here is how this representation performs. So, XGB classifier is the boosting uh strategy implementation and MLP classifier is a neural network, deep neural network, so several layers and logistic regression is logistic regression. So, you would say that logistic regression shines here, so giving more data helped. No, in fact it didn't. Uh so the spaceship stands on the center of the screen and shoots all the time. And so this might be our second baseline. So, we want to compare we want to perform better than random and better than this kind of simple strategy.

So, I have no idea what I'm doing. So, to summarize machine learning consists of many tools, many stages and on each stage you can do a harm to yourself. So, problem representation, how we phrase the problem which we want to solve is important. Then the data which we are taken to solve this problem is also important. Uh then we need to get training data, decent amount of the training data and this depends from the model which we are using. Most or maybe not most, I am I'm not able to say that, but there are a lot uh well performing linear simple models. For example, in adtech, the linear regression which is the simplest tool to predict the value, are used heavily. They are fast, they are easy to train and they solve this particular problem which they have. They are able to deal with a lot of data and they are able to predict very quickly. So, choosing the model is the second thing. And the whole thing is rather a a set of an experiments to do not the not the there's usually not only one possible best universal solution. You need to you need to experiment quite a bit. And if you have a working solution, you can tune the hyperparameters because all those models has a lot of different knobs which you can play with and change for example the learning rate, change the number of features, uh change the number of layers and so on and so forth. And finally, the whole thing does not requires to be tested in production. So, as you saw the spaceship, on the paper, the result looks good and when we are putting this into production, the spaceship is doing weird things like with this logistic regression staying in the center of the screen and shooting all the time. So, the whole thing was quite funny, quite interesting and I will continue that.

Uh nevertheless, the whole machine learning thing requires a lot of patience because uh models which we are, for example, using in production, train for quite a while and working with such a long feedback loop is far from being comfortable. So, all the examples, all the source code, how I uh hacked the shop is available here on my GitHub. Uh go and take a look if you are interested in this kind of experiments and there are multiple games with open source code available in the internet. And if you are looking for the problem to solve, to train your machine learning skills, I think that this is a really neat case to solve. I was brought into the coding because I wanted to create games and this is, I guess, uh also a case in here. So, uh I think that it's worth to explore if you are interested in AI related topics. So, if you have any questions, we have time for them.

Let's take a look. No, I I didn't try to limit the number of uh laser shots which the ship can take. It will be also a very nice constraint to introduce here. Maybe I will do it uh in the future. And that's why I cannot compare this to the human solution. The the the closest comparison is this optimal strategy which I show you in the middle, so going from left to right. It scored around 300 points and this is very close to the score which you would have in that game. So, if no other questions, thank you very much. I am here available to talk and once again, thank you for coming to this session.