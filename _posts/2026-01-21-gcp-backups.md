---
title: "GCP Backups"
date: 2026-01-21
category: misc-tech
topic: "Infrastructure"
description: "Imaging a running server and handling disk encryption keys on GCP."
redirect_from:
  - "/GCP-Backups/"
---

# GCP Backups

I wanted to get a backup of a server image that was already running.

GCP usually retains the backups. The default setting for disk encryption is using GCP owned keys. 

We can provide custom encryption keys and perform disk encryption with it.

Create the image and send it to a GCP bucket.

The image file can be downloaded from the GCP bucket.
