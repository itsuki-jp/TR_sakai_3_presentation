

function url_query_param() {
    let search = location.search;
    search = search.replace('?', '');
    let ar_search = search.split('&');
    let param = new Array();
    ar_search.forEach(function (val) {
        var sep_val = val.split('=');
        param[sep_val[0]] = sep_val[1];
    });
    return param;
}

let param = url_query_param();
let score = param["score"]
console.log(score);

document.getElementById('score').innerText='SCORE'+score