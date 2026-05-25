import os
from supabase import create_client

url = "https://qywrnbvsvmbdfddykvug.supabase.co";
key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

supabase = create_client(url, key)

def save_attempt(user_id, item, is_correct):
    supabase.table("attempts").insert({
        "user_id": user_id,
        "question": item["question"],
        "user_answer": item["user_answer"],
        "correct_answer": item["correct_answer"],
        "correct": is_correct
    }).execute()