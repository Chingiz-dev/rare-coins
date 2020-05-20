import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AddCoin extends Component {
    render = () => {
        return (
            <div>
                <div><header><h1>Admin panel add</h1>
                    <Link to="/">Logout</Link></header></div>
                <div>right</div>
            </div>
        )
    }
}
export default AddCoin;