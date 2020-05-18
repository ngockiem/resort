import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

function RoomFilter({rooms}) {

    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = useContext(RoomContext);

    // get unique values for select
    const getUnique = (items, value) => {
        return [...new Set(items.map(item=>item[value]))]
    }
    let types = getUnique(rooms, 'type');
    types = ['all',...types];
    types = types.map((type, index) => {
    return <option value={type} key={index}>{type}</option>
    })


    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
            </form>
        </section>
    );
}

export default RoomFilter;


/*
handleChange,
type,
capacity,
price,
minPrice,
maxPrice,
minSize,
maxSize,
breakfast,
pets
*/