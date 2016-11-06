import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import data from '../data/delsbo.json';

class ResultItem extends Component {
    render() {
        return (
            <div className="result-item">
                <img src={this.props.image.image_url} alt={this.props.image.name} />
            </div>
        )
    }
}

class ResultTitle extends Component {
    render() {
        return (
            <div className="result-title">Search Results</div>
        )
    }
}

class SearchResult extends Component {

    render() {
        var items = [];

        console.log("props: ", this.props);

        this.props.data.photos.forEach(function(image) {
            items.push(<ResultItem key={image.id} image={image} />);
        });

        return (
            <div className="search-results">
                <ResultTitle />
                {items}
            </div>
        )
    }
}

class SearchBar extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..."/>
                <input type="button" value="Search"/>
            </form>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="one-pager">
                <SearchBar />
                <SearchResult data={data}/>
            </div>
        );
    }
}

export default App;
