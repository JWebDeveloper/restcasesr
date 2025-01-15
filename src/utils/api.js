export const authenticateUser = async (Uid, pwd, isRemember) => {
    try {
      const response = await fetch('/api/authenticateUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Uid, pwd, isRemember }),
      });
      return await response.json();
    } catch (error) {
      console.error('Authentication failed:', error);
      throw error;
    }
  };
  
  export const registerNewUser = async (email, pwd, Role, phone, recoveryEmail) => {
    try {
      const response = await fetch('/api/registerNewUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pwd, Role, phone, recoveryEmail }),
      });
      return await response.json();
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };
  
  export const RecoverUser = async (email, RecoverEmail) => {
    try {
      const response = await fetch('/api/recoverUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, RecoverEmail }),
      });
      return await response.json();
    } catch (error) {
      console.error('Password recovery failed:', error);
      throw error;
    }
  };
  