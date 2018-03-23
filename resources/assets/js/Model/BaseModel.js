import React, { Component } from 'react';
import config from '../config';

class BaseModel{
    getData(url, callback){
        axios.get(config.baseurl+url).then((response)=>{
            callback(response);
        }).catch(function(error){
            console.log(error);
        })
    }
    deleteData(url, callback){
        axios.delete(config.baseurl+url).then((response)=>{
            callback(response);
        }).catch(function(error){
            console.log(error);
        })
    }

    updateData(url, data, callback){
        axios.patch(config.baseurl+url, data).then((response)=>{
            callback(response);
        }).catch(function(error){
            console.log(error);
        })
    }

    saveData(url, data, callback){
        axios.post(config.baseurl+url, data).then((response)=>{
            callback(response);
        }).catch(function(error){
            console.log(error);
        })
    }

    save(data, callback){
        // alert(this.tableName);
        this.saveData(this.tableName, data, function(response){
            callback(response);
        });
    }

    getAll(callback){
        this.getData(this.tableName, function(response){
            callback(response);
        });
    }

    remove(id, callback){
        this.deleteData(this.tableName+'/'+id, function(response){
            callback(response);
        });
    }
    getOne(id, callback){
        this.getData(this.tableName+'/'+id+'/edit',function(response){
            callback(response);
        });
    }
}

export default BaseModel;
