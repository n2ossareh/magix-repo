from abc import ABC, abstractmethod

# Abstract Base Class
class Problem(ABC):
    def __init__(self, op1, op2, userAnswer):
        self.op1 = op1
        self.op2 = op2
        self.userAnswer = userAnswer
        

    def __str__(self):
        return f"{self.__class__.__name__}({self.op1}, {self.op2}, {self.userAnswer})"

    def swap(self):
        self.op1, self.op2 = self.op2, self.op1
   
    @abstractmethod
    def create(self):
        pass

class Add(Problem):
    def create(self):
        return ['Add', self.op1, self.op2, self.userAnswer]

class Subtract(Problem):
    def create(self):
        if (self.op2 >= self.op1):
            self.swap()
        return ['Subtract', self.op1, self.op2, self.userAnswer]

class Multiply(Problem):
    def create(self):
        return ['Multiply', self.op1, self.op2, self.userAnswer]
    
class Divide(Problem):
    def create(self):
        if(self.op2 > self.op1):
            self.swap() 
        
        if(self.op2 == 0):
            self.op2 = 1

        return ['Divide', self.op1, self.op2, self.userAnswer]

