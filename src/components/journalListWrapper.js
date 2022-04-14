import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios'
import JournalListItem from '../components/journalListItem';

class JournalListWrapper extends Component {
  state = {
    isLoading: true,
    journals: []
  }
  getJournals = async() => {
    try {
      const response = await axios.get(
        'http://localhost:3000/journalentries/2'
      )
      this.setState({ journals: response.data})
      this.setState({ isLoading: false})
      
    } catch (error) {
      alert(error.message)
    }
  }
  render() {
    if (this.state.isLoading) {
      this.getJournals()
      return (
        <View>
          <Text>
            Loading...
          </Text>
        </View>
      )
    }
    const journalLoop = []

    for(let i = 0; i < this.state.journals.length; i++){
      journalLoop.push(
        <View>
          <JournalListItem
            key={i + this.state.journals[i].date}
            date={this.state.journals[i].date}
            entry={this.state.journals[i].entry}
          />
        </View>
      )
    }
    return (
      <ScrollView>
        {journalLoop}
      </ScrollView>
    )
  }
}
export default JournalListWrapper