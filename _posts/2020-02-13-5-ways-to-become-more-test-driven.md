---
layout: post
title:  "5 Ways to Become More Test-Driven"
date:   2020-02-13 18:01:48 -0200
---

Software development has been greatly influenced by Agile principles, which have shaped the way we develop software today. Unfortunately, most software development teams do not know how to build a process that benefits Agile principles. A proper development process that utilizes Agile principles would allow a team to have a professional way of working, ensure the production of high-quality software that adds value to the business and keeps the software developers motivated.

Many companies struggle with late releases, workload estimations, and quality issues. Most of these issues can be addressed by including quantitative indicators in the software development process. One of the key Agile principles is to build processes that add value. We can do so by measuring process steps that give feedback allowing us to monitor how we are progressing and tell valuable information on whether we are doing the right thing. It is much cheaper to spot mistakes early on and know if something is going to work or not instead of shipping the software to actual customers and losing your customer’s trust. Quantitative indicators in the software development process eventually add to the value of your software and thus greatly benefits your business.

To have something measured, you can conduct various tests. For example, when an ice cream company makes ice cream, they can have different key measurements that are conducted in different steps of the process. In the beginning, they measure proportions of lactose, casein and whey proteins in the milk mixture. If at this point, they see that something is not quite right, they can easily fix it by mixing the milk powder again. Next, they measure sugar density and refer to their R&D and past knowledge to determine if the sugar at hand qualifies. Again, the action for non-qualified sugar is easy: just do not use it. This is Agile; it allows you to go back and fix your production problems on-the-go. What would happen if the company would not monitor their process this way? They would just keep on producing ice cream and wonder why customers do not want to buy it. They would be pouring more money into marketing but their product just does not sell. They would be completely clueless of the core reasons while it is simply because their product is not of high quality -- and they do not even know it.

A Test-Driven mindset gives you tools to take advantage of the Agile’s iterative way of working and fix your mistakes before they pile up into bigger problems. Next, we are going through five concrete ideas that you can implement into your software development process to utilize the same advantages as the ice cream company was using.


## 1. Ask feedback from your clients

Since you are developing software for people to use, the first thing is to take the business logic specifications created from the customer use cases to your clients and ask them if it is something that brings value to them. You can collect feedback, fix your specification and come up with completely new use cases. It is easy to change your design and ideas at this stage since no implementation work has been done yet. This reduces the need for doing it later when it would be much harder and expensive.


## 2. Let developers to work against the specification

It is important that developers implement things that are needed. The most difficult part is to communicate specifications and business use cases to the developers and ensure that they do what needs to be done. Each developer makes many micro-decisions during implementation since it is difficult to capture all little nuances upfront. These micro-decisions eventually become part of the system since, without them, the implementation cannot be completed.

The key is to let developers test their implementation against the specification and alter it during the implementation. This way, the missing parts become apparent and micro-decisions are not something that developers just solved on their own and are not implemented into the code-base without properly documenting them. Of course, you can always go back to the first point above and ask your clients again if these altered specifications still bring value to them. It also provides you the opportunity to ask feedback from your clients on how these missing parts should be solved.


## 3. Prove that the implementation does what was intended

When the implementation confirms with the specification, it is important to check that the implementation does what the developers intended it to do. The idea is to check that the code does what developers think it does. This means that developers write tests to verify that functions, methods, and classes are called with expected parameters and that they call other procedures in an expected way. Later, when the code is changed, these tests can catch errors that would violate the way developers originally thought how the implementation works. Then the code changes can be revisited and justify the changes by altering the tests.


## 4. Add a continuous integration pipeline that checks every commit and acts as a quality gate

Instant feedback for developers during the implementation is valuable but equally valuable is to have an automated way for centrally checking that the development work integrates with the rest of the development work done at the same time. The pipeline can run all the test cases available and check if they are passing or not. If the tests are not passing, the development work cannot be integrated into the system.


## 5. When bugs occur, identify the root cause and add a test that reproduces the problem

All software has bugs. The amount of bugs is rarely a good measurement of software quality since it does not address the underlying issue -- that is, the reason why the bug has occurred in the first place. Instead, more valuable is to try to narrow down the scope of the bug by conducting tests at various levels to try to reproduce the bug. If the bug is in the specification, then it is not actually a bug; it is just a feature that the customer needs but it is not possible. In that case, the root cause is that it was missed in point one. Maybe you did not gather feedback from all kinds of businesses or maybe your customer’s needs have changed. It is important to constantly ask feedback from your clients after you have released new features. Clients may not know what they need so it is very crucial to be able to quickly change the specification and implement the needed changes into the code.

A bug is a mistake in implementation that is conflicting with the specification. That is, the implementation works differently than specification. It means that the case was identified correctly in point one, but it was implemented incorrectly even though developers tested their implementation against the specification (point two) and proved that the implementation does what was intended (point three). So, from the process point of view, the root cause of the bug is a communication problem or human error. The learning point is to go deeper and analyze the test cases and reasons why it was missed during the implementation. For example, it might just simply be that the developer had a typo in the code that was not spotted in his/her implementation test cases. Or it might be that your process is not really verifying the specification correctly since the developer cannot map it into the code directly.

Anyway, the most important part is to be able to reproduce the bug now and make sure that it does not occur again with tests, fix the issue and learn from the mistake and try to change your process in such a way that it does not allow for such mistakes to occur in the future.
