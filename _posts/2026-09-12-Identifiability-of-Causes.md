---
title: "Identifiability of Causes"
date: 2026-09-12
category: causality
series: "Causality and ML"
description: "How to identify causal effects from distributions"
---

# Introduction

This was written based on one of the exercises (problem 3.8) from the book "Elements of Causal Inference: Foundations and Learning Algorithms" by Jonas Peters, Dominik Janzing and Bernhard Scholkopf, which is a great read on the foundations of causal theory. The problem descirbes two random variables that can belong to one of two possible Structural Causal Models (SCM).

$$
\begin{aligned}
X &:= Y + N_X \\
Y &:= N_Y
\end{aligned}
\qquad \text{(SCM 1)}
$$

or,

$$
\begin{aligned}
X &:= M_X \\
Y &:= X + M_Y
\end{aligned}
\qquad \text{(SCM 2)}
$$

In each SCM, the parent and the child are different (the cause and the effect are reversed). Also, both SCMs have the exogeneous noise variables ($N_X, N_Y, M_X, M_Y$) following different Gaussian distributions (i.e.- different means and variances that are non zero). The problem is if we can identify which is the cause and effect, only using interventions. We do not know the nature of the noise distributions at all (i.e.- the parameter values are unknown).
To quickly state what an intervention is; we intervene on a desired random variable by changing its value. Theoretically, there are two main ways how this can be done (hard, soft). Here, hard interventions (directly setting a random variable to a specific, known value) matter.

# Solution

Below is one possible real world example. 

{% include fig-globes-xy.html %}

Suppose there are two electric light globes, which is connected to each other through some unknown circuitry. Their light intensity appears to be random, and we can measure it. Unknown to us, one globe's light intensity controls the other (we do not know which controls which). We only know that the control mechansim could be either one of the above SCMs. Also, we can manually set the intensity of a globe to a fixed value (an intervention). We cannot know (even my measuring) their original distributions, and only measure after an intervention. The goal is to find which one is the unknown mechansim. Note that, this example forces the mean values of the distributions to be positive as the light intensity must be some positive (or zero) value, but I believe the example works fine.
First, we shall set the intensity of Y to 2 (i.e.- $$\mathrm{do}(Y=2)$$, and the units are measured with some standard intensity unit). We would then measure the light intensity of X by taking many samples. If the mechanism follows SCM 1, X would show a different distribution than its original (unintervened on Y) distribution. If it follows SCM 2, then X will not change its original distribution. Unfortunately, we cannot still distinguish between the two scenarios as we do not have any knowledge what those different distributions should look like, as we do not know their original distributions. 

$$
\begin{aligned}
Y &:= 2 \\
X &:= 2 + N_X
\end{aligned}
\qquad \text{(SCM 1)}
$$

$$
\begin{aligned}
X &:= M_X \\
Y &:= 2
\end{aligned}
\qquad \text{(SCM 2)}
$$

In each of the above equations, the non-intervened variable $X$ still follows a normal distribution (mean shifted), which cannot be distinguished from each other as we do not know the original distribution parameters.
Now, let's do another intervention ($$\mathrm{do}(Y=3)$$). This time however, we can observe and measure a difference. In SCM 2, $X$ will still follow its original distribution, while SCM 1 will show a mean shift from the previous intervened distribution. 

$$
\begin{aligned}
P_{\text{SCM}_1}\big(X \mid \mathrm{do}(Y=3)\big) &\neq P_{\text{SCM}_1}\big(X \mid \mathrm{do}(Y=2)\big) \\
P_{\text{SCM}_2}\big(X \mid \mathrm{do}(Y=3)\big) &= P_{\text{SCM}_2}\big(X \mid \mathrm{do}(Y=2)\big)
\end{aligned}
$$

This is similar to an increase in the average light intensity in our example. Practically, this second intervention could be done as a drastic change of the value, so that the change is visible to the eye.