import React, { Component } from 'react';

class ResultItem extends Component {
    render() {
        return (
            <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4 pure-u-xl-1-5">
                <div className="result-item">
                    <img src={this.props.image.images[0].url} alt={this.props.image.name}/>
                    <p>© {this.props.image.user.fullname} / 500px</p>
                </div>
            </div>
        )
    }
}

export default ResultItem;