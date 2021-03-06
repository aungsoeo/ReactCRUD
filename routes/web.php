<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/add-item', function () {
    return view('welcome');
});

Route::get('/display-item', function () {
    return view('welcome');
});

Route::get('/edit/display-item', function () {
    return view('welcome');
});




Route::get('items/latest', 'ItemController@getLatest');
Route::resource('items', 'ItemController');