import React, { Component } from 'react'
import items from "./data";

const RoomContext = React.createContext();
//<RoomContext.Provider value={"hello"}

 class RoomProvider extends Component {    
    state= {  
    stores:[],
    sortedRoomas:[],
    featuredRooms:[],
    loading: true 
    };
    //getData
    componentDidMount(){
          //dis is our rooms
        let stores = this.formatData(items);
        let featuredRooms = stores.filter(room => room.featuredRooms === true);
        this.setState({
            stores, 
            featuredRooms,
            sortedRooms: stores,
             loading:false
        });
    }

    formatData(items) {
        //this.getData\
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
         //dis is our rooms
            let room = {...item.fields,images,id}
            return room;
        });
        return tempItems 
    }
    // getRoom = slug => {
    //     let tempRooms = [...this.state.stores];
    //     const room = tempRooms.find(room => room.slug ===slug);
    //     return room;
    //};
    render() {
        return ( 
        <RoomContext.Provider value={{...this.state}}>
            {this.props.children}
        </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };