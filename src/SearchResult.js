import React, { Component } from 'react';
import ResultItem from './ResultItem';

var Container = require('muicss/lib/react/container');
var Row = require('muicss/lib/react/row');
var Col = require('muicss/lib/react/col');

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        });
    }

    render() {
        var items = [];

        if (this.state.data.photos && this.state.data.photos.length > 0) {

            // TODO: If last item is rendered, call back to add next page etc..
            this.props.data.photos.forEach(function (image) {
                items.push(<Col xs="12" sm="6" md="3" lg="2" key={image.id}><ResultItem image={image}/></Col>);
            });

            return (
                <div className="search-result">
                    <Container fluid={true}>
                        <Row>
                            {items}
                        </Row>
                    </Container>
                </div>
            );
        } else {
            return (
                <div>Search rendered no results...</div>
            )
        }

        /*return (
         <GridList
         cols={4}
         padding={20}
         >
         <Subheader>Search Results</Subheader>

         {this.props.data.photos.map((tile) => (
         <GridTile
         key={tile.image_url}
         title={tile.name}
         subtitle={<span>© {tile.user.fullname} / 500px</span>}
         >
         <img src={tile.image_url} alt={tile.name} />
         </GridTile>
         ))}

         </GridList>
         )*/
    }
}

export default SearchResult;