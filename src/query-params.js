/**
 * query-params.js v0.0.1
 * - Captures query parameters and returns as an object.
 */

let getQueryParams = () => {
    let search_str = window.location.search.substring(1);

    if (!search_str)
        return {};

    let params = search_str.split('&');

    let query = {};
    params.forEach((param) => {
        let p = param.split('='),
            key = p[0],
            val = p[1];

        console.log(key, val);

        console.log({
            [key]: true
        });

        if (query[key]) {
            if (!Array.isArray(query[key]))
                query[key] = [query[key]];

            query[key].push(val);
        } else {
            query[key] = val;
        }
    });

    return query;
};

window.getQueryParams = getQueryParams;

window.location.query = getQueryParams();