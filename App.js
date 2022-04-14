import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/login';
import Home from './src/screens/home';
import Gratitude from './src/screens/gratitude'
import Journal from './src/screens/journal';
import JournalList from './src/screens/journalList';
import NewJournal from './src/screens/newJournal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gratitude" component={Gratitude} />
        <Stack.Screen name="Journal" component={Journal} />
        <Stack.Screen name="JournalList" component={JournalList} />
        <Stack.Screen name="NewJournal" component={NewJournal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
