# ubermondo.github.io

This is a _slight_ modification of the excellent impress.js (https://github.com/impress/impress.js/). My version here uses less for the styling and vue to create slides as a JSON object.

## If you want to use this, here's a quick tour:

* all the styling is in css/main.less; this should be converted (and minimized, ideally) into css/main.css.
* all the JS is in js/app.js; this should be minimized into js/app.min.js.
* as long as we're talking about what _not_ to touch, don't modify css/main.css, js/app.min.js, or (especially) impress.min.js. That last file is just a minimized version of impress.js.
* to add slides, modify the "slides" object in app.js; the text there should give you an overview of what you can do there.

**Again, if you want to modify what impress.js itself is doing, you're better off going back to the original repo. Special thanks to the geniuses who put that together.**
