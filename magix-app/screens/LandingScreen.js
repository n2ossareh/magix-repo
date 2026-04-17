// screens/LandingScreen.js
import React, { useEffect, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LandingScreen({ navigation }) {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      navigation.replace('Home'); // skip landing if logged in
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Magix!</Text>
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});