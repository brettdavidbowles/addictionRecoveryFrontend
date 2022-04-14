import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import tw from 'twrnc';
import axios from 'axios';
import RecoveryCapital from '../components/recoveryCapital';

export default function Home ({navigation}) {
  return (
    <View style={[tw`bg-blue-500 p-4 h-full flex flex-col justify-between`]}>
      <View>
        <Text style={[tw`text-white text-2xl py-4`]}>
          Purple Recovery App:
        </Text>
        <Text style={[tw`text-white text-xl`]}>
          A tool for maintaining addiction recovery.
        </Text>
        <Button
          onPress={() => navigation.navigate('Gratitude')}
          title="Gratitude List"
          color="white"
        />
        <Button
          onPress={() => navigation.navigate('Journal')}
          title="Journal"
          color="white"
        />
      </View>
      <View style={[tw`py-6`]}>
        <RecoveryCapital />
      </View>
    </View>
  )
}