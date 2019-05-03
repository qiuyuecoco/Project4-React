import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
// import Products from "./Products";
// import ProductList from "../api/ProductList";

export default class Nav extends Component {
    state = { activeItem: 'products' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu pointing>
                    <Menu.Item
                        color = 'purple'
                        name='products'
                        active={activeItem === 'products'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        color = 'blue'
                        name='categories'
                        active={activeItem === 'categories'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        color = 'green'
                        name='cart'
                        active={activeItem === 'cart'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Segment>
                    {/*<ProductList />*/}
                </Segment>
            </div>
        )
    }
}