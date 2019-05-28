import React from "react";

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            categories: []
        };
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/categories")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        categories: result
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
        const {error, isLoaded, categories} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {categories.map(categories => (
                        <li>
                            {categories}
                        </li>
                    ))}
                </ul>
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

// const Categories = () =>{
//     return(
//         <div className="menuItem">
//             Category types here
//         </div>)
// };

export default Categories