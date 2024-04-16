import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'twrnc';
import NavbarC from '../components/navbar';

function Politicas({navigation}) {
    //
  return (
    
    
    <View style={styles.container}>
      <Text style={tw` font-semibold text-white`}>
        <TouchableOpacity onPress={() => navigation.navigate('Excercise')}>
          <Text style={styles.title}>EntrenAT</Text>
        </TouchableOpacity>
      </Text>
      <Text style={styles.title2}>Acerca de Nosotros</Text>
      <Text style={styles.description}>
        Bienvenido a nuestra aplicación de registro de entrenamientos. Nos esforzamos por ayudarte a alcanzar tus objetivos de fitness mediante el seguimiento de tus sesiones de entrenamiento y proporcionándote gráficos para visualizar tu progreso.
      </Text>
      <Text style={styles.description2}>
        ¡Comienza hoy mismo y lleva tu fitness al siguiente nivel!
      </Text>
    </View>

    
  )

  
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#172439',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
    },
    title: {
      color:'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 15,
      marginTop: 100,
    },
    title2: {
        color:'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 45,
        marginTop: 50,
      },
    description: {
        color:'white',

      fontSize: 16,
      textAlign: 'center',
      marginBottom: 50,
    },
    description2: {
        color:'white',

      fontSize: 16,
      textAlign: 'center',
      marginBottom: 50,
    },
  });
  
export default Politicas