var jsdom = require('jsdom');

// Some html page
var html = [
    '<html>',
        '<body>',
            '<p>An image without an alt tag! <img src="some.jpg" /></p>',
            '<h2>Not an h1</h2>',
            '<h5>blabla</h5>',
            '<h4></h4>',
        '</body>',
    '</html>'
].join('\n');

jsdom.env(html, function(err, window) {
    global.window = window;

    global.Node = window.Node;
    global.NodeList = window.NodeList;

    var axe = require('./axe.js');

    // var config = {
    //     rules: {
    //         'color-contrast': {enabled: false}
    //     }
    // }
    var config = {};
    // Run the checks
    axe.run(window.document, config, function(err, data) {
        if (err) {
            console.error(err);
        }
        console.log('data:', data);
    });
});