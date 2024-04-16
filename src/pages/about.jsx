import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import tw from 'twrnc';
import NavbarC from '../components/navbar';

function About({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const confirmDeleteAccount = async () => {
    try {
      // Envía la solicitud PUT al endpoint /api/v1/users/setinactive para desactivar la cuenta
      const response = await fetch('http://10.0.2.2:3007/api/v1/setAsInactive', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 12, // La ID del usuario a desactivar, aquí puedes poner la ID correspondiente
        }),
      });

      if (response.ok) {
        // Si la solicitud es exitosa, redirige al usuario al inicio de sesión (Login)
        navigation.navigate('Login');
        console.log("cuenta desactivada pa, usa otra")
      } else {
        console.error('Error al desactivar la cuenta');
        // Aquí puedes manejar el error de desactivación de la cuenta si lo deseas
      }
    } catch (error) {
      console.error('Error al enviar la solicitud PUT:', error);
      // Aquí puedes manejar los errores de red u otros errores si lo deseas
    }
  };

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

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.description2}>Borrar cuenta</Text>
      </TouchableOpacity>

      {/* Modal para confirmar el borrado de cuenta */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmar acción</Text>
            <Text style={styles.modalText}>¿Estás seguro de que quieres borrar tu cuenta?</Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonConfirm]}
                onPress={confirmDeleteAccount}
              >
                <Text style={styles.buttonText}>Confirmar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
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
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 100,
  },
  title2: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 45,
    marginTop: 50,
  },
  description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
  },
  description2: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonCancel: {
    backgroundColor: '#ccc',
  },
  buttonConfirm: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default About;
