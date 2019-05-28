import React from "react";
import {connect} from "react-redux";
import * as categoriesAction from "../redux/actions/categoryActions"
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";

import Categories from './Categories'

class CategoriesPage extends React.Component {
        state = {
            categories: {
                categoryName: ""
            }
        };

    handleChange = (event) => {
        const categories = {...this.state.categories, categoryName: event.target.value};
        this.setState({categories});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.actions.createCategory(this.state.categories);

        console.log(this.state.categories);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Categories</h2>
                <h3>Search </h3>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.categories.categoryName}
                />
                <input type="submit" value="Save"/>
                {this.props.categories.map(categories => (
                    <div key={categories.categoryName}>
                        {categories.categoryName}
                    </div>
                ))}

            </form>
        )
    }
}
CategoriesPage.propTypes = {
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
     return{
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(categoriesAction, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    ) (CategoriesPage);