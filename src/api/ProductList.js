import React from "react";


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        products: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, product } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {product.map(item => (
                        <li key={product.title}>
                            {product.img} {product.description} {product.price} {product.rating}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default ProductList

// import React from 'react';
// import axios from "axios";
//
// export default axios.create({
//     baseURL: "https://my-json-server.typicode.com/tdmichaelis/json-api/products",
//     // params: {
//     //     part: 'snippet',
//     //     maxResults: 25,
//     //     key: KEY
//     // }
//
//
// })
//
// const ProductList = (props) => {
//     const{ id, title, description, img, price, rating, category} = props.productInfo;
//     const imgSrc = 'https://my-json-server.typicode.com/tdmichaelis/json-api/products/';
//     return(
//         <div>
//             <span>
//                 title={props.product.title} src ={imgSrc}</span>
//             <div>{props.product.description}</div>
//         </div>
//     )
// };
//
// export default ProductList