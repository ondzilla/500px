import React, { Component } from 'react';

class ResultItem extends Component {
    render() {
        return (
            <div className="result-item">
                <img src={this.props.image.image_url} alt={this.props.image.name}/>
                {/*<p>© {this.props.image.user.fullname} / 500px</p>*/}
            </div>
        )
    }
}

export default ResultItem;