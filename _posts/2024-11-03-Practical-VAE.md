---
layout: default
permalink: /Practical-VAE/
---
# Introduction

Variational Auto-Encoders (VAE) gives a theoretically well-defined approach to find an approximated latent space distribution, conditioned on observed data ($P_{\phi}(z|x)$), and then use/manipulate that latent space to synthesize new data. However, it appears that synthesis of new data may not be practically easy with VAEs. In this post, I would like to summarize such difficulties mentioned in the literature, and focus on tabular data.

## Shortcomings of VAEs

I list down different challenges faces by VAEs below.

1.**Finding the balance between reconstruction loss and KL divergence may not be easy.**

The well-known ELBO gives us the addition of the reconstruction loss and the KL divergence (in fact, KL divergence can be replaced by other alternatives, but here I use the popular choice). KL divergence acts as a regularizer term that tries to bring the posterior term ($P_{\phi}(Z|X)$) as close as possible to a pre-determined prior ($P(Z)$). The reconstruction loss aims to ensure the generated data ($X'\sim P(X|Z)$) closely follows input data. With a glance at the ELBO equation we can see that, both KL-divergence and reconstructions loss are competing terms; they have opposite signs and try to minimize themselves. Hence, a balance should be achieved. Overly simplistic priors can be one of the underlying causes for this imbalance. 

2.**Posterior Collapse, the Hole Problem and overregularization****

The reason for combining multiple terms in the same title is that these three are inter-related and can point to the same issue. Posterior collapse is a better known issue in VAE literature where the posterior distribution gets decoupled from the latent variable. In other words, the decoder would consider the 
Also known as Over-Pruning or information preference property

When posterior does not exactly match the pre-assumed prior, it can be helpful sometimes; suppose the posterior equalls a isotropic Gaussian ($P(Z|X)\sim \mathcal{N}(0,1)$) which means that the posterior distribution has 'collapsed' to a simple distribution which no longer conditioned on $X$. However, it can be bad when we sample from ($P(Z)$) and the samples do not comply with the approximated posterior ($P(Z|X)$). This can be overcome by coupling the posterior with the prior, or aggregating the posterior [2]. Two types of approaches followed in the literature are; using more intricate priors, or using constrained optimization methods.

3.**Initialization matter**

A common property that can be observed in stochastic models. The weight initialization of VAEs can give different levels of downstream task performances. 

**References**





