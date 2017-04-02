# Simple Handlebars precompilation example

This repo is a simple demo of using the Handlebars.js templating engine. 

## Installation and setup
This example uses Handlebars cli tool to precompile the Handlebars templates and concatenate them into one js file.

Install node and Handlebars globally to use the cli tool:

`$ brew install node`

`$ npm install handlebars -g`

Then run the following command to compile the templates after they have modified:

`handlebars templates --output public/js/templates.js --min`

This will compile all handlebars files within the templates directory and concatenate and minify them into templates.js

## Implementation
The main html is compiled in `index.html` and requires jQuery, the Handlebars runtime library, the templates.js file and our main.js file.

In main.js we add the line `Handlebars.partials = Handlebars.templates` in order to be able to reuse Handlebars partials across our templates. 

We then specify our main template which renders all the other partials, pass it dynamic json content and then append it to the index.html file.

Refer to the [Handlebars.js documentation](http://handlebarsjs.com/) for examples and use cases. 