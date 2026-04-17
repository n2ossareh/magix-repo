import React, { useState, useContext } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { loginUser } from '../api/apiClient';

export default function LoginScreen( { navigation }) {
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;

    setLoading(true);

    try {  
      console.log("🟡 Login button pressed");
      setError('');
      const data = await loginUser(email, password);  
      
      console.log('Login success:', data);
      
     
    } catch (err) {
      console.log('Login error:', err.message);
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" margin="20" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} margin="20" secureTextEntry={false} />
      <Button title={loading ? "Logging in..." : "Login"} onPress={handleLogin} />
      <Button title="Back" onPress={() => navigation.navigate('Landing')} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  )
}
