// src/features/RecoverPwd/recoverUtils.js
export const handleRecovery = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
  
    try {
      const response = await fetch('/api/recoverPassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      console.log('Recovery email sent:', result);
    } catch (error) {
      console.error('Recovery failed:', error);
    }
  };