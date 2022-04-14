import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import tw from 'twrnc';
import axios from 'axios'
import JournalInput from '../components/journalInput';
import JournalList from '../screens/journalList';

export default function Journal ({navigation}) {

  return (
    <View style={[tw`bg-blue-500 p-4 h-full`]}>
      <Text style={[tw`text-white text-2xl py-4`]}>
        Journal:
      </Text>
      <Button
        onPress={() => navigation.navigate('NewJournal')}
        color="white"
        title='New Journal Entry'
      />
      <Button
        onPress={() => navigation.navigate('JournalList')}
        color="white"
        title='Past Journals'
      />
    </View>
  )
}