import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export default function NavbarC() {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-row justify-between items-center p-2 bg-gray-800 pt-5`}>
      <Text style={tw`text-xl font-semibold text-white ml-4`}>
        <TouchableOpacity onPress={() => navigation.navigate('Excercise')}>
          <Text style={tw`text-white`}>EntrenAT</Text>
        </TouchableOpacity>
      </Text>


      <View style={tw`flex-row`}>
        <TouchableOpacity  style={tw`mx-4`} onPress={() => navigation.navigate('ProfileCard')}>
          <Text style={tw`text-white`}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={tw`mx-4`}>
          <Text style={tw`text-white`}>Buscar GymBro!</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={tw`mx-4`}>
          <Text style={tw`text-white`}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
