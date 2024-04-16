import React from 'react';
import FullScreenImage from './charts'; // Asegúrate de ajustar la ruta correcta
import { View, Image, StyleSheet } from 'react-native';
import tw from 'twrnc'; 
import NavbarC from '../components/navbar';

const Stats = () => {
  return (
    <View style={{ ...tw.style('bg-gray-50'), backgroundColor: 'rgb(17, 24, 39)', flex: 1 }}>
    <NavbarC></NavbarC>
      <FullScreenImage />
    </View>
  );
};

export default Stats;
