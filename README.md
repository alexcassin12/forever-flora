# Summary

‘Forever Flora’ is a demo e-commerce website I built for a terrarium business I started in late 2021. The business currently operates on Etsy, so I wanted to build this to explore the possibility of transitioning away from an established online marketplace, as well as to develop my skills in building a larger, multi-page website. On the site, users are able to view information about the products and the business, and ‘buy’ items (as it is currently a demo, the checkout system is not in place).

# How I Created the Site

I built Forever Flora using HTML, CSS/SASS and JavaScript. This was definitely a challenge, as it is by far the biggest project I have completed in terms of the number of files and pages needed. Unlike ‘Filmbys’, this project involves multiple HTML pages, which the user can navigate between, and therefore a SASS file for each page, along with extras to style the header and footer respectively. This seemed like the best way to lay out this project, as I would want each page to turn up in search engine results individually, and be able to be bookmarked by potential customers.

I was unsure of the best way to structure the JavaScript documents for this project, but settled on each page having their own script file, alongside a few modules to control commonly used features (such as the carousel functionality). This structure mostly worked very well, as it sectioned up all of the JavaScript code into sensible chunks, and the modules allowed me to keep my code as DRY as possible.

# Problems and Solutions

However, one of the main problems I encountered was due to this structuring. I created an array to hold the items in the user’s basket, which needed to be accessed in both the individual product pages and the shopping cart page. Therefore I decided to make it a model module, similar to the one I made in the MVC structure of my Filmbys project, thinking that both these pages would have access to the data inside. However, I later realised that whenever I changed from a product page to the shopping cart page, the model module was re-run, and any objects that had been pushed into the basket array were gone. My solution to this problem was to save the user’s basket array in local storage whenever a product page or the shopping cart page was closed, and to load it back every time one of these pages was opened. Although maybe not the most efficient solution, generally it did work, apart from on IOS devices where it seems to be running into issues with saving data to local storage.

# What I Think Went Well

Generally I am very happy with the way the project turned out. I think I did a really good job making the site responsive, especially the image carousel and collapsing burger menu that are triggered by a mixture of CSS media queries/SASS Mixins and JavaScript event listeners. Building this site definitely gave me insight into the difficulties with maintaining a larger codebase, and taught me the importance of using sensible file structures when working with a multi-page project.

# What I Think I Could Have Done Better

Looking back on the project, despite being very proud of it, I think there is definitely room for improvement, especially when it comes to the JavaScript aspects. I will have to study the best way to structure JavaScript files when working on larger projects, as even though my structure generally works, I believe there must be a more commonly used structure/architecture, especially when it comes to the storage and manipulation of data.

At some point I also plan on adding an event listener to trigger a function where the images on the ‘shop’ page are only displayed when all images are finished loading. Currently, as the images take a while to load, the user can see the images being loaded in, and I feel user experience would be improved if this was not the case.
