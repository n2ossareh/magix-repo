from database import save_attempt

def score_test(user_id, answers):
    correct = 0
    results = []

    for item in answers:
        is_correct = item["user_answer"] == item["correct_answer"]

        if is_correct:
            correct += 1

        results.append({
            "question": item["question"],
            "user_answer": item["user_answer"],
            "correct_answer": item["correct_answer"],
            "correct": is_correct
        })

        save_attempt(user_id, item, is_correct)

    total = len(answers)
    percent = round((correct / total) * 100)

    return {
        "correct": correct,
        "incorrect": total - correct,
        "score": percent,
        "details": results
    }