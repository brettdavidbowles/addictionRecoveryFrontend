import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import axios from 'axios'
import tw from 'twrnc'

class JournalInput extends Component {
   state = {
      entry: '',
      user_id_fkey: 2
   }
   test = {

   }
   handleJournalEntry = (text) => {
      this.setState({ entry: text })
   }

   createJournalEntry = async(newJournal) => {
    try {
      const response = await axios.post('http://localhost:3000/journalentries/2', newJournal);
      const capitalResponse = await axios.put('http://localhost:3000/recoverycapital/2')
      this.textInput.clear()
      console.log(capitalResponse.data)
      alert(response.data);
    } catch (error) {
      console.log(error)
    }

  }

   render() {
      return (
         <View>
            <TextInput
              style={[tw`bg-white h-3/4`, { textAlignVertical: 'top' }]}
              numberOfLines={5}
              placeholder="Text"
              multiline
              ref={input => { this.textInput = input }}
              onChangeText = {this.handleJournalEntry}
            />
            
            <TouchableOpacity
              style={[tw`p-2 bg-green-200 text-blue-500 border rounded my-2 w-18`]}
              onPress = {
                () => this.createJournalEntry(this.state)
              }
            >
               <Text> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default JournalInput
