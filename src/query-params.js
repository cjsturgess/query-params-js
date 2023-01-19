/**
 * query-params.js v0.0.2
 * - Captures query parameters and returns as an object.
 */

let getQueryParams = (q_str) => {
    q_str = q_str || window.location.search.substring(1);

    if (!q_str)
        return {};

    let params = q_str.split('&');

    let query = {};
    params.forEach((param) => {
        let p = param.split('='),
            key = p[0],
            val = p[1];

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