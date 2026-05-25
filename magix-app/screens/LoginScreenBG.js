import React, { useState, useContext } from 'react'
import { 
  View, 
  TextInput, 
  Button, 
  Text, 
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  registerCallableModule,
 } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { loginUser } from '../api/apiClient';
import { KidLogin } from './KidLoginScreen';

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
      // const data = await loginUser(email, password);  
      const data = await loginUser(email, password);  
      
      console.log('Login success:', data);
      login(data);

      return data;

    } catch (err) {
      console.log('Login error:', err.message);
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  return (
    <ImageBackground
      source={require('../assets/MathScreenShot.png')}
      style={styles.background}
      resizeMode="cover">
        <KeyboardAvoidingView
          style={styles.overlay}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

          
        <View style={{ padding: 20 }}>
          <Text style={StyleSheet.container}>Login Page</Text>
          <TextInput placeholder="Email" margin="20" value={email} onChangeText={setEmail} autoCapitalize="none" />
          <TextInput placeholder="Password" value={password} onChangeText={setPassword} margin="20" secureTextEntry={false} />
          <Button title={loading ? "Logging in..." : "Login"} onPress={handleLogin} />
          <Button title="Back" onPress={() => navigation.navigate("Landing")} />
          <Button title="Play" onPress={() => navigation.navigate("KidLogin")} />
                {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
          
        </View>
      </KeyboardAvoidingView>
          
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  from: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
});
  
