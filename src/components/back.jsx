import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Modal } from 'react-native';
import {AsyncStorage} from 'react-native';


const Back = () => {
  const [formData, setFormData] = useState({
    remopolea: '',
    remobarra: '',
    jalonpecho: '',
    pullover: '',
    dominadas: '',
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const { remopolea, remobarra, jalonpecho, pullover, dominadas } = formData;

  

  const averageWeight =
        (parseFloat(remopolea) + parseFloat(remobarra) + parseFloat(jalonpecho) + parseFloat(pullover) + parseFloat(dominadas)) /
        5;

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    
    try {
      
      console.log('formData:', formData); // Verifica que los datos del formulario sean correctos

      if (!userId) {
        console.error('userId es null. No se puede enviar la solicitud POST.');
        return;
      }

      const response = await fetch('http://10.0.2.2:3007/api/v1/exercise/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userid: 14,
          exercisesid: 5,
          weight: averageWeight
        }),
      });

      const data = await response.json();

      console.log('Response:', data); // Verifica la respuesta del servidor

      if (response.ok) {
        setFormSuccess('Datos guardados con éxito.');
        setFormError(null);
      } else {
        setFormError(data.message || 'Error al procesar la solicitud.');
        setFormSuccess(null);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormError('Error al conectar con el servidor.');
      setFormSuccess(null);
    }
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <View style={styles.container}>

      <Pressable style={styles.openModalButton} onPress={toggleModal}>
        <Text style={styles.openModalButtonText}>Back</Text>
      </Pressable>
      <Modal visible={isModalOpen} animationType="slide" onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Ejercicios para espalda</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Remo con polea</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={formData.remopolea}
              onChangeText={(text) => handleChange('remopolea', text)}
            />
          </View>


          <View style={styles.buttonContainer}>
            {formError && <Text style={styles.errorText}>{formError}</Text>}
            {formSuccess && <Text style={styles.successText}>{formSuccess}</Text>}
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Guardar marcas</Text>
            </Pressable>
          </View>
          <Pressable style={styles.closeModalButton} onPress={toggleModal}>
            <Text style={styles.closeModalButtonText}>Salir</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  openModalButton: {
    backgroundColor: '#172439',
    borderRadius: 7,
    alignItems: 'center',
    width: 80,
    height: 30,
  },
  openModalButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    marginBottom: 10,
  },
  closeModalButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeModalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Back;
