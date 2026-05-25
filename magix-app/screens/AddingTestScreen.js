import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';


export function Operator(problem) {
    const word = problem.question[0];

    if(word === "Add") return "+";
    if(word === "Subtract") return "-";
    if(word === "Multiply") return "x";
    if(word === "Divide") return "÷";

    return "";
}


export default function AddingTestScreen() {

    const [problems, setProblems] = useState([]);
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");

    const loadAddingProblems = async () => {
        try {
            const response = await fetch(
                'https://glorious-winner-4pg44q9g5g4fq7qg-8000.app.github.dev/generate-add-test', 
                {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        count: 5,
                        min_value1 : 0,
                        max_value1 : 12,
                        min_value2 : 0,
                        max_value2 : 12,
                        }),
                
                });
                
            const data = await response.json();
        
            setProblems(data.problems);

        } catch (err) {
            console.log("FETCH ERROR:");
            console.log(err);
            }
        };

    const loadSubtractingProblems = async () => {
        try {
            const response = await fetch(
                'https://glorious-winner-4pg44q9g5g4fq7qg-8000.app.github.dev/generate-subtract-test', 
                {
                    method: 'POST',
                    headers:{
                                'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        count: 5,
                        min_value1 : 0,
                        max_value1 : 12,
                        min_value2 : 0,
                        max_value2 : 12,
                        }),
                });

            const data = await response.json();

            setProblems(data.problems);

        } catch (err) {
            console.log(err);
        }
    };

    const loadMultiplyingProblems = async () => {

        try {
            
            const response = await fetch(
            'https://glorious-winner-4pg44q9g5g4fq7qg-8000.app.github.dev/generate-multiply-test', 
            {
                method: 'POST',
                headers:{
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                    count: 5,
                    min_value1 : 0,
                    max_value1 : 12,
                    min_value2 : 0,
                    max_value2 : 12,
                    }),
                
            });

            const data = await response.json();

            setProblems(data.problems);

        } catch (err) {
            console.log(err);
        }
    };

    const loadDividingProblems = async () => {

        try {
            
            const response = await fetch(
            'https://glorious-winner-4pg44q9g5g4fq7qg-8000.app.github.dev/generate-divide-test', 
            {
                method: 'POST',
                headers:{
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                    count: 5,
                    min_value1 : 0,
                    max_value1 : 12,
                    min_value2 : 0,
                    max_value2 : 12,
                    }),
            });

            const data = await response.json();

            setProblems(data.problems);

        } catch (err) {
            console.log(err);
        }
    }


    const submitAnswer = async () => {
        // copy current problems array
        const updatedProblems = [...problems ];
        updatedProblems[currentProblemIndex].userAnswer = userAnswer;

        setProblems(updatedProblems)
        setCurrentProblemIndex(currentProblemIndex + 1)
        setUserAnswer("");
    }

    const currentProblem = problems[currentProblemIndex];
    
    
    return (
        
        <View style={{ padding: 20 }}>

            <Text style={{ fontSize: 24, marginBottom: 20 }}>
                Math Test
            </Text>

            <Button
                title="Addition Test"
                onPress={loadAddingProblems}
            />

            <Button
                title="Subtraction Test"
                onPress={loadSubtractingProblems}
            />

            <Button
                title="Multiplication Test"
                onPress={loadMultiplyingProblems}
            />

            <Button
                title="Division Test"
                onPress={loadDividingProblems}
            />
                
            {currentProblem && ( 
                <View style={{ padding: 20 }}>
                        
                            
                    <Text style={{ fontSize: 24}} >
                        {`${currentProblem.question[1]} ${Operator(currentProblem)} ${currentProblem.question[2]} =  `}
                    
                        <TextInput
                            value={userAnswer}
                            onChangeText={setUserAnswer}
                            keyboardType="numeric"
                            style= {{
                                borderWidth: 1,
                                marginTop: 10,
                                padding: 5,
                                fontSize: 10
                                }}
                        />
                    </Text>

                    <Button
                        title="Submit"
                        onPress={submitAnswer}
                    />
                </View>
            )}
        </View> 
 
    )    
}