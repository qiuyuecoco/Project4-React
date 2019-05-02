import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import ProductList from "./App";

export default class Navigation extends Component {
    state = { activeItem: 'products' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu pointing>
                    <Menu.Item
                        name='products'
                        active={activeItem === 'products'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='cart'
                        active={activeItem === 'cart'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Segment>
                    <ProductList />

                </Segment>
            </div>
        )
    }
}