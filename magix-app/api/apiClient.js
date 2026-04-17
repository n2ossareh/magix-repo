const API_URL = "https://lagged-chlorine-tiger.ngrok-free.dev";
export async function registerUser( email, password) {
  
    console.log("📡 About to call signup API...");
    const res = await fetch(`${API_URL}/api/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const text = await res.text();  
    console.log("RAW RESPONSE:", text);

    // then try parsing
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error("Server did not return JSON");
    }
    if (!res.ok) {
      throw new Error(data.error || "Signup failed");
    }

    return data;
}

export async function loginUser(email, password) {
  try {
    const res = await fetch(`${API_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if(!res.ok) {
      throw new Error(data.error || 'signup failed!');
    }
    return data;
  } catch (err) {
    console.log("registerUser error:", err.message);
    throw err;
  }
}


export async function logoutUser(token) {
  // Optional if you have a logout endpoint
  const res = await fetch(`${API_URL}/api/logout`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  return res.json();
}