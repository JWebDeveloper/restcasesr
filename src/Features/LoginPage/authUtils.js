// export const handleLogin = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
    
//     try {
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const result = await response.json();
//       console.log('Login successful:', result);
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

// export const validateLoginForm = ({ username, password }) => {
//   const errors = {};
//   if (!username) errors.username = "Username is required.";
//   if (username && username.length < 3) errors.username = "Username must be at least 3 characters.";
//   if (!password) errors.password = "Password is required.";
//   if (password && password.length < 6) errors.password = "Password must be at least 6 characters.";
//   return errors;
// };

// export const handleLogin = async ({ username, password }) => {
//   try {
//     // Replace this with your actual login API call
//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) {
//       throw new Error("Invalid username or password.");
//     }

//     const data = await response.json();
//     // Handle successful login (e.g., store token)
//     console.log("Login successful:", data);
//     return true;
//   } catch (error) {
//     console.error("Login error:", error.message);
//     return false;
//   }
// };

export const validateForm = (username, password) => {
  const errors = {};
  if (!username) errors.username = "Username is required.";
  if (username && username.length < 3) errors.username = "Username must be at least 3 characters.";
  if (!password) errors.password = "Password is required.";
  if (password && password.length < 6) errors.password = "Password must be at least 6 characters.";
  return errors;
};

export const loginUser = (username, password) => {
  // Implement actual login logic here, such as API calls or token handling.
  // Placeholder logic for now.
  if (username === "testuser" && password === "password123") {
    return { success: true, message: "Login successful" };
  }
  return { success: false, message: "Invalid credentials" };
};
