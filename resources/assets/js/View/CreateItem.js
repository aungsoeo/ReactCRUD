import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import ItemViewModel from '../ViewModel/ItemViewModel';

var $this;
class CreateItem extends ItemViewModel {
    constructor(props){
        super(props);                
    }
    render() {
        return (
            <div>
                <h1>Create An Item</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Name:</label>
                                <input type="text" className="form-control" onChange={this.handleChange1} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Price:</label>
                                <input type="text" className="form-control col-md-6" onChange={this.handleChange2} />
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
export default CreateItem;