# query-params.js

**query-params.js** is a small and simple vanilla (ES6) js helper to capture query parameters as an object.


## Usage

Accessing **window.location.query** will return the query parameters as known at time of page load. If you expect them to change, you can call **window.getQueryParams()** to return the current query parameters.

## Examples

1. *?key=value* -> **{"key": "value"}**
2. *?key=value&key2=value2* -> **{"key": "value", "key2": "value2"}**
3. *(no parameters)* -> **{}**

## Building
1. Install terser via **npm i terser -g**
2. Run **npm run build**
3. Access the minified js or maximized js in *dist/*