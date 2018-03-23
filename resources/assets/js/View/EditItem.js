import React, {Component} from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';
import ItemViewModel from '../ViewModel/ItemViewModel';

let $this;
class EditItem extends ItemViewModel {
    constructor(props){
        super(props);
        $this = this;                
    }
    componentDidMount(){
        this.itemmodel.getOne(this.props.params.id, function(response){
            $this.setState({ productName: response.data.name, productPrice: response.data.price });
        })
    }
    render() {
        return (
            <div>
                <h1>Update An Item</h1>
                <form onSubmit={(e) => this.handleEdit(e, this.props.params.id)}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Name:</label>
                                <input type="text" className="form-control" value={this.state.productName} onChange={this.handleChange1} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Price:</label>
                                <input type="text" value={this.state.productPrice} className="form-control col-md-6" onChange={this.handleChange2} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <button className="btn btn-primary">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditItem;