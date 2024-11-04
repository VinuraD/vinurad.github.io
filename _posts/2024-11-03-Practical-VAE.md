---
layout: default
permalink: /Practical-VAE/
---
# Introduction

Variational Auto-Encoders (VAE) gives a theoretically well-defined approach to find an approximated latent space distribution, conditioned on observed data ($P_{\phi}(z|x)$), and then use/manipulate that latent space to synthesize new data. However, it appears that synthesis of new data may not be practically easy with VAEs. In this post, I would like to summarize such difficulties mentioned in the literature, and focus on tabular data.

## Bane of VAEs

I list down different challenges faces by VAEs below, which are discussed in detail.

1.**Finding the balance between reconstruction loss and KL divergence may not be easy.**

The well-known ELBO gives us the addition of the reconstruction loss and the KL divergence (in fact, KL divergence can be replaced by other alternatives, but here I use the popular choice). KL divergence acts as a regularizer term that tries to bring the posterior term ($P_{\phi}(Z|X)$) as close as possible to a pre-determined prior ($P(Z)$). The reconstruction loss aims to ensure the generated data ($X'\sim P(X|Z)$) closely follows input data. With a glance at the ELBO equation we can see that, both KL-divergence and reconstructions loss are competing terms; they have opposite signs and try to minimize themselves. Hence, a balance should be achieved. Overly simplistic priors can be one of the underlying causes for this imbalance. 

2.**Posterior Collapse**

3. **Over-Pruning**


