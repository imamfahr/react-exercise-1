import React from 'react';
import Food from './Product';

let foods = [
    {
        id : 1,
        name : 'Sate ayam',
        price : 20000
    },
    {
        id:2,
        name : 'Spageti',
        price : 25000
    },
    {   id:3,
        name : 'Nasi Goreng',
        price : 10000
    },
    {
        id : 4,
        name : 'Bakso',
        price : 30000
    }
];


let callFood = (foods)=> {
    return(
    <Food 
    key = {foods.id}
    name={foods.name} 
    price={foods.price} />
    )
}


let ListProducts = () => {
    return(
        <div>
            {foods.map(callFood)}
        </div>
    )
}


export default ListProducts;



