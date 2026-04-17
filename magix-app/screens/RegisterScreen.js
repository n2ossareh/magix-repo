import React, { useState, useContext } from 'react'
import { View, TextInput, Button, Text, TouchableOpacity} from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { registerUser } from '../api/apiClient';

export default function RegisterScreen({ navigation }) {
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleRegister = async () => {
    if (loading) return;

    setLoading(true);

  try {
    console.log("🟡 Register button pressed");
    setError('');
    setMessage('');
    const data = await registerUser(email, password);

    setMessage(
        'Registration successful. Please check your email and confirm your account.'
      );  

          
  } catch (err) {
      setMessage(err.message || 'Registration failed.');
      console.log('Register error:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} margin="20" autoCapitalize="none" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} margin="20" secureTextEntry={false} />
      <Button title={loading ? "Registering..." : "Register"} onPress={handleRegister} />
      <Button title="Back" onPress={() => navigation.navigate('Landing')} />
      <TouchableOpacity
        onPress={handleRegister}
        style={{ backgroundColor: 'blue', padding: 12 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>
          Register
        </Text>
      </TouchableOpacity>
      

      {message ? (
        <Text style={{ marginTop: 15, color: 'green' }}>
          {message}
        </Text>
      ) : null}
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
}