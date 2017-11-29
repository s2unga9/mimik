import React, { Component } from 'react';


class Product extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.price}</h1>
                <img src={this.props.img_url} alt='' />
            </div>
        )
    }
}

export default Product;