# Doksut

I have done a lot of REST APIs and frontends for those, but unfortunately the projects are not very well documented. Because of the new project, I had to find a suitable tool to easily document an API made with PHP. I occasionally use object-oriented code, but for the most part there are only quick database searches which don’t necessarily need their own classes. I think less code is better.

[Swagger](https://swagger.io/) came up, but I think it's far too difficult to get it up and running for my kind of coder who does not use classes for all the code. Creating a website from JSON file can not require the installation of two different packages, hundreds of files and a lot of thinking and learning. Wasted so much time for that.

However, I really like websites created by Swagger and our partner uses it. I think Swagger’s way of using the JSON file is really good, so I made a simple version of it.

Doksut is a very simple JSON reader that turns data into an easy-to-read website. JSON format and the style of the page is similar to Swagger.

Builded file [doksut.js](https://github.com/timoanttila/Svelte-Doksut/blob/main/docs/doksut.js) is only 13.8 KB and can be attached to any file on the website. Reads [/docs.json](https://github.com/timoanttila/Svelte-Doksut/blob/main/docs/docs.json) by default.

[Check out a working example](https://doksut.timoanttila.com/)
