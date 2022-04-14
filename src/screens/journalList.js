import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import axios from 'axios'
import JournalListItem from '../components/journalListItem';
import JournalListWrapper from '../components/journalListWrapper';

export default function JournalList () {
  return (
    <View style={[tw`bg-blue-500 p-4 h-full`]}>
      <Text style={[tw`text-white text-2xl py-4`]}>
        Past Journals: 
      </Text>
      <JournalListWrapper />
    </View>
  )
}