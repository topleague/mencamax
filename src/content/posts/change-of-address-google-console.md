---
title: How to 301 Redirect http to https in Google Console
date: 2018-09-01
excerpt: If you want to switch to a new domain name, a very common practice is to
  use 301-redirection method via .htaccess file.
authorAvatar: https://susanta.com/wp-content/uploads/2026/08/Susanta-Profile-Pic-removebg-preview.png
layout: split
tags:
- seo
author: Susanta Sahoo
draft: false
---
If you want to switch to a new domain name, a very common practice is to [use 301-redirection method](https://susanta.com/301-redirect-wordpress-site-htaccess/) via .htaccess file.

The process is relatively simple and I have written [a guide on that](https://susanta.com/301-redirect-wordpress-site-htaccess/) as well.

Usually, the method is pretty straight forward if you’re permanently redirecting from an old HTTP domain to a new HTTP domain. However, if your old domain is non-secure and you’re 301-redirecting to a secure domain name, things might get a bit tricky, confusing and complicated.

Recently, I moved a non-secure old domain to a secure domain name and then encountered an error while complying to Change of Address (CoA) in Google Console.

The error message reads: “We couldn’t find any 301-redirect directives for your site. For more details, check the Fetch as Google tool.”

![Change of Address Error](https://susanta.com/wp-content/uploads/2018/09/Change-of-Address-Error.png)

## How I Fixed the Change of Address Error Message in Google Console

If you encounter such an error, try the following steps:

### Create Properties of All Variations Your New Domain Name

[Add four separate properties](https://support.google.com/webmasters/answer/34592?hl=en&ref_topic=3309469) of your new domain name. For example, if your secure domain name is https://www.yournewdomain.com, you should create four different properties in Google Console such as:

https://www.yournewdomain.com (secure www variation)

https://yournewdomain.com (secure non-www variation)

http://www.yournewdomain.com (non-secure www variation)

http://yournewdomain.com (non-secure non-www variation)

### Validate Your New Properties and Add Sitemap

Validate all your new properties in Google Console and add XML sitemap.

### Retry Change of Address in Google Console

Once Google Console has accepted all your properties, you should try the Change of Address tool for redirection. In my case, it worked pretty easily. However, if you still see the same old issues, give it some time; maybe, a day or two. Try again and it should work.

![Change of Address_CoA_Google_Console_Successful](https://susanta.com/wp-content/uploads/2018/09/Change-of-Address_CoA_Google_Console_Successful.png)

Hope this helps. Got any questions? Let me know in the comments below.

Featured Image Source: [Kinsta](https://kinsta.com/blog/http-to-https/)
