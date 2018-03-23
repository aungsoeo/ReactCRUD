import BaseModel from './BaseModel';

class ItemModel extends BaseModel{
	constructor(props){
		super(props);
		this.tableName = "items";
	}
	getItemLatest(callback) {
		this.getData('items/latest', function(response){
			callback(response);
		});
	}	
}

export default ItemModel;