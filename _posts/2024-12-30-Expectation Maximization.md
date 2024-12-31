---
layout: default
permalink: /Expectation-Maximization/
---
# Expectation Maximization
There are enough tutorials,guides, and lectures about expectation maximization (EM) on the internet. This will be yet another, but a short write-up on EM, based on my understanding of the algorithm. An example code with 1D, Mixture of Gaussians is available of my [Github](https://github.com/VinuraD/gen_modeling).

## What and Why?
An algorithm that helps us to find parameters of a probability distribution/density of a given dataset (A maximum likelihood estimation problem). This reminds us a very similar algorithm; Ordinary Least Squares. There, we obtain a set of parameters (e.g.- $\alpha$ an $\beta$ in $Y=\alpha X+\beta$) by minimizing the sum of squares of errors. However, this kind of an approach can be challenging if we have a latent variable.
Suppose our data ($X$) is governed by a hidden (latent variable). For an example, let us our data is about the height of people between Age 20-25 in a country. We have collected a random (IID) sample of height measurements (only heights, 120cm, 110cm, ...) and we need to know the probability density parameters for the probability distribution of heights. The height can be depend on the unobserved factor such as gender, or something else. It is true that, we can neglect such hidden variables and obtain population estimates ($\mu$,$\sigma$) from this sample. But, suppose we want to know a clearer picture of the parameters assuming that a hidden variable is present. We can say that the probability (or the likelihood) of heights comes from taking the marginal distribution of $Z$ from the conditional probability distribution of $X$ over the hidden variable $Z$. 

$P(X;\theta) = \Sigma_z P(X|Z;\theta)$

We would like to find $\theta$ that maximizes $P(X;\theta)$ but we do not know $P(X|Z;\theta)$. The EM algorithm provides us with an approximation (lower bound) to $P(X)$ in this case, which is also known as the Evidence Lower Bound (ELBO). If we maximize the lower bound as much as possible, we can achieve the (near) optimum $\theta$. The EM algorithm does this in two steps (E and M). In the E (Expectation) step, we calculate the $P(Z|X;\theta)$ probability (also known as the posterior probability). We use a random initialization of $\theta$. In the Maximization (M) step, we try to maximize ELBO with respect to the parameters $\theta$ that we need to know (e.g.- $\mu,\sigma$). Note that, if we had not start with a random initialization of $\theta$, this would have been a chicken-egg problem. 

## With Mixture of Gaussians

A common way to demonstrate the EM algorithm is with a mixture of Gaussians. Here, we have a data (most probably from a different Gaussians). We assume that the data comes from a mixture of Gaussians and try to estimate the parameters for each component in the mixture. The parameters that we are interested in are $\pi_i,\mu_i,\sigma_i$, where $i=1,...,K$.
At E step we would calculate $P(Z|X;\theta)$ by simply using the formula of normal distribution.
$X \in \mathcal(R^n)\\$
$P(z_i|X) = \pi_i*norm(X,\mu_i,\sigma_i)$

At M step, we have analytical formulas where we can calculate $\mu_i,\sigma_i$ and $\pi_i.\\$
* $\mu_i=\frac{z_i.X}{\Sigma z_i}, z_i \in \mathcal(R^{n})\\$
* $\sigma_i$ can be obtained by the sample variance formula.
$\sigma_i = \frac{z_i*(X-\mu_i)^T(X-\mu_i)}{\Sigma z_i}\\$
* $\pi_i=\frac{\Sigma z_i}{n}$  

We then repeat E and M steps until we reach a convergence,which can be measured by the log-likelihood value ($log(P(X;\theta))$) or the parameter values, when they do not improve much (e.g.- based on a predefined threshold)

The original EM algorithm dates back to 1977 [1], but there have been many variants of it [2]. A rather popular one in [2], proposes an incremental version of EM algorithm. 

References:

- [1] - Maximum Likelihood from Incomplete Data via the EM Algorithm. Dempster, Laird, and Rubin (1977)
- [2] - A view of the EM Algorithm that justifies incremental, sparse and other variants. Neal and Hinton (1998)
- [3] - https://towardsdatascience.com/implement-expectation-maximization-em-algorithm-in-python-from-scratch-f1278d1b9137

