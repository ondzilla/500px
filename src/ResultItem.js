import React, { Component } from 'react';
import GridTile from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class ResultItem extends Component {
    render() {
        return (
            <GridTile
                key={this.props.image.image_url}
                title={this.props.image.name}
                subtitle={<span>© {this.props.image.user.fullname} / 500px</span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
                <img src={this.props.image.image_url} alt={this.props.image.name}/>
            </GridTile>
        )
    }
}

export default ResultItem;