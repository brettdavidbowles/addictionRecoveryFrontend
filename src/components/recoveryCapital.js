import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native"

export default function RecoveryCapital2 ({navigation}) {
  const [ capital, setCapital] = useState(0)
  const [ isLoading, setIsLoading ] = useState(false)
  const isFocused = useIsFocused()
  useEffect(() => {
    const fetchCapital = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          'http://localhost:3000/recoverycapital/2'
        )
        if (response.status === 200) {
          setCapital(response.data[0].total)
          setIsLoading(false)
          return
        } else {
          throw new Error("Failed to fetch capital")
        } 
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        }
      }
      if(isFocused) {
        fetchCapital()
      }
    }, [isFocused])
    return (
      <View>
        <Text style={[tw`text-xl text-white`]}>
          Recovery Capital Total: {capital}
        </Text>
        <Text style={[tw`text-white`]}>
          Use the App and maintain sobriety to gain more capital.
        </Text>
      </View>
    )
  }
