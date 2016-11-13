import React, { Component } from 'react';

/**
 * Displays an app bar at the top of the viewport, containing the search widget.
 */
class AppBar extends Component {

    constructor(props) {
        super(props);
        this.toggleSearchBar = this.toggleSearchBar.bind(this);
        this.navigateHome = this.navigateHome.bind(this);
    }

    toggleSearchBar(event) {
        event.preventDefault();
        var bar = this.refs['searchWidget'];
        if (!bar.classList.contains('open')) {
            bar.classList.add('open');
            this.refs['searchTerm'].focus();
        } else {
            var path = '/search/' + encodeURIComponent(this.refs['searchTerm'].value);
            this.props.navigate(path);
        }
    }

    navigateHome(event) {
        event.preventDefault();
        this.props.navigate('/');
    }

    render() {
        return (
            <div className="pure-g app-bar">
                <div className="pure-u-1 pure-u-sm-1-24 pure-u-md-1-5">
                    <div className="pure-menu pure-menu-horizontal">
                        <div className="search-brand">
                            <a href="/" className="pure-menu-heading search-heading" onClick={this.navigateHome}>500px Image
                                Search</a>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1 pure-u-sm-23-24 pure-u-md-4-5">
                    <div className="search-menu">
                        <form action="/search" method="get" onSubmit={this.toggleSearchBar}>
                            <button type="submit" className="search-button" onClick={this.toggleSearchBar}>
                                <i className="fa fa-search fa-md"></i>
                            </button>
                            <div ref="searchWidget" className="search-bar">
                                <input ref="searchTerm" placeholder="Search" type="text"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
AppBar.propTypes = {
    /**
     * Callback to have the app navigate to a new route.
     */
    navigate: React.PropTypes.func.isRequired
};

export default AppBar;