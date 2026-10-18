---
title: "CID Tutorial 1"
date: 2026-10-03
category: causality
series: "Causality and ML"
description: "A causal influence diagram for the oil wildcatter problem, and its optimal decisions."
---

# Introduction

Let us look at an example problem involving a causal influence diagram. The problem is about an oil widlcatter. I think that this is a popular use-case/scenario in decision sciences. The decision to drill is a high risk and a highly rewarding if successful. The problem has been studied previously in publications such as Shachter et al., 2013 (https://arxiv.org/pdf/1304.3108) and Raiffa 1968 (Decision Analysis: Introductory Lectures on Choices under Uncertainty).
Wildcatters are known as the popele who drills wildcat wells, which is a hugely risky venture but gives an advantage over others, if succeed.

<figure>
<img src="{{ '/assets/images/wildcat-well.png' | relative_url }}" alt="A drilling crew working on the rig floor of an oil well">
<figcaption>Figure 1. A drilling crew at work on the rig floor, 1944. Image source: <a href="https://www.sciencedirect.com/topics/engineering/wildcat-wells">“Wildcat Wells”, ScienceDirect Topics, Elsevier</a> (accessed 18 Oct 2026).</figcaption>
</figure>

# Problem Setup

The wildcatter must make a decision to drill (or not) a particular location for oil. There is a test result that provides some information about the presence of oil. However, the test result can be 10% wrong. There is also the chance that oil will not be there at all (60%). The cost of the test is 10 (xe6, USD. For ease, 10 units). If they drill, the reward of finding oil is 100 units, and the loss is -40 units if they do not find it. There is no reward for not drilling (except for the cost of the test that they decide to do the it and do nothing afterward).
The test can also be decided to taken or not (considering its cost). The decision to drill is based on the knowledge that the test was done or not ('sufficient recall').

{% include fig-cid-wildcatter.html %}

# The optimal decisions

Let us first calculate the expected utilities of drill/not drill for the scenario where they decide to do the test and it comes back as positive (oil present) (T=1, R=1).
In order to compar the expected utilitites, it is sufficient to compare only the joint probabilities of events. Because, 
$$P(w \mid Pa(D))=P(w,Pa(D))/P(Pa(D))$$. We would try to find the conditional probabilities of $$w$$ (the unobserved world) given the available information for the decisions ($$Pa(D)$$. Here, it would be the situation where we calculate the possibility of oil being actually present, based on the test results. When we compute these for each decision at our decision node (here, drill or not drill) the normalizing $$P(Pa(D))$$ will be similar, which can be ignored for *comparison*. However, to calculate the actual utilites the normalizing step must be done.

$$
\begin{aligned}
E(U\_drill) &= 100*0.9*0.4+(-40)*0.1*0.6=33.6 \\
E(U\_not\_drill) &= 0
\end{aligned}
$$

Now, if T=1, R=0 (test returns negative),

$$
\begin{aligned}
E(U\_drill) &= (-40)*0.9*0.6+100*0.1*0.4=-17.6 \\
E(U\_not\_drill) &= 0
\end{aligned}
$$


Here, regardless of the decision, there is always the cost of the test (-10). We can also ignore it as it is common for every decision.
Comparing these unnormalized utilities, it seems that it is the best to *trust the test result always*.



