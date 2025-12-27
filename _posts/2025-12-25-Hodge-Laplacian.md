---
layout: default
title: "Hodge Laplacian Operator"
permalink: /Hodge-Laplacian-Operator/
---

# Introduction 
The Hodge-Laplacian (HL) operator is a generalization of the node (graph) Laplacian operator. Below are some key ideas related to the HL operator.

## Simplices
Simplices are the structural building blocks of a graph. A 0-dimensional simplex is a node, and a 1-dimensional simplex is an edge connecting two nodes.

## Boundary operators on a graph
Boundary operators take two simplices as the inputs, and represent a relationship between those two simplices (e.g., a node and an edge). Let us denote boundary operators by $B_k$. Here, $k=1$ would mean that it would take a max dimension of 1 for one of the input simplices (an edge). The other would be 0 dimensional (a node). The $B_1$ operator on vertex $i$ and an edge $e$ would look like below,

$$
(B_1)_{i,e} =
\begin{cases}
1 & \text{if } i \text{ is the tail of edge } e \\
-1 & \text{if } i \text{ is the head of edge } e \\
0 & \text{otherwise}
\end{cases}
$$

Applying a boundary operator on a node signal (feature) would return 

## Graph Laplacians
Graph Laplacian or node Laplacian (unnormalized) ($L$) is known as $L=D-A$. $L$ is taken as the difference of the degree matrix $D$ and the adjacency matrix $A$. It can also be observed that $L=B_1B_1^T$. The graph Laplacian operator can be understood as an operator that filters (specifically, a low-pass filter) that operates on the node level, and smooth the node level signals (representations) throughout the graph.

# Hodge Laplacian
Hodge Laplacian is a 'higher-order generalization' of graph laplcian [1]. While the node Laplacian operates at the node level, the Hodge Laplacian operates at edge level and beyond.

## HL operator
HL operator is also a type of Laplacian operator. It is formally defined as $\mathcal{L}_k=B_{k+1}B_{k+1}^T+B_k^TB_k$. When $k=0$, $\mathcal{L_0}$ becomes the node Laplacian operator that operates on node signals. When $k=1$, HL becomes an operator at edge level and the triangle (2-dimensional simplices) level. While the node Laplacian operates on node signals (or nodes), the HL operator works at higher levels structures such as edges, or triangles and their signals. In other words, HL operators can act on more complex graph structural relationships (in general) such as node-edge, edge-edge or edge-triangle relationships while the node Laplacian is limited to node-node level.

## References
[1] - Hodge Laplacians on Graphs, Lek-Heng Lim, https://www.stat.uchicago.edu/~lekheng/work/psapm.pdf