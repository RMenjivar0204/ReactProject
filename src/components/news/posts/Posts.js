import React from 'react';
import Paper from 'material-ui/Paper';

const post = (props) => {
  return(
    <div className='ProductTile' onClick={()=>console.log('Clicked')}>
      <Paper zDepth={1}>
        <span classNam='Product Name'>{props.product.name}</span>
        <span className='Product Price'>{props.produce.price}</span>
        <img />
      </Paper>
    </div>
  );
}

export default post;