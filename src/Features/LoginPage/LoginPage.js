
import React, { useState } from "react";
import styles from "./LoginPage.module.css"; // Import CSS module
import { useRouter } from "next/router";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateForm = () => {
    const errors = {};
    if (!username) errors.username = "Username is required.";
    if (username && username.length < 3) errors.username = "Username must be at least 3 characters.";
    if (!password) errors.password = "Password is required.";
    if (password && password.length < 6) errors.password = "Password must be at least 6 characters.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Perform login logic here
      console.log("Login successful");
      router.push("/dashboard"); // Redirect on successful login
    }
  };

  return (
    <div className={`${styles.half} d-md-flex`}>
      <div
        className={styles.bg}
        style={{ backgroundImage: "url('/assets/images/onboard.png')" }}
      ></div>
      <div className={styles.contents}>

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className={`${styles.formBlock} mx-auto`}>
                <div className="text-center mb-5">
                  <img src="/assets/images/LoginLogo.png" alt="logo" className="mx-auto mb-3" style={{ width: '100px' }} />
                  <h3 className="fs-4">Sign into your Account</h3>
                  <h6 className="fs-6 ">Access to your Dispatcher Account</h6>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className={`${styles.formGroup} first`}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control"
                      placeholder="your-email@gmail.com"
                    />
                    {errors.username && <div className={styles.errorMessage}>{errors.username}</div>}
                  </div>
                  <div className={`${styles.formGroup} last mb-3`}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Password"
                    />
                    {errors.password && <div className={styles.errorMessage}>{errors.password}</div>}
                  </div>

                  <div className="d-flex mb-5 justify-content-between align-items-center">
                    <label className={`${styles.control} control--checkbox mb-3 mb-sm-0`}>
                      <input type="checkbox" defaultChecked />
                      <span className={styles.caption}>Remember me</span>
                    </label>
                    <span className="ml-auto">
                      <a href="/recoverPassword" className={styles.forgotPass}>
                        Forgot Password
                      </a>
                    </span>
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn py-2 col-12 btn-primary">
                      Log In
                    </button>
                  </div>

                  <div className="d-flex m-3 justify-content-center align-items-center">
                    <span className="ml-auto text-gray "> Do not have account register here? </span>
                    <a href="/register" className=" py-2 ms-4">
                      Register
                    </a>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


// import { useState } from 'react';
// import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     id: '',
//     password: '',
//     rememberMe: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.id) newErrors.id = 'Username is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       // Handle successful login here
//       console.log('Form submitted:', formData);
//       // Reset form or redirect as needed
//     }
//   };

//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100">
//       <div className="card p-4" style={{ width: '400px' }}>
//         <img src="/assets/images/LoginLogo.png" alt="logo" className="mx-auto mb-3" style={{ width: '100px' }} />
//         <h2 className="text-center">Sign In to your account</h2>
//         <p className="text-center text-muted">Access Your Dispatcher Dashboard</p>

//         <form onSubmit={handleSubmit}>
//           {/* Username Field */}
//           <div className="mb-3">
//             <input
//               type="text"
//               name="id"
//               placeholder="Username"
//               value={formData.id}
//               onChange={handleChange}
//               className="form-control"
//             />
//             {errors.id && <div className="text-danger">{errors.id}</div>}
//           </div>

//           {/* Password Field */}
//           <div className="mb-3">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="form-control"
//             />
//             {errors.password && <div className="text-danger">{errors.password}</div>}
//           </div>

//           {/* Remember Me & Forgot Password */}
//           <div className="d-flex justify-content-between mb-3">
//             <label className="form-check-label">
//               <input
//                 type="checkbox"
//                 name="rememberMe"
//                 checked={formData.rememberMe}
//                 onChange={handleChange}
//                 className="form-check-input"
//               />
//               Remember Me
//             </label>
//             <Link href="/forgot-password" className="text-primary">Forgot Password?</Link>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="btn btn-primary w-100"
//           >
//             Login
//           </button>
//         </form>

//         {/* Register Link */}
//         <p className="text-center mt-3">
//           Don’t have an account?{' '}
//           <Link href="/register" className="text-primary">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;