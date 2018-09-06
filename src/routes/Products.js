import React, { Component } from 'react';
import { connect } from 'dva';

import ProductsList from '../components/ProductsList';

@connect(({ products }) => ({ products }))
class Products extends Component{
	handleDelete = id => {
		const { dispatch } = this.props;

		dispatch({
      type: 'products/delete',
      payload: id,
    });
	}

	render (){
		const { products } = this.props;

		return (
			<div>
				<h2>List of Products</h2>
				<ProductsList onDelete={this.handleDelete} products={products} />
			</div>
		)
	}
}

export default Products;