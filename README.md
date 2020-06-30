# query-params.js

**query-params.js** is a small and simple vanilla js helper to capture query parameters as an object.


## Usage

Accessing **window.location.query** will return the query parameters as known at time of page load. If you expect them to change, you can call **window.getQueryParams()** to return the current query parameters.

## Examples

1. *?key=value* -> **{"key": "value"}**
2. *?key=value&key2=value2* -> **{"key": "value", "key2": "value2"}**
3. *(no parameters)* -> **{}**