---
title: 'AMP AdSense Guide: How to Display AMP Ads in WordPress'
date: 2017-11-21
excerpt: If you’re planning to activate Google AMP on your WordPress site, there’s
  something you should know — you can’t run Google AdSense ads of all formats.
authorAvatar: https://susanta.com/wp-content/uploads/2026/08/Susanta-Profile-Pic-removebg-preview.png
layout: split
tags:
- google-amp
- tech
author: Susanta Sahoo
draft: false
---
If you’re planning to [activate Google AMP on your WordPress site](https://susanta.com/activate-google-amp-wordpress-site/), there’s something you should know — you can’t run Google AdSense ads of all formats.

Google AMP is designed faster speed; therefore, it removes ads that are incompatible with the AMP standards. Normal Google AdSense ad code is essentially javascript that is not supported by the AMP project. Therefore, your ads won’t appear on AMP-enabled posts/pages.

In fact, this is one of the major reasons why many webmasters are still not ready to switching to Google AMP. Many others are [quickly undoing their AMP efforts](https://kinsta.com/blog/disable-google-amp/) in a bid to get back their traffic and performance metrics.

However, if you’re willing to jump on the AMP bandwagon and still want your AdSense to appear, you need to use an AMP-compliant version of your AdSense ads.

## How to Make AdSense Ads AMP-Compliant

If you’re using any WordPress plugin that helps you insert AdSense ad code into your site, this guide might become easier for you to follow.

The best way to implement AMP-supported AdSense ads on your site is to add tag as recommended in Google AMP Project.

Here’s an example of the AMP Version of an AdSense Code

![](https://susanta.com/wp-content/uploads/2017/11/AMP-Ads-in-WordPress.png)

Technically, you needn’t create separate ads for your AMP-compliant pages unless you want to really track the performance of those Ads specifically.

I personally recommend the following approach:

**Step #1:** Go to the AdSense plugin you’ve installed on your site. Click to modify the Ad Code.

**Step #2:** Create an AMP version of the existing Ad Code and insert it below the standard AdSense code.

This basically means both versions of your AdSense code will work based on whether you’re viewing it on a Desktop Computer or Mobile Device.

## Convert Your AdSense Code to Its AMP Version

Here’s what a standard AdSense code looks like. As you can see, I’ve created a responsive ad format. Therefore, the data-ad-format is “fluid”. I’d also recommend the same for your site unless you have found another way to make your ad behave responsively on your site.

Also, the data-ad-layout is “in-article” which essentially mean this ad is designed to respond well within an individual post.

The next two lines are essentially number related to your AdSense account. I’ve inserted dummy numbers in the ad-client and ad-slot areas.

https://gist.github.com/topleague/3a4a55c925ab1de267361d08dc2cbd57

***Now, let’s take a look at a sample AMP-version of the above Ad Code.***

https://gist.github.com/topleague/256d6cf70c7fd2cb00acf930bd05c5c0

The AMP version essentially uses the tag for compatibility on your AMP posts/pages. You can also see that I’ve defined a dimension for the AMP-compliant ad which basically fits into most mobile screen sizes.

**Here’s how you should insert these Ad Codes in your AdSense plugin.**

![](https://susanta.com/wp-content/uploads/2017/11/AMP-AdSense-Ad-Optimization-.png)

That’s all you have to do for your AdSense ads to appear on your AMP-compliant posts/pages.

**Resources:** Google AMP has [a guide to help you with different types of AMP-compliant ads](https://www.ampproject.org/docs/reference/components/amp-ad#example:-displaying-a-few-ads). You might want to check that out as well.

Did you find this post useful?

Please, share it with your friends on social media and help it reach afar.
