import React, { Component } from 'react';
import '../lib/500px.js';
import SearchResult from './SearchResult';

/**
 *
 */
class Search extends Component {

    constructor(props) {
        super(props);

        if (!window._500px.sdk_key) {
            window._500px.init({
                sdk_key: '26aa2230f2ef55c070ef4efe62fab4c97fc305be'
            });
        }

        this.state = {
            term: this.props.params.term ? this.props.params.term : "",
            inProgress: false,
            data: {}
        };

        this.containsSameId = this.containsSameId.bind(this);
        this.filterOutDuplicates = this.filterOutDuplicates.bind(this);

    }

    componentWillMount() {
        this.runSearch(this.props.params.term, 1);
    }

    componentWillReceiveProps(props) {
        var term = props.params.term;
        if (!this.state.inProgress) {
            this.runSearch(term, 1);
        }
    }

    containsSameId(oldPhotos, id) {
        for (var i = 0; i < oldPhotos.length; i++) {
            if (id === oldPhotos[i].id) {
                return true;
            }
        }
        return false;
    }

    filterOutDuplicates(oldPhotos, newPhotos) {
        return newPhotos.filter(function(image) {
            return !this.containsSameId(oldPhotos, image.id);
        }, this);
    }

    runSearch(term, page) {
        if (term) {
            var data = this.state.data;
            if (this.state.term !== term) {
                data = {};
            }
            this.setState({
                term: term,
                inProgress: true,
                data: data
            });
            var options = {
                term: term,
                page: page,
                image_size: [6, 200]
            };
            var thus = this;
            window._500px.api("/photos/search", options, function (response) {
                var newData = thus.state.data;

                if (response.success) {
                    if (newData.photos) {
                        newData['current_page'] = response.data['current_page'];
                        newData.photos.push.apply(newData.photos, thus.filterOutDuplicates(newData.photos, response.data.photos));
                    } else {
                        newData = response.data;
                    }
                }
                thus.setState({
                    inProgress: false,
                    data: newData
                });
            });
        }
    }

    loadNextPage() {
        if (this.state.data['current_page'] < this.state.data['total_pages']) {
            this.runSearch(this.state.term, this.state.data['current_page'] + 1);
        }
    }

    render() {
        return (
            <SearchResult
                data={this.state.data}
                searchInProgress={this.state.inProgress}
                onScrollToEnd={this.loadNextPage.bind(this)}/>
        );
    }
}

export default Search;