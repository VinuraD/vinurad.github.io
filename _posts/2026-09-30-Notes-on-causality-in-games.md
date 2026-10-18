---
title: "Notes on causality in games"
date: 2026-09-30
category: causality
series: "Causality and ML"
description: ""
---

# Introduction
This is an evolving note, primarily based on the work ["Reasoning about causality in games (Hammond et al.)"](https://www.sciencedirect.com/science/article/pii/S0004370223000656?via%3Dihub).

# Key points

The parts up until section 2.2 describes the problem and an introduction to Structural Causal Models (SCM) and Pearl's hierarchy of causality.

## MAIDs

An ID (Influence Diagram) generalizes a BN by introducing decision and utility variables. A MAID (Multi Agent ID) extends it to a scenario with multiple agents. At the core, this captures an EFG in a more compact way (the branches in EFG captured in the nodes and their associated CPDs). There are chance nodes, decision nodes and utility nodes.  The decision nodes describe decisions (or actions) made by agents, either as deterministic rules or stochastic rules. A decision rule is denoted as a CPD (below),

$$
\pi_D(D|Pa_D)
$$

A Nash Equilibrium describes the best response decision rule of an agent to those of other agents, and the parameters of the game (chance variables).

# s-relevance and s-reacheabiliy
s=strategically. s-relevance tells if a particular decision rule impact another decision rule, i.e- changing one gives incentive to change the other or strategically relevant. s-reacheability tests if a 
This has a similar notion to d-connectedness in causal graphs.


# Mechanized MAIDs

1. Call $V$ the variables (nodes) in MAIDs. Mechanized MAIDS (MMAIDs) add a new variable set $M$, and $m_v in M$ are parents of each $v \in V$ (where necessary).
2. Each $m_v$ is either a decision rule variable $\Pi_D$ or a parameter variable $\Theta_V$.
3. A mechanized graph $\mathcal mG$ is simply the MAID plus $m_v$ and extra edges from $M_V \to V$ and edges within $m_v$ ($E'$, not self loops, but may have cycles).
4. The decision rule variables are policies that determine the actions (decisions) at the decision nodes (or the probability distribution of them). For example, a policy tells to always take a particular decision if some condition is met.

$$
P(d|pa_D,\Pi_D=\pi_D)=\pi_D(d|pa_D)
$$

With this addition, we can intervene over the CPDs of the decision variables, unlike the given CPDs in MAIDs.
5. The mechanisms that sets utilities and the chance are parameters; $dom(U) \in \mathbb R$.

The addition of new variables now allow to model the changes of an agent's policy (how they pick decisions) and the impact of those changes to other agent's policies. For example, $\Pi_D=\\hat\pi_D$ can be a certain rule, where the agent 'always go regardless of their laziness' (the example EFG describes the chance variable parameterizing lazy/hardworking). 

# Independent MMAIDs

1. Denoted by $\mathcal m \perp G\$, removes all $E'$ edges. Mechanisms are independent (i.e. similar to non-requisite variables in BN).
2. Strategic play in games break this independence. Because in reality agents respond to the changes in mechanisms.

# Rationality relation

Described as a function $r_D(pa_{\Pi_D})$, describes the set of acceptable decision rules $\pi_D$   

# R-rational response and outcome

R-rational response is any $\pi_D \in r_D(pa_{\Pi_D})$. R-rational outcome describes a profile **$\pi$**, in which every $\pi_D$ is the rational response. 

# PyCID Examples

The repository https://github.com/causalincentives/pycid has implemented the MMAIDs and contains a few examples.