import React from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'

const JournalListItem = (props) => {
  return (
    <View style={[tw`p-2`]}>
      <Text style={[tw`text-white`]}>
        {props.date}
      </Text>
      <Text style={[tw`text-white`]} d>
        {props.entry}
      </Text>
    </View>
  )
}

export default JournalListItem