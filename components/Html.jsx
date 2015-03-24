'use strict';
var React = require('react');
var ApplicationStore = require('../stores/ApplicationStore');
var FluxibleMixin = require('fluxible').FluxibleMixin;

var Html = React.createClass({
    mixins: [ FluxibleMixin ],
    render: function() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <title>{this.getStore(ApplicationStore).getPageTitle()}</title>
                <link rel="stylesheet" type="text/css" href="/public/dist/main.css" />
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/dist/main.js"></script>
            </html>
        );
    }
});

module.exports = Html;
