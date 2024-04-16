import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import NavbarC from '../components/navbar';
import Back from '../components/back';
import Chest from '../components/chest';
import Arms from '../components/arms';
import Legs from '../components/legs';
import FooterA from '../components/footer';

export default function Excercise({navigation}) {


  return (
    <View style={{ ...tw.style('bg-gray-50'), backgroundColor: 'rgb(17, 24, 39)', flex: 1 }}>
      <NavbarC />

       <Back />
       <Chest></Chest>
       <Arms></Arms>
       <Legs></Legs>
       <FooterA></FooterA>
    </View>
  );
}
