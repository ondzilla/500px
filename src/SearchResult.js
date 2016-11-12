import React, { Component } from 'react';
import ResultItem from './ResultItem';

class SearchResult extends Component {
    render() {
        console.log("SearchResult#render()");
        var items = [];

        if (this.props.data.photos && this.props.data.photos.length > 0) {

            // TODO: If last item is rendered, call back to add next page etc..
            this.props.data.photos.forEach(function (image) {
                items.push(<ResultItem key={image.id} image={image}/>);
            });

            return (
                <div className="search-result">
                    <div className="pure-g">
                        {items}
                    </div>
                </div>
            );
        } else {
            return (
                <div>Search rendered no results...</div>
            )
        }
    }
}

export default SearchResult;