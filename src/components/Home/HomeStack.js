import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LiveStream from './LiveStream';
import PostDetail from './PostDetail';
import UserProfile from './UserProfile';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LiveStream" component={LiveStream} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default HomeStack;