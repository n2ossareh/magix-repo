import generator as generator
import json
import sys

def main():
    # Example usage
    count = 5
    min_value1 = 0
    max_value1 = 12
    min_value2 = 0
    max_value2 = 12

    test_type = sys.argv[1]

    if test_type == "add":
        test_problems = generator.generate_add_test(count, min_value1, max_value1, min_value2, max_value2)
    elif test_type == "subtract":
        test_problems = generator.generate_subtract_test(count, min_value1, max_value1, min_value2, max_value2)
    elif test_type == "multiply":
        test_problems = generator.generate_multiply_test(count, min_value1, max_value1, min_value2, max_value2)
    elif test_type == "divide":
        test_problems = generator.generate_divide_test(count, min_value1, max_value1, min_value2, max_value2)
    else:
        test_problems = generator.generate_add_test(count, min_value1, max_value1, min_value2, max_value2)
        
    
    json_output = json.dumps(test_problems) 

    print(json_output)

if __name__ == "__main__":
    main()
