import React, { Component } from 'react'
import items from "./data";

const RoomContext = React.createContext();
//<RoomContext.Provider value={"hello"}

 class RoomProvider extends Component {    
     //this is asign from the data 
    state= {  
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading: true,
    //list setup of filter component
    type: "all",
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast: false,
    pets: false
    };
    //getData
    componentDidMount(){
          //dis is our link to visitroom
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
       // filter max list p & s
        let maxPrice = Math.max(...rooms.map(item =>
        item.price));
        let maxSize = Math.max(...rooms.map(item =>
            item.size));
        this.setState({
            rooms, 
            featuredRooms,
            sortedRooms: rooms,
             loading:false,
             price:maxPrice,
             maxPrice,
             maxSize
        });
    }

    formatData(items) {
        //this.getData\
        // map from data page component
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
         //dis is our rooms
            let room = {...item.fields,images,id}
            return room;
        });
        return tempItems 
    }
    //link to single room
    getRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug ===slug);
        return room;
    };
    // for filter target list and changing select type
    handleChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked:target.value
    const name = event.target.name;
    this.setState(
        {
        [name]:value
    },
    this.filterRooms
    );
    // const value = event.target.value;
    // this work for selection of Room type
    //  console.log(`this is type: ${type}, this is name: ${name},
    //   this is value: ${value},`);
    };
    filterRooms = () => {
        let {
            rooms, type,capacity,price,minSize,
            maxSize,breakfast,pets
        } = this.state
        //all the rooms
        let tempRooms = [... rooms];
        //transform value
        capacity = parseInt(capacity);
        price = parseInt(price);


        //filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type
                === type);
        }

        // filter by capacity
        if (capacity !==1){
            tempRooms = tempRooms.filter(room =>room.capacity >=capacity);
        }
        //filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
   
        //filter by size
        tempRooms = tempRooms.filter(room => room.size >=minSize
            && room.size <= maxSize);

        //filter by breakfast
        if (breakfast) {
        tempRooms = tempRooms.filter(room => room.breakfast === true);
        }

        //filter by pets
        if (pets) {  
        tempRooms = tempRooms.filter(room => room.pets === true);
        }

        //change state
        this.setState({
            sortedRooms: tempRooms
        });
    };
    render() {
        return ( 
        <RoomContext.Provider value={{...this.state,
        getRoom: this.getRoom , handleChange: this.handleChange}}>
            {this.props.children}
        </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
    return <RoomConsumer>
        {value => <Component{...props} context={value} />}
    </RoomConsumer>
    }
}

export { RoomProvider, RoomConsumer, RoomContext };