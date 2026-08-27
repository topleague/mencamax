---
title: 'Smush Images Like the Hulk: 4 WordPress Image Optimization Tips'
date: 2017-12-16
excerpt: Image optimization is one of the most important aspects of maintaining a
  healthy WordPress site. From boosting page speed to enhancing the user experience,
  optimized images help…
authorAvatar: https://susanta.com/wp-content/uploads/2026/08/Susanta-Profile-Pic-removebg-preview.png
layout: split
tags:
- wordpress
- tech
author: Susanta Sahoo
draft: false
---
Image optimization is one of the most important aspects of maintaining a healthy WordPress site. From boosting page speed to enhancing the user experience, optimized images help you reduce your annual hosting cost and improve ROI.

In this post, I attempt to address some of the most pressing needs of WordPress users in terms of image optimization and compression. So, let’s dive right in.

**Contents:**

- [List of Best Image Optimizer WordPress Plugins](https://susanta.com/wordpress-image-optimization/#h1)
- [Best Free Image Optimizer Tool: The Two-Pronged Approach](https://susanta.com/wordpress-image-optimization/#h2)
- [Optimize Images for Google PageSpeed Insights](https://susanta.com/wordpress-image-optimization/#h3)
- [WebP Image Format: Why Google Recommends it](https://susanta.com/wordpress-image-optimization/#h4)

## List of Best Image Optimizer WordPress Plugins

When it comes WordPress image optimization, there are many freemium plugins vying for your attention, offering a wide range of features to accommodate diverse users. Here’s a review of the most popular image compression plugins in WordPress.

- WP Smush Image Compression and Optimization
- CW Image Optimizer
- Shortpixel Image Optimizer
- EWWW Image Optimizer
- Tiny PNG
- Imagify
- Kraken

So why are these image optimizer WordPress plugins so popular?

I tried each one of them and here’s what I found:

**WP Smush Image Compression and Optimization**

With over 900,000 active installations, [WP Smush](https://wordpress.org/plugins/wp-smushit/) is arguably the most popular plugin for WordPress image compression and optimization out there. The only problem is that, like any premium plugin, it has a limitation for free users.

**CW Image Optimizer**

Although [CW Image Optimizer](https://wordpress.org/plugins/cw-image-optimizer/) is not as popular as WP Smush or EWWW, it still does the job for you. Unlike any other plugins, it doesn’t upload your images to a third-party. So, if you have privacy concerns about other plugins, this is a good option for you.

**Shortpixel Image Optimizer**

With over 60,000 active installations, [Shortpixel Image Optimizer](https://wordpress.org/plugins/shortpixel-image-optimiser/) boast of some unique features and benefits. It offers you 100 monthly free credits after which you need to buy their packages for additional credits. If you’re planning to pay for an image optimization plugin, [read their in-depth analysis](https://blog.shortpixel.com/wp-image-optimization-wordpress-plugins/) of all popular image optimization plugins.

**EWWW Image Optimizer**

[EWWW Image Optimizer](https://wordpress.org/plugins/ewww-image-optimizer/) boasts of over 600,000 active installations. It offers a slew of benefits including Automatic Resizing, Bulk Optimize, WebP images, CDN support to name a few. It offers 500 monthly free credits.

**Tiny PNG**

[Tiny PNG plugin](https://wordpress.org/plugins/tiny-compress-images/) has more than 100,000 active installations and pretty good reviews. Having reviewed positively by many users, this is definitely worth considering.

**Imagify**

Offering 25 MB monthly bonus, [Imagify](https://wordpress.org/plugins/imagify/) is a premium image optimization plugin that is just as popular as any other freemium plugins out there. With a massive 90,000+ active installation to brag about, this is an image compression plugin for serious WordPress users.

**Kraken**

[Kraken](https://wordpress.org/plugins/kraken-image-optimizer/) is yet another contender in the WordPress image optimization world, with over 30,000 active installations. It offers 100 MB free monthly quota after which you can buy their monthly subscription.

## Best Free Image Optimizer Tool: The Two-Pronged Approach

Personally, I believe in not using any image optimizer WordPress plugins for image compression. However, if your WordPress site already has a ridiculously high number of uncompressed images, then using a plugin to smush them may seem like the only solution.

However, if your WordPress site has only about 400-500 images, I suggest a two-pronged approach:

**Tiny PNG Plugin**: Run the Tiny PNG Plugin for the existing images. Once done, deactivate and uninstall it.

**EZGif.com**: Use this free image optimizer tool to [resize](https://ezgif.com/resize) and [optimize your images](https://ezgif.com/optijpeg) before uploading them to media folder in future. Make sure to convert your .png files into the .jpg format using the [PNG to JPG converter](https://ezgif.com/png-to-jpg).

## Optimize Images for Google PageSpeed Insights

When you test your website speed on Google’s PageSpeed Insights, you will often come across images that need to be further optimized and compressed.

If you're testing your homepage URL, you will see all image files that have room for optimization.

If your goal is to optimize only those URLs so you could get rid of the warning and improve your PageSpeed score, then you can resize them within your media folder itself.

Here’s what you need to do:

**Step #1**: Add this code snippet to your functions.php file to display sizes of image files in WordPress media folder.

https://gist.github.com/topleague/3d0f3746ab1fbe90389c0d8be9bb10ef

**Step #2**: Visit the URLs that PageSpeed Insights tool suggest optimizing.

**Step #3**: Install and activate EWWW Image Optimizer plugin.

**Step #4**: Locate those images in your media folder and click on the “Optimize Now” button to compress your images.

![](http://susanta.com/wp-content/uploads/2017/12/Optimize-Image-in-WordPress-Media-Folder.png)

**Optional Step:** If you can compress your images to the recommended size, your job is done. However, if the PageSpeed Insights tool still shows some to be uncompressed, then you can optimize them manually.

Download those images, optimize them using ezgift.com tool (or similar tools of your choice) and then insert them in their respective posts again.

You should now see the “Optimize Images” warning vanish in the PageSpeed Insights test results.

## WebP Image Format: Why Google Recommends it

Developed by Google, [WebP](https://developers.google.com/speed/webp/) is a brand-new image file format which provides superior lossless and lossy compression for images on the web.

According to Google Developer’s Team, WebP lossless images are 26% smaller in size compared to PNGs and 25-34% smaller than comparable JPEG images at equivalent [SSIM](https://en.wikipedia.org/wiki/Structural_similarity) quality index.

![JPEG vs WebP](http://susanta.com/wp-content/uploads/2017/12/JPEG-vs-WebP.jpg)

No wonder then why Google recommend using images in WebP file format.

However, there’s a problem.

Because this format has been developed by Google, [not many](https://caniuse.com/#search=webp) popular browsers have support for this format.

But if you really want to experiment with this new image format, there’s a workaround for WordPress users.

Here’s what you need to do:

Add the following rules to your .htaccess file.

https://gist.github.com/topleague/1bf42403e5309db54fa275380844c53a

This rule essentially rewrites your .jpg/.png files and make them available for any supported browsers to display. The file name, however, remains the same. This is a win-win.

Did you find this guide useful?

Please, share your thoughts with us and this article with your friends.
