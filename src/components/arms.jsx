import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Arms = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [exerciseWeights, setExerciseWeights] = useState([0, 0, 0, 0]);

  const handleInputChange = (index, value) => {
    const sanitizedValue = Math.min(value, 100);
    setExerciseWeights(prevState => {
      const newWeights = [...prevState];
      newWeights[index] = sanitizedValue;
      return newWeights;
    });
  };

  const renderExerciseInputs = () => {
    const exercises = ['Exercise 1', 'Exercise 2', 'Exercise 3', 'Exercise 4'];

    return exercises.map((exercise, index) => (
      <View key={index} style={styles.inputContainer}>
        <Text>{`${exercise} (kg)`}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={exerciseWeights[index].toString()}
          onChangeText={text => handleInputChange(index, parseInt(text) || 0)}
        />
      </View>
    ));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Ejercicios para Brazos</Text>

                  {renderExerciseInputs()}

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Guardar marcas</Text>
                  </Pressable>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Arms</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    justifyContent: 'flex-start',
    margin: 5,
    padding: 10,
    height: '80%',
    weight: '90%',
    backgroundColor: '#233657',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#172439',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontWeight: 'bold', 
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  
  inputContainer: {
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#233657',
    borderRadius: 5,
    width: 150,
    borderStyle: 'solid',
    padding: 5,
    textAlign: 'center',
  },
});

export default Arms;
