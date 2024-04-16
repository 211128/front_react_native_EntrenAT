import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [sex, setSex] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [dataError, setDataError] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (password !== passwordConfirm) {
      setPasswordsMatch(false);
      return;
    }

    if (parseFloat(height) !== 0 || parseFloat(weight) !== 0) {
      setPasswordsMatch(true);
    } else {
      setDataError(false);
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula y un número.'
      );
      return;
    }

    setPasswordsMatch(true);
    setDataError(true);
    setPasswordError('');
    


      const formData = {
        name,
        email,
        password,
        height: parseFloat(height), // Convertir altura a número flotante
        weight: parseFloat(weight),
        sex,
      };
      const reorderedFormData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        height: formData.height,
        weight: formData.weight,
        sex: formData.sex.toLowerCase(), // Asegúrate de que el género esté en minúsculas
      };
    
      console.log('Datos a enviar:', reorderedFormData);
    
      const response = await fetch('http://10.0.2.2:3007/api/v1/register', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "name": formData.name,
        "email":formData.email,
        "password": formData.password,
        "height": formData.height, // Convertir altura a número flotante
        "weight": formData.weight,
        "sex":formData.sex,
        }),
      });

      console.log(response.status)


      if (response.ok) {
        console.log('Usuario registrado exitosamente.');
        setSuccess(true);
      } else {
        console.error('Error al registrar el usuario:', response.statusText);
      }

  };

  if (success) {
navigation.navigate('Login')
  }


  //navigation.navigate('Login');

  return (
    <ScrollView style={{...tw.style('bg-gray-50'), backgroundColor: 'rgb(17, 24, 39)'}}>
      <View style={tw.style('flex flex-col items-center justify-center px-6 py-8')}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={tw.style('text-2xl font-semibold text-white my-5')}>EntrenAT</Text>
        </TouchableOpacity>

        {!passwordsMatch && console.log("no machearon las contras pa")}
        {!dataError && console.log("dataError")}
        {passwordError && (
          <View style={tw.style('p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50')}>
            <Text style={tw.style('font-medium text-white')}>{passwordError}</Text>
          </View>
        )}

        <View style={{ ...tw.style('w-full bg-white rounded-lg shadow') , backgroundColor: 'rgb(31, 41, 55)'}}>
          <View style={tw.style('p-6')}>
            <Text style={tw.style('text-xl font-bold leading-tight text-white mb-10')}>
              Regístrate - Crea una Cuenta!
            </Text>
            <View style={tw.style('')}>
             
            
              
              <View>
                <Text style={tw.style('text-sm font-medium text-white my-2 mt-5')}>
                  Name
                </Text>
                <TextInput
                  style={{ ...tw.style('border border-gray-300 text-white p-2.5 my-2 rounded-lg '), backgroundColor: 'rgb(55, 65, 81)' }} //55, 65, 81
                  placeholder="name@company.com"
                  onChangeText={(text) => setName(text)}
                  value={name}
                />
              </View>

              <View>
                <Text style={tw.style('text-sm font-medium text-white my-2 mt-5')}>
                  Email
                </Text>
                <TextInput
                  style={{ ...tw.style('border border-gray-300 text-white p-2.5 my-2 rounded-lg '), backgroundColor: 'rgb(55, 65, 81)' }} //55, 65, 81
                  placeholder="name@company.com"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
              </View>

              <View>
                <Text style={tw.style('text-sm font-medium text-white my-2 mt-5')}>
                  Password
                </Text>
                <TextInput
                  style={{ ...tw.style('border border-gray-300 text-white p-2.5 my-2 rounded-lg '), backgroundColor: 'rgb(55, 65, 81)' }} //55, 65, 81
                  placeholder="name@company.com"
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  value={password}
                />
              </View>

              <View>
                <Text style={tw.style('text-sm font-medium text-white my-2 mt-5')}>
                  Confirm Password
                </Text>
                <TextInput
                  style={{ ...tw.style('border border-gray-300 text-white p-2.5 my-2 rounded-lg '), backgroundColor: 'rgb(55, 65, 81)' }} //55, 65, 81
                  placeholder="name@company.com"
                  onChangeText={(text) => setPasswordConfirm(text)}
                  secureTextEntry={true}
                  value={passwordConfirm}
                />
              </View>


              <View>
                <Text style={tw.style('text-sm font-medium text-white my-2 mt-5')}>
                  Heigh
                </Text>
                <TextInput
                  style={{ ...tw.style('border border-gray-300 text-white p-2.5 my-2 rounded-lg '), backgroundColor: 'rgb(55, 65, 81)' }} //55, 65, 81
                  placeholder="name@company.com"
                  onChangeText={(text) => setHeight(text)}
                  keyboardType="numeric"
                  value={height}
                />
              </View>

              <View>
                <Text style={tw.style('text-sm font-medium text-white my-2 mt-5')}>
                  Weight
                </Text>
                <TextInput
                  style={{ ...tw.style('border border-gray-300 text-white p-2.5 my-2 rounded-lg '), backgroundColor: 'rgb(55, 65, 81)' }} //55, 65, 81
                  placeholder="name@company.com"
                  onChangeText={(text) => setWeight(text)}
                  keyboardType="numeric"
                  value={weight}
                />
              </View>

              <View>
                <Text style={tw.style('text-sm font-medium text-white my-2 mt-5')}>
                  Gender
                </Text>
                <TextInput
                  style={{ ...tw.style('border border-gray-300 text-white p-2.5 my-2 rounded-lg '), backgroundColor: 'rgb(55, 65, 81)' }} //55, 65, 81
                  placeholder="name@company.com"
                  onChangeText={(text) => setSex(text)}
                  value={sex}
                />
              </View>
              

              <TouchableOpacity
                style={tw.style('w-full p-2.5 rounded-lg')}
                onPress={handleSubmit}
              >
                <Text style={tw.style('text-white text-center font-medium mt-10')}>
                  Registrarme!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
     
  
    </ScrollView>
  );
}
