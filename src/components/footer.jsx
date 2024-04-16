import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FooterA({}) {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <Text style={styles.text}>© 2023 <Text style={styles.link}>EntrenAT™</Text>. All Rights Reserved.</Text>
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.link}>Quiénes somos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Politicas')}>
            <Text style={styles.link}>Políticas</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#314155', // Coloca el color de fondo deseado
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
  },
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#888', // Cambia el color de texto deseado
  },
  linksContainer: {
    flexDirection: 'row',
  },
  link: {
    fontSize: 12,
    color: '#3498db', 
    marginRight: 10,
  },
});

export default FooterA;
