import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const FullScreenImage = () => {
  const imageUrl = require('../assets/chart.png'); // Ajusta la ruta según la ubicación de tu imagen

  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Puedes cambiar el color de fondo según tus preferencias
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default FullScreenImage;
