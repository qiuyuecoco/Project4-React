import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Products from "./Products";

import { Link } from "react-router-dom";

// import ProductList from "../api/ProductList";

export default class Nav extends Component {
    state = { activeItem: 'products' };

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        console.log(this.props)
    };

// broken console log...
    //TODO: figure out how to filter search item
    filterCategory = (evt)=> {
        evt.preventDefault();
        console.log(this.refs.name.value)
    };

    render() {
        const { activeItem } = this.state;
        console.log(this.props)

        return (
            <div>
                <Menu pointing>
                    <Link to='/'>
                    <Menu.Item
                        color = 'purple'
                        name='products'
                        active={activeItem === 'products'}
                        onClick={this.handleItemClick}
                    />
                    </Link>

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
                            <form onKeyUp={this.filterCategory}>
                                <Input icon='search' placeholder='Search...' />
                            </form>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>


            </div>
        )
    }
}