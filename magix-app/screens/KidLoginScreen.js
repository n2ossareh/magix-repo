import React, { useState, useContext } from 'react'
import { View, TextInput, Button, Text, StyleSheet } from 'react-native'
import { AuthContext } from '../context/AuthContext'


export default function KidLoginScreen({ navigation }) {
    const { KidLogin } = useContext(AuthContext);

    const handleKidLogin = async () => { activeKid = true; }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Magix-Math Challenge!</Text>
            <Text style={styles.title}>Ready to Start, Boss?</Text>
            <Button title="Yes, of course!" onPress={() => navigation.navigate('Exercise')} />
            <Button title="No, I am half puntured as usual!" onPress={() => navigation.navigate('Home')} />
        </View>
        );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
