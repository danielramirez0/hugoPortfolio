---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
author: Daniel Ramirez
year: "{{ dateFormat "2006" .Date }}"
month: "{{ dateFormat "2006/01" .Date }}"
categories:
 - Personal
 - Thoughts
tags:
 - software
 - html
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua.

<!--more-->

Ut enim ad minim veniam, quis nostrud exercititation ullamo laboris nisi ut aliquip ex ea commodo consquat.
