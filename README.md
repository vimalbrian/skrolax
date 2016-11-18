Skrolax.js
===========

Super simple parallax scrolling effect


## Installation

Download package and enjoy!


## Usage

### Via class and data attribute

To easily add a parallax effect behind an element, add `class="parallax"` to the element you want to use.
To control the speed add `data-speed="0.1"` the value ranging from 0.0 to 1.0

```html
<div id="scene1" class="parallax" data-speed="0.1"></div>
```


### Via JavaScript

To call the parallax finction, simply add the following:

```javascript
skrolax.init();
```


### Notes

The background images can be added via the CSS, that way we get more control over the element and can easily manipulate the layout while handling responsive layouts.
