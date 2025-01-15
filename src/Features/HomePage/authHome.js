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
  