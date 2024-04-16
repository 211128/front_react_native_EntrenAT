import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import createBottomTabNavigator
import Login from './src/pages/login';
import Register from './src/pages/register';
import Excercise from './src/pages/excersices';
import About from './src/pages/about';
import Politicas from './src/pages/politicas';
import NavbarComponent from './src/components/navbar';
import ProfileCard from './src/pages/perfil';
import Stats from './src/pages/stats';
import Logros from './src/pages/logros';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 

function FooterA() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Politicas" component={Politicas} />
    </Tab.Navigator>
  );
}
function NavbarC() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ProfileCard" component={ProfileCard} />
    </Tab.Navigator>
  );
}

function profile() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stats" component={Stats} />
      <Tab.Screen name="Logros" component={Logros} />

    </Tab.Navigator>
  );
}




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Excercise" component={Excercise} options={{ headerShown: false }} />
        <Stack.Screen name="FooterA" component={FooterA} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Politicas" component={Politicas} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileCard" component={ProfileCard} options={{ headerShown: false }} />
        <Stack.Screen name="NavbarC" component={NavbarComponent} options={{ headerShown: false }} />
        <Stack.Screen name="Stats" component={Stats} options={{ headerShown: false }} />
        <Stack.Screen name="Logros" component={Logros} options={{ headerShown: false }} />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
