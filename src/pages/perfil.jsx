import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavbarC from '../components/navbar';

const ProfileCard = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: 'Cargando...',
    height: 'Cargando...',
    weight: 'Cargando...',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = 13; // ID del usuario
      try {
        const nameResponse = await fetch(`http://10.0.2.2:3007/api/v1/${userId}`);

        const heightResponse = await fetch(`http://10.0.2.2:3007/api/v1/${userId}`);

        const weightResponse = await fetch(`http://10.0.2.2:3007/api/v1/${userId}`);

        const nameData = await nameResponse.json();
        const heightData = await heightResponse.json();
        const weightData = await weightResponse.json();

        setUserData({
          name: nameData.data.name,
          height: heightData.data.height,
          weight: weightData.data.weight,
        });
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <NavbarC />
      <View style={styles.imageContainer}>
        <Image style={styles.image}  />
      </View>
      <View style={styles.profileImageContainer}>
        <Image style={styles.profileImage}  />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{userData?.name}</Text>
        <Text style={styles.description}>Soy EntrenAT!!</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text>{userData?.weight}kg</Text>
        </View>
        <View style={styles.infoItem}>
          <Text>{userData?.height}m</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Stats')}>

        <View style={styles.infoItem}>
          <Text>Stats</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.achievementsContainer}>
        <Text style={styles.achievementsTitle}>¡ Logros Obtenidos !</Text>
        <Text>No hay logros aún.</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Logros')}>
      <View style={styles.achievementsContainer2}>
        <Text style={styles.achievementsTitle}>Ver Más</Text>
      </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#314155',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    height: 150,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  profileImageContainer: {
    position: 'absolute',
    top: 90,
    marginBottom: 100 ,
    alignSelf: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: 'white',
  },
  profileImage: {
    color: 'white',

    width: 100,
    height: 100,
  },
  textContainer: {
    color: 'white',
    top:100,
    marginBottom: 100,
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 30,
    color: 'gray',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  infoItem: {
    color: 'white',
    alignItems: 'center',
  },
  achievementsContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  achievementsContainer2: {
    padding: 16,
    color: 'white',
    borderTopWidth: 1,
    borderTopColor: '#314155',
  },
  achievementsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    alignContent: 'center',
    fontSize: 12,
    color: '#3498db', 
    marginRight: 10,
  },
});

export default ProfileCard;