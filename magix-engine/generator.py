import random;
import problem;


def generate_add_test(count, min_value1, max_value1, min_value2, max_value2, userAnswer):
    problems = []

    for i in range(count):
        a = random.randint(min_value1, max_value1)
        b = random.randint(min_value2, max_value2)

        p = problem.Add(a, b, userAnswer) 

        problems.append({
            "id": i + 1,
            "question": p.create(),
            "userAnswer": userAnswer 
        })

    return problems

def generate_subtract_test(count, min_value1, max_value1, min_value2, max_value2, userAnswer):
    problems = []

    for i in range(count):
        a = random.randint(min_value1, max_value1)
        b = random.randint(min_value2, max_value2)

        if (b > a):
            a, b = b, a
        
        p = problem.Subtract(a, b, userAnswer) 

        problems.append({
            "id": i + 1,
            "question": p.create(),
            "userAnswer": userAnswer 
        })

    return problems

def generate_multiply_test(count, min_value1, max_value1, min_value2, max_value2, userAnswer):
    problems = []

    for i in range(count):
        a = random.randint(min_value1, max_value1)
        b = random.randint(min_value2, max_value2)

        p = problem.Multiply(a, b, userAnswer) 

        problems.append({
            "id": i + 1,
            "question": p.create(),
            "userAnswer": userAnswer  
        })

    return problems

def generate_divide_test(count, min_value1, max_value1, min_value2, max_value2, userAnswer):
    problems = []

    if min_value2 == 0:
        min_value2 = 1

    for i in range(count):
        a = random.randint(min_value1, max_value1)
        b = random.randint(min_value2, max_value2)

        p = problem.Divide(a * b, b, userAnswer) 

        problems.append({
            "id": i + 1,
            "question": p.create(),
            "userAnswer": userAnswer 
        })

    return problems