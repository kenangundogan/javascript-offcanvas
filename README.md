# Javascript Offcanvas
Javascript offcanvas - tiny and simple.

## Status
[![JS gzip size](https://img.badgesize.io/kenangundogan/javascript-offcanvas/main/dist/script/script.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/kenangundogan/javascript-offcanvas/blob/main/dist/script/script.js)
[![JS Brotli size](https://img.badgesize.io/kenangundogan/javascript-offcanvas/main/dist/script/script.js?compression=brotli&label=JS%20Brotli%20size)](https://github.com/kenangundogan/javascript-offcanvas/blob/main/dist/script/script.js)
[![CSS gzip size](https://img.badgesize.io/kenangundogan/javascript-offcanvas/main/dist/style/style.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/kenangundogan/javascript-offcanvas/blob/main/dist/style/style.css)
[![CSS Brotli size](https://img.badgesize.io/kenangundogan/javascript-offcanvas/main/dist/style/style.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/kenangundogan/javascript-offcanvas/blob/main/dist/style/style.css)

![Javascript Offcanvas](https://raw.githubusercontent.com/kenangundogan/javascript-offcanvas/main/asset/javascript-offcanvas-cover.png)

## Options
Option | Type | Default | Description | Example
------ | ---- | ------- | ----------- | -----------
id | string |  | id DOM element | [Example](https://kenangundogan.github.io/javascript-offcanvas)
data-position | string | left | special class can be added | [Example](https://kenangundogan.github.io/javascript-offcanvas)
data-size | string | small | special class can be added | [Example](https://kenangundogan.github.io/javascript-offcanvas)
data-transition | int | 300ms | opening and closing animation speed | [Example](https://kenangundogan.github.io/javascript-offcanvas)

## Usage example
### Script
```javascript
var offcanvas = new Offcanvas;
```

### View
```html
<!-- Button trigger offcanvas -->
<button 
    class="offcanvasBtn"
    data-target="#offcanvas-left"
>
Default
</button>

<!-- Offcanvas -->
<div
    class="offcanvas-container"
    id="offcanvas-left"
    data-position="left"
    data-size="medium"
    data-transition="300"
    >
    <div class="offcanvas-wrapper">
        <i class="offcanvas-close"></i>
        ...
    </div>
</div>
```

## Copyright and license
Designed and built by [Kenan G??ndo??an](https://www.linkedin.com/in/kenangundogan/)
<br>
2021 Currently - Code released under the [MIT License](https://github.com/kenangundogan/javascript-offcanvas/blob/master/LICENSE)
Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/)
