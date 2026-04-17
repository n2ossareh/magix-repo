// screens/ExerciseScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function ExerciseScreen() {
  const [answers, setAnswers] = useState({});
  const problems = Array.from({ length: 7 }, (_, i) => i + 1)
    .flatMap((i) => Array.from({ length: 9 }, (_, j) => `${i}×${j + 1}`));

  const handleChange = (problem, value) => {
    setAnswers({ ...answers, [problem]: value });
  };

  const handleSubmit = () => {
    console.log('User answers:', answers);
    alert('Answers logged to console! (Supabase integration next)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>7×9 Exercises</Text>
      <FlatList
        data={problems}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.problem}>{item} = </Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(value) => handleChange(item, value)}
              value={answers[item] || ''}
            />
          </View>
        )}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  problem: { fontSize: 18, width: 50 },
  input: { borderWidth: 1, flex: 1, padding: 4, borderRadius: 4 },
});