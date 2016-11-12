import React, { Component } from 'react';
import '../lib/500px.js';
import SearchResult from './SearchResult';

class Search extends Component {

    constructor(props) {
        super(props);

        window._500px.init({
            sdk_key: '26aa2230f2ef55c070ef4efe62fab4c97fc305be'
        });
        console.log("Search#constructor - initialData: ", this.props.initialData);

        this.state = {
            inProgress: false,
            data: this.props.initialData ? this.props.initialData : {}
        };

    }

    componentWillReceiveProps(props) {
        var thus = this;

        var term = props.params.term;
        console.log("Search#componentWillReceiveProps - term: ", term);
        if (term) {
            this.setState({
                inProgress: true
            });
            var options = {
                term: term,
                image_size: 200
            };
            window._500px.api("/photos/search", options, function(response) {
                var data = {};
                if (response.success) {
                    data = response.data;
                }
                thus.setState({
                    inProgress: false,
                    data: data
                });
            });
        }

    }

    render() {
        if (this.state.inProgress) {
            return (
                <div>Search is in progress...</div>
            )
        } else {
            return (
                <SearchResult data={this.state.data} />
            )
        }
    }
}

export default Search;