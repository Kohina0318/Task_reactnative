import React from 'react';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {Text, View,Image,TouchableOpacity} from 'react-native';
import MI from "react-native-vector-icons/MaterialIcons"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
import F from 'react-native-vector-icons/Feather';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const DrawerContent = props => {
  
  return (
    <DrawerContentScrollView >

      <View>

      <View style={{flexDirection:'column',marginLeft:20,marginTop:16}}>
        <Image style={{width:70,height:70,borderRadius:50}} source={require("./images/twitterpro.png")} />
        <Text style={{padding:2,fontSize:16,fontWeight:'bold',letterSpacing:1}}>Kohina Tiwari</Text>
        <Text style={{padding:1,fontSize:12,letterSpacing:1,color:'#7f8c8d'}}>@Kohina Tiwari</Text>
        <View style={{padding:20,display:'flex',flexDirection:'row'}}>
          <Text style={{padding:1,fontSize:14,letterSpacing:1,fontWeight:'bold'}}>0</Text>
          <Text style={{padding:1,fontSize:14,letterSpacing:1,color:'#7f8c8d'}}>Following</Text>
          <Text style={{padding:1,fontSize:14,letterSpacing:1,fontWeight:'bold',marginLeft:20}}>0</Text>
          <Text style={{padding:1,fontSize:14,letterSpacing:1,color:'#7f8c8d'}}>Follower</Text>
        </View>
      </View> 
      <Divider />
      
    <View>
      <View style={{marginLeft:10,padding:10,display:'flex',flexDirection:'row'}}>
        <F name="user" color='#7f8c8d' size={25} />
        <Text style={{padding:5,fontSize:17}}> Profile</Text>
      </View>

      <View style={{marginLeft:10,padding:10,display:'flex',flexDirection:'row'}}>
        <F name="file-text" color='#7f8c8d' size={25} />
        <Text style={{padding:5,fontSize:17}}> Lists</Text>
      </View>

      <View style={{marginLeft:10,padding:10,display:'flex',flexDirection:'row'}}>
        <F name="message-circle" color='#7f8c8d' size={25} />
        <Text style={{padding:5,fontSize:17}}> Topics</Text>
      </View>

      <View style={{marginLeft:10,padding:10,display:'flex',flexDirection:'row'}}>
        <F name="bookmark" color='#7f8c8d' size={25} />
        <Text style={{padding:5,fontSize:17}}> BookMarks</Text>
      </View>

      <View style={{marginLeft:10,padding:10,display:'flex',flexDirection:'row'}}>
        <MCI name="lightning-bolt-outline" color='#7f8c8d' size={25} />
        <Text style={{padding:5,fontSize:17}}> Moments</Text>
      </View>
      
      <View style={{marginLeft:10,padding:10,display:'flex',flexDirection:'row'}}>
        <F name="star" color='#7f8c8d' size={25} />
        <Text style={{padding:5,fontSize:17}}> Monetization</Text>
      </View>
      
    
    </View>

    <Divider />

    <View>
      <View style={{marginLeft:10,padding:15}}>
        <Text style={{padding:5,fontSize:17}}>Setting and Privacy</Text>
        <Text style={{padding:5,fontSize:17}}>Help Center</Text>
      </View>
    </View>
    <Divider />

    <View style={{marginLeft:10,padding:10,display:'flex',flexDirection:'row'}}>
    <MCI name="lightbulb-on-outline" color='#1da1f2' size={30} />
    <MI name="qr-code" color='#1da1f2'style={{marginLeft:180}} size={30} />
    </View>

    </View>


      
    </DrawerContentScrollView>
  );
};
export default DrawerContent;
