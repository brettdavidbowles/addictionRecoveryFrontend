import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, TextInput } from 'react-native'
import tw from 'twrnc'

export default Login = ({navigation}) => {
  return (
    <View style={[tw`justify-center bg-blue-500 h-full p-4`]}>
      <Image 
        // style={{flex:1, height: undefined, width: undefined}}
        style={[tw`flex h-20 w-full`]}
        source={require('../../assets/Purple_Horizontal_range_white.png')} 
        resizeMode="contain"
      />
      <Text style={[tw`text-white text-3xl`]}>
        Login:
      </Text>
      <TextInput 
        style={[tw`h-8 p-2 m-2 items-center text-white border rounded border-white`]} 
        placeholder="Username"
      />
      <TextInput 
        style={[tw`h-8 p-2 mx-2 items-center text-white border rounded border-white`]}
        placeholder="Password"
      />

      <Text onPress={() => navigation.navigate('Home')}>
        Auth not set up, click here for homepage
      </Text>
      {/* <StatusBar style="auto" /> */}
    </View>
    )
  }