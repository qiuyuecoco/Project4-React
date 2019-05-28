import React from "react"
import ProductCard from "./ProductCard";
import { Card } from 'semantic-ui-react'

class Products extends React.Component {
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
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        products: result
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

    renderProducts() {
        const {error, isLoaded, products} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                    <Card.Group>
                    {products.map(product => <ProductCard key = {product.id}
                        {...product}/>)}
                    </Card.Group>
            );
        }
    }
    render() {
        return(
            <div>
                {this.renderProducts()}
            </div>
        )
    }
}

export default Products