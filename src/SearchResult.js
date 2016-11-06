import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Grid, Row} from 'react-flexbox-grid/lib';


class SearchResult extends Component {

    render() {
        /*var items = [];

         this.props.data.photos.forEach(function (image) {
         items.push(<ResultItem key={image.id} image={image}/>);
         });*/

        return (
            <Grid fluid>

            </Grid>
        )

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