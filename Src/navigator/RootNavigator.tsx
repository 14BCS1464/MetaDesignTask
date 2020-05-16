import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import splash from '../container/spalsh/splash' 
import ToDoScreen from "../container/ToDo/TodoScreen";
import ViewTask from "../container/ViewTask/ViewTask";
const RootStack = createStackNavigator()



class Navigator extends React.PureComponent {
  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="splash" component={splash} />
            <RootStack.Screen name="ToDoScreen" component={ToDoScreen} />
            <RootStack.Screen name="ViewTask" component={ViewTask} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigator;
