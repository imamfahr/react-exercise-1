import React from 'react';
import Food from './Product.jsx';

let foods = [
    {
        id : 1,
        name : 'Sate ayam',
        price : 20000,
        img: 'https://us.123rf.com/450wm/foodandmore/foodandmore1807/foodandmore180700141/104103033-close-up-still-life-of-dish-of-grilled-pork-or-chicken-on-wooden-skewers-with-lime-garnish-and-sauce.jpg?ver=6'
    },
    {
        id:2,
        name : 'Spaghetti',
        price : 25000,
        img: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2222136.jpg'
    },
    {   id:3,
        name : 'Nasi Goreng',
        price : 10000,
        img: 'https://i.guim.co.uk/img/media/535c66550edac692c9c3b6fe84184085eb2ee2ab/0_1267_8815_5290/master/8815.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b05400cf0930fe6aa7b90944110fc319'
    },
    {
        id : 4,
        name : 'Bakso',
        price : 30000,
        img: 'https://image.freepik.com/free-photo/thai-noodle-meatball-bamboo-bowl-isolate-white-background_74054-30.jpg'
    }
];


let callFood = (foods)=> {
    return(
    <Food 
    key = {foods.id}
    name={foods.name} 
    price={foods.price} 
        img={foods.img}
    />
    )
}


let ListProducts = () => {
    return(
        <div className='list-container'>
            {foods.map(callFood)}
        </div>
    )
}


export default ListProducts;



