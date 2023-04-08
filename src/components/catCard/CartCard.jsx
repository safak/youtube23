import React from 'react';
import {Link} from "react-router-dom";
import './CartCard.scss'
const CartCard = ({item}) => {
    return (
        <Link to='/gigs?cat=design'>

        <div className='cartCard'>
            <img src={item.img} alt=""/>
            <span className='desc'>{item.desc}</span>
            <span className='title'>{item.title}</span>
        </div>
        </Link>
    );
};

export default CartCard;
