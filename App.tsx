/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import SVGElement from './components/SVGElement';
import Discover from './screens/Discover';
import ActivityScreen from './screens/Activity';
import Bookmarks from './screens/Bookmarks';
import Profile from './screens/Profile';

const Tabs = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {backgroundColor: 'black'},
          tabBarActiveTintColor: 'white',
        }}>
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <SVGElement focused={focused} title={'home'} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: ({focused}) => (
              <SVGElement focused={focused} title={'compass'} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <SVGElement focused={focused} title={'stopwatch'} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Bookmarks"
          component={Bookmarks}
          options={{
            tabBarIcon: ({focused}) => (
              <SVGElement focused={focused} nav title={'bookmark'} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <SVGElement focused={focused} title={'avatar'} />
            ),
            headerShown: false,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
