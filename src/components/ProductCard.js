import React from 'react'
// import Products from "./Products";
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

class ProductCard extends React.Component{
    render() {
        const product = this.props;
        return (
            <Card>

                <Image src={product.img} size='small' centered alt='Product Image'/>

                <Card.Content>
                    <Card.Header>{product.title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>${product.price}</span>
                    </Card.Meta>
                    <Card.Description>{product.description}</Card.Description>
                </Card.Content>

                <Card.Content extra>

                    <Button as='div' labelPosition='right'>
                        <Button color='yellow'>
                            <Icon name='star' />
                        </Button>
                        <Label as='a' basic color='yellow' pointing='left'>
                            {product.rating}
                        </Label>
                    </Button>
                    <Button color='green'>
                        Add to Cart
                    </Button>

                </Card.Content>
            </Card>
        );
    }
}

export default ProductCard