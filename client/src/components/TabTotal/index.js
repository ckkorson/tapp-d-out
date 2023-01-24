import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TabTotal = ({ drinks = [] }) => {
    let total = 0;
    for(let i = 0; i < drinks.length; i++) {
        total = total + parseInt(drinks[i].price)
    }
    return total
}

export default TabTotal;