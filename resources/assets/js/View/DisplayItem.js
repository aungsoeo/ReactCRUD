import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import ItemViewModel from '../ViewModel/ItemViewModel';
import { Link } from 'react-router';

var $this;
class DisplayItem extends ItemViewModel {
    constructor(props) {
        super(props);
        this.getData();
    }
    componentDidMount(){
        $this = this;
        this.itemmodel.getItemLatest(function(response){
            console.log(response);
        });
    }
    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map(function(object, i){
                return (
                  <SingleRow object={object} key={i} deleteItem={$this.deleteItem} />
                )
            })
        }
    }
    render(){
        return (
            <div>
                <h1>Items</h1>

                <div className="row">
                  <div className="col-md-10"></div>
                  <div className="col-md-2">
                    <Link to="/add-item">Create Item</Link>
                  </div>
                </div><br />

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Item Name</td>
                        <td>Item Price</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                      {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}

class SingleRow extends ItemViewModel{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <tr>
                <td>
                    {this.props.object.id}
                </td>
                <td>
                    {this.props.object.name}
                </td>
                <td>
                    {this.props.object.price}
                </td>
                <td>
                    <Link to={"edit/"+this.props.object.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                
                <input onClick={() => this.props.deleteItem(this.props.object.id, $this)} type="button" value="Delete" className="btn btn-danger"/>
                
                </td>
            </tr>
        )
    }
}
export default DisplayItem;