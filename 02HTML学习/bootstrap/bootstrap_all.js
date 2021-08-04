// import '../../libs/bootstrap5.0.2/bootstrap.css';
// import '../../libs/popper2.9.2/popper.min.js';
// import '../../libs/bootstrap5.0.2/bootstrap.js';

var bs_css_path = '../../libs/bootstrap5.0.2/bootstrap.css';
var popperjs_path = '../../libs/popper2.9.2/popper.min.js';
var bs_js_path = '../../libs/bootstrap5.0.2/bootstrap.js';

function includeCSS(path) {
    var link_tag = document.createComment('link');
    link_tag.rel = 'stylesheet';
    link_tag.href = path;
    var head_tag = document.getElementsByTagName("head")[0];
    head_tag.appendChild(link_tag);
    console.log(head_tag);
}

function includeJS(path) {
    var script_tag = document.createComment('script');
    script_tag.src = path;
    var head_tag = document.getElementsByTagName('head')[0];
    head_tag.appendChild(script_tag);
}

// window.onload = function() {
//     console.log('onload');
//     includeCSS(bs_css_path);
//     includeJS(popperjs_path);
//     includeJS(bs_js_path);
// };
includeCSS(bs_css_path);
includeJS(popperjs_path);
includeJS(bs_js_path);