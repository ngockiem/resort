import React, { Component } from 'react';
import items from './data'

//getData

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        featuredRooms: [],
        sortedRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        });
    }

    formatData(items) {
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url
            );
            let room = {...item.fields, images, id};
            return room
        });
        return tempItems;
    }

    getSingleRoom = (slug) => {
        let tempRoom = [...this.state.rooms];
        const room = tempRoom.find(room => room.slug === slug);
        return room;
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]:value
        }, this.filterRoom)
    }

    filterRoom = () => {
        let {rooms, type, capacity, price} = this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        if(type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        if(capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }     
        tempRooms = tempRooms.filter(room=> room.price <= price);
        this.setState({
            sortedRooms: tempRooms
        });
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getSingleRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withComsumerComponent(Component){
    return function ComsumerWrapper(props) {
        return <RoomConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </RoomConsumer>
    }
}

export {RoomProvider, RoomConsumer, RoomContext}
