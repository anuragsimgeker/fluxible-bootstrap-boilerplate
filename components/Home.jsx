'use strict';
var React = require('react');

var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Col = Bootstrap.Col;
var Glyphicon = Bootstrap.Glyphicon;

var Home = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function() {
        return (
			<Row>
				<Col xs={12} md={12}>Home <Glyphicon glyph="heart" /></Col>
			</Row>
        );
    }
});

module.exports = Home;
