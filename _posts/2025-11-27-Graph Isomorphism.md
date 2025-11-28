---
layout: default
title: "Graph Isomporhism in GNNs"
permalink: /Graph-Isomorphism/
---

# The curious case of graph isomorphism

Isomorphism of graphs denotes that there can be different permutations of graphs (i.e.- node arrangements) that are similar (equivalent, more precisely). In other terms isomorphic graphs are the same but drawn differently. Hence, such graphs would have some invariant properties such as - no. of nodes, no. of edges, node degree.
Canonization of graphs (or, getting the canonical form of graphs, $Canon(G)$) helps identify such isomorphisms and find equivalent graphs. From a very high-level, $Canon(G)$ assigns a labeling on the vertices of graphs. Graphs belonging to a particular isomorphism class (all graphs are just permutations of each other) would only have one unique label assignment. 
$Canon(G)$ provides a "complete, graph invariant" representation. This simply means that ensuring the canonical forms are the same, it can be guaranteed that two (or more) graphs are equivalent/isomorphic. 
However, the complexity of $Canon(G)$ is still unknown! Hence, the same issue applies to graph isomorphism problem as well. $Canon(G)$ can be more difficult to solve than graph isomorphism problem (i.e., canonization aims to find a representation that fits an entire isomorphism class while graph isomorphism only looks to find the equivalency of two or more (countable) graphs). Heuristic tests such as Weisfeiler-Lehman (WL) test intend to solve the graph isomporphism proble,

# WL Test

WL test is based on color refinement [1]. Nodes in a graph are assigned a color. The nodes then aggregate its own color and neighbors' colors throughout multiple iterations until a stable color assigment is reached. Stability is achieved when color assignment no longer changes. Two graphs are said to be isomorphic if; $WL(G_1)=WL(G_2)$.
Several variants of WL test exist [1]. The earliest variant - 1WL can fail on certain examples such as regular graphs. Later variants such as folklore-WL succeeds in such cases [1]. However, WL test can only involve a limited number of neighboring nodes at a time (even the variants) which might have made it a weaker canonization method.

# Isomporphism in GNNs

The ability to identify the isomorphism provides a good representation learning power to graph neural networks. A GNN ($f_\theta$) should behave; 

$$
f_\theta(G_1)=f_\theta(G_2) if
WL(G_1)=WL(G_2)
$$

If this happens, it also means that $G_1$ and $G_2$ are equivalent. Coming from graph isomporphism and canonical forms, we know that only two isomorphic graphs can have the same canonical (or the weaker WL) representation. If the GNN can behave like a WL test, this means that different graphs (equivalent or not) can be identified correctly. In other words, such a GNN would learn meaningful embeddings of graphs. Graph Isomorphism Network (GIN) is an example of a GNN that has this capability.

## References

[1]-A SHORT TUTORIAL ON THE WEISFEILER-LEHMAN TEST AND ITS VARIANTS, Huang and Villar, 2022 (https://arxiv.org/pdf/2201.07083).