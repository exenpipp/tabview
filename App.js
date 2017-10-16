import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class App extends Component {

   constructor(){
     super()
     this.state = {
       selectedIndex: 0,
     };
   }

   handleIndexChange = (index) => {
     this.setState({
       ...this.state,
       selectedIndex: index,
     });
   }

   render() {
       return (
           <View>
             <Text>Hei</Text>
             <Text>Hei</Text>
             <Text>Hei</Text>
             <Text>Hei</Text>
             <Text>Hei</Text>
             <Text>State: {this.state.selectedIndex}</Text>
             <Text>Hei</Text>

               <SegmentedControlTab
                   values={['First', 'Second', 'Third']}
                   selectedIndex={this.state.selectedIndex}
                   onTabPress={this.handleIndexChange}
                   />
           </View>
       );
   }
}

