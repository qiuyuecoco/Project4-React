// import React from 'react'
import React, { Component } from 'react'

import { Button, Icon } from 'semantic-ui-react'

export default class CartIcon extends Component {
    // cartClick = () => this.setState({ activeItem: "cart" });

    render() {

        return (
            <span>

                <Button animated='vertical' >
                    <Button.Content hidden>Cart</Button.Content>
                    <Button.Content visible>
                        <Icon name='cart' />
                    </Button.Content>
                </Button>

            </span>

        )
    }
}



