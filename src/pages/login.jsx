import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Método para guardar la ID del usuario en AsyncStorage
  const _storeData = async (userId) => {
    try {
      await AsyncStorage.setItem('userId', userId);
      console.log('ID del usuario guardada con éxito:', userId);
    } catch (error) {
      console.error('Error al guardar la ID del usuario:', error);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2:3007/api/v1/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { id } = await response.json();
        setSuccess(true);
        setError(null);
        _storeData(id); // Guarda la ID del usuario en AsyncStorage
        navigation.navigate('Excercise'); // Redirigir al usuario a la pantalla de Ejercicios
      } else {
        // La solicitud falló, probablemente credenciales incorrectas
        setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        setSuccess(false);
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      setError('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
      setSuccess(false);
    }
  };

  return (
    <View style={{ ...tw.style('bg-gray-50'), backgroundColor: 'rgb(17, 24, 39)', flex: 1 }}>
      <View style={tw.style('flex flex-col items-center justify-center px-6 py-8')}>
        <TouchableOpacity onPress={null}>
          <Text style={tw.style('text-2xl font-semibold text-white my-10')}>EntrenAT</Text>
        </TouchableOpacity>

        {error && <Text style={tw.style('bg-gray-800 text-red-400 p-2 rounded-lg my-5')}>{error}</Text>}

        <View style={{ ...tw.style('w-full rounded-lg shadow'), backgroundColor: 'rgb(31, 41, 55)' }}>
          <View style={tw.style('p-6')}>
            <Text style={tw.style('text-xl font-bold leading-tight text-white my-5')}>
              Login - Ingresa a tu cuenta!
            </Text>

            <View>
              <View>
                <Text style={tw.style('text-sm font-medium text-white')}>Email</Text>
                <TextInput
                  style={{
                    ...tw.style('border border-gray-300 text-white p-2.5 my-2 rounded-lg'),
                    backgroundColor: 'rgb(55, 65, 81)',
                  }}
                  placeholder="name@company.com"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
              </View>

              <View>
                <Text style={tw.style('text-sm font-medium text-white my-2')}>Contraseña</Text>
                <TextInput
                  style={{ ...tw.style('border border-gray-300 text-white p-2.5 my-2 rounded-lg'), backgroundColor: 'rgb(55, 65, 81)' }}
                  placeholder="••••••••"
                  secureTextEntry
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
              </View>

              <TouchableOpacity style={tw.style('w-full p-2.5 rounded-lg text-white my-3')} onPress={handleLogin}>
                <Text style={tw.style('text-white text-center font-medium')}>Ingresar</Text>
              </TouchableOpacity>

              {success && <Text style={tw.style('text-white text-center')}>Login exitoso!</Text>}

              <Text style={tw.style('text-sm text-gray-500')}>
                No tienes cuenta aún?{' '}
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                  <Text style={tw.style('text-blue-500')}>Regístrate</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
