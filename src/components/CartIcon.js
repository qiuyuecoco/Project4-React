// import React from 'react'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Button, Icon } from 'semantic-ui-react'

export default class CartIcon extends Component {
    // cartClick = () => this.setState({ activeItem: "cart" });

    cartPage = () => {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
        }

        // return (
        //     <a href="/about" onClick={handleClick}>
        //     </a>
        // );
    }

    render() {

        return (
                <Button component={Link} to='/about' onClick={this.cartPage} animated='vertical' floated='right' color='green'>
                    <Button.Content hidden>Cart</Button.Content>
                    <Button.Content visible>
                        <Icon name='cart' />
                    </Button.Content>
                </Button>
        )
    }
}










































































