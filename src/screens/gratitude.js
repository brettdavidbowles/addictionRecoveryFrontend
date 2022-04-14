import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import UserList from '../components/userList';

export default function Gratitude ({navigation}) {
  // const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getUsers = async() => {
    try {
      const response = await axios.get(
        'http://localhost:3000/journalentries/2'
      )
      
      setData(JSON.stringify(response.data))
    } catch (error) {
      alert(error.message)
    }
  }
  useEffect(() => {
    getUsers()

  }, [])
  return (
    <View style={[tw`bg-blue-500 p-4 h-full`]}>
      <Text style={[tw`text-white text-2xl py-4`]}>
        Gratitude List: 
      </Text>
      <Text style={[tw`text-white text-xl`]}>
        Writing three things we are grateful for each day has been shown to help recovery and improve mental health. Log your three items for today here:
      </Text>
      <Button onPress={() => getUsers()} title="trythis" />
      <TextInput />
      <Text>{data}</Text>
      <UserList users="users()" />

    </View>
  )
}