'use strict';
var React = require('react');
var ApplicationStore = require('../stores/ApplicationStore');

var NavLink = require('flux-router-component').NavLink;

var Bootstrap = require('react-bootstrap');
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var FluxibleMixin = require('fluxible').FluxibleMixin;

var NavComponent = React.createClass({
    mixins: [ FluxibleMixin ],
    getDefaultProps: function () {
        return {
            selected: 'home',
            links: {}
        };
    },
    render: function() {
        var selected = this.props.selected;
        var links = this.props.links;

        var linkHTML = Object.keys(links).map(function (name) {
            var className = '';
            var link = links[name];

            if (selected === name) {
                className = 'active';
            }

            return (
                <li className={className} key={link.path}>
                    <NavLink routeName={link.page}>{link.title}</NavLink>
                </li>
            );
        });
        return (
            <Navbar brand="Brand Name" fluid>
                <ul className="nav navbar-nav">{linkHTML}</ul>
            </Navbar>
        );
    }
});

module.exports = NavComponent;
