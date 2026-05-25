from fastapi import FastAPI
from pydantic import BaseModel
from generator import generate_add_test
from generator import generate_subtract_test
from generator import generate_multiply_test
from generator import generate_divide_test
from scorer import score_test

app = FastAPI()

class GenerateRequest(BaseModel):
    count: int = 5

class SubmitRequest(BaseModel):
    user_id: str
    answers: list

@app.post("/generate-add-test")
def generate(req: GenerateRequest):
    problems = generate_add_test(req.count, 0, 12, 0, 12, None) 
    return {"problems": problems}

@app.post("/generate-subtract-test")
def generate(req: GenerateRequest):
    problems = generate_subtract_test(req.count, 0, 12, 0, 12, None) 
    return {"problems": problems}

@app.post("/generate-multiply-test")
def generate(req: GenerateRequest):
    problems = generate_multiply_test(req.count, 0, 12, 0, 12, None) 
    return {"problems": problems}

@app.post("/generate-divide-test")
def generate(req: GenerateRequest):
    problems = generate_divide_test(req.count, 0, 12, 0, 12, None) 
    return {"problems": problems}

@app.post("/submit-test")
def submit(req: SubmitRequest):
    result = score_test(req.user_id, req.answers)
    return 