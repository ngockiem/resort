import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';
//import { RoomConsumer } from '../context';
import { withComsumerComponent } from '../context';

function RoomContainer({context}) {
    const {loading, rooms, sortedRooms} = context;
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </div>
    )
}

export default withComsumerComponent(RoomContainer);

/* export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                value => {
                    const {loading, rooms, sortedRooms} = value;
                    if(loading){
                        return (
                            <Loading/>
                        )
                    }
                    return (
                        <div>
                            this is room container
                            <RoomFilter rooms={rooms}/>
                            <RoomList rooms={sortedRooms} />
                        </div>
                    )
                }
            }
        </RoomConsumer>
    )
}*/
