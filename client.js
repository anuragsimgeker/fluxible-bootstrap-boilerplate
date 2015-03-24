/*global document, window */

'use strict';

// load styles
require('./styles/app.less');

var React = require('react');
var debug = require('debug');
var debugClient = debug('fluxible-bootstrap-boilerplate');
var app = require('./app');
var dehydratedState = window.App; // Sent from the server

window.React = React; // For chrome dev tool support

// expose debug object to browser, so that it can be enabled/disabled from browser:
// https://github.com/visionmedia/debug#browser-support
window.fluxibleDebug = debug;

debugClient('rehydrating app');

// pass in the dehydrated server state from server.js
app.rehydrate(dehydratedState, function(err, context) {
    if (err) {
        throw err;
    }
    window.context = context;
    var mountNode = document.getElementById('app');

    debugClient('React Rendering');
    React.render(context.createElement(), mountNode, function() {
        debugClient('React Rendered');
    });
});