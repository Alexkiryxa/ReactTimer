let React = require('react');
let Nav = require('Nav');

/*
    this.props.children
    loads children from app.jsx IndexRoute
*/
let Main = React.createClass({
    render: function() {
        return (
            <div>
                <div>
                    <div>
                        <Nav/>
                        <p>Main.jsx rendered</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Main;
