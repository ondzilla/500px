import React, { Component } from 'react';

class AppBar extends Component {

    constructor(props) {
        super(props);
        this.toggleSearchBar = this.toggleSearchBar.bind(this);
    }

    toggleSearchBar(event) {
        event.preventDefault();
        var bar = this.refs['searchWidget'];
        if (!bar.classList.contains('open')) {
            bar.classList.add('open');
        } else {
            var path = '/search/' + encodeURIComponent(this.refs['searchTerm'].value);
            this.props.onSubmit(path);

        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        console.log("AppBar#render()");
        return (
            <div className="pure-g app-bar">
                <div className="pure-u-1 pure-u-sm-1-24 pure-u-md-1-5">
                    <div className="pure-menu pure-menu-horizontal">
                        <div className="search-brand">
                            <a href="#" className="pure-menu-heading search-heading">500px Image
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

export default AppBar;