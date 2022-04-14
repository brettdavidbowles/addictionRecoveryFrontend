import React from 'react';
import { View, Text } from 'react-native';

export default function UserList (props) {
  return (
    <View>
      <Text>{props.users}</Text>
    </View>
  )
}