import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

/**
 * Displays search results in the form of a responsive, infinitely scrolling grid.
 */
class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            isLoading: props.searchInProgress
        })
    }

    allImagesLoaded(container) {
        const allImages = container.querySelectorAll('img');
        for (const image of allImages) {
            if (!image.complete) {
                return false;
            }
        }
        return true;
    }

    imageLoaded() {
        if (this.state.isLoading && this.allImagesLoaded(this.refs['search-result-items'])) {
            this.setState({
                isLoading: false
            });
        }
    }

    getImageUrl(image, size) {
        return image.images.filter(function (o) {
            return o.size === size
        })[0].url;
    }

    renderImage(image) {
        return (
            <div key={image.id} className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4 pure-u-xl-1-5">
                <div className="result-item">
                    <a target="_blank" href={this.getImageUrl(image, 6)}>
                        <img
                            onLoad={this.props.imageLoaded}
                            src={this.getImageUrl(image, 200)}
                            alt={image.name}/>
                        <p>© {image.user.fullname} / 500px</p>
                    </a>
                </div>
            </div>
        )
    }

    renderWaypoint() {
        if (!this.state.isLoading && this.props.data['current_page'] < this.props.data['total_pages']) {
            return (
                <div>
                    <Waypoint
                        scrollableAncestor={window}
                        onEnter={this.props.onScrollToEnd}/>
                    <p>Loading more items...</p>
                </div>
            );
        }
    }

    render() {
        if (this.props.data.photos && this.props.data.photos.length > 0) {

            return (
                <div className="search-result">
                    <div className="pure-g" ref="search-result-items">
                        {this.props.data.photos.map(image => this.renderImage(image))}
                    </div>
                    {this.renderWaypoint()}
                </div>
            );

        } else if (this.props.searchInProgress) {
            return (
                <div>Searching...</div>
            )
        } else {
            return (
                <div>Search rendered no results...</div>
            )
        }
    }
}
SearchResult.propTypes = {
    /**
     * Indicates whether a search is currently in progress or not.
     */
    searchInProgress: React.PropTypes.bool.isRequired,

    /**
     * The result data that is to be displayed.
     */
    data: React.PropTypes.object.isRequired,

    /**
     * Callback to let parent component know when the user has scrolled
     * to the end and is expecting the next batch of data.
     */
    onScrollToEnd: React.PropTypes.func.isRequired
};

export default SearchResult;