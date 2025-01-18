
import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginPages = () => {
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
      <div class={styles.watermarked}>
        <img src="/assets/images/onboard.png" className="img-fluid" alt="Photo" />
      </div>
      <div className={styles.contents}>
        <div className="text-end p-3">
          Need Help?<span className="text-primary">  Contact Us </span>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className={`${styles.formBlock} mx-auto`}>
                <div className="text-center mb-5">
                  <img src="/assets/images/LoginLogo.png" alt="logo" className="mx-auto mb-3" />

                </div>
                <form onSubmit={handleSubmit}>
                  <h2 className="fs-1">Sign into your Account</h2>
                  <p className="fs-5 ">Access to your Dispatcher Dashboard</p>
                  <div className={`${styles.formGroup} first`}>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control card" style={{ padding: "1rem" }}
                      placeholder="Username"
                    />
                    {errors.username && <div className={styles.errorMessage}>{errors.username}</div>}
                  </div>
                  <div className={`${styles.formGroup} last mb-3`}>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control card" style={{ padding: "1rem" }}
                      placeholder="Password"
                    />
                    {errors.password && <div className={styles.errorMessage}>{errors.password}</div>}
                  </div>

                  <div className="d-flex mb-1 justify-content-between align-items-center">
                    <label className={`${styles.control} control--checkbox mb-3 mb-sm-0`}>
                      <input type="checkbox" className="me-3" defaultChecked />
                      <span className={styles.caption}>Remember me</span>
                    </label>
                    <span className="ml-auto"> <Link href="/recoverPassword" className={styles.forgotPass + " text-decoration-none py-2 ms-2"}>
                    Forgot Password
                    </Link>
                    </span>
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className={styles.CustomBtn + " py-2 col-12"} style={{ padding: "1rem" }}>
                      Log In
                    </button>
                  </div>

                  <div className="d-flex m-3 justify-content-center align-items-center">
                    <span className="ml-auto text-gray "> Do not have account? </span>
                    <Link href="/register" className=" text-decoration-none py-2 ms-2 text-primary fw-bold">
                      Register
                    </Link>
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

export default LoginPages;


// import React, { useState } from "react";
// import styles from "./LoginPage.module.css"; // Import CSS module
// import { useRouter } from "next/router";
// import Link from "next/link";

// const LoginPages = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const router = useRouter();

//   const validateForm = () => {
//     const errors = {};
//     if (!username) errors.username = "Username is required.";
//     if (username && username.length < 3) errors.username = "Username must be at least 3 characters.";
//     if (!password) errors.password = "Password is required.";
//     if (password && password.length < 6) errors.password = "Password must be at least 6 characters.";
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       // Perform login logic here
//       console.log("Login successful");
//       router.push("/dashboard"); // Redirect on successful login
//     }
//   };

//   return (
//     <div className={`${styles.half} d-md-flex`}>
//       <div class={styles.watermarked}>
//         <img src="/assets/images/onboard.png" className="img-fluid" alt="Photo" />
//       </div>
//       <div className={styles.contents}>
//         <div className="text-end p-3">
//           Need Help?<span className="text-primary">  Contact Us </span>
//         </div>
//         <div className="container">
//           <div className="row align-items-center justify-content-center">
//             <div className="col-md-12">
//               <div className={`${styles.formBlock} mx-auto`}>
//                 <div className="text-center mb-5">
//                   <img src="/assets/images/LoginLogo.png" alt="logo" className="mx-auto mb-3" />

//                 </div>
//                 <form onSubmit={handleSubmit}>
//                   <h2 className="fs-1">Sign into your Account</h2>
//                   <p className="fs-5 ">Access to your Dispatcher Dashboard</p>
//                   <div className={`${styles.formGroup} first`}>
//                     <input
//                       type="text"
//                       id="username"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       className="form-control card" style={{ padding: "1rem" }}
//                       placeholder="Username"
//                     />
//                     {errors.username && <div className={styles.errorMessage}>{errors.username}</div>}
//                   </div>
//                   <div className={`${styles.formGroup} last mb-3`}>
//                     <input
//                       type="password"
//                       id="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="form-control card" style={{ padding: "1rem" }}
//                       placeholder="Password"
//                     />
//                     {errors.password && <div className={styles.errorMessage}>{errors.password}</div>}
//                   </div>

//                   <div className="d-flex mb-1 justify-content-between align-items-center">
//                     <label className={`${styles.control} control--checkbox mb-3 mb-sm-0`}>
//                       <input type="checkbox" className="me-3" defaultChecked />
//                       <span className={styles.caption}>Remember me</span>
//                     </label>
//                     <span className="ml-auto"> <Link href="/recoverPassword" className={styles.forgotPass + " text-decoration-none py-2 ms-2"}>
//                     Forgot Password
//                     </Link>
//                     </span>
//                   </div>
//                   <div className="col-md-12 text-center">
//                     <button type="submit" className={styles.CustomBtn + " py-2 col-12"} style={{ padding: "1rem" }}>
//                       Log In
//                     </button>
//                   </div>

//                   <div className="d-flex m-3 justify-content-center align-items-center">
//                     <span className="ml-auto text-gray "> Do not have account? </span>
//                     <Link href="/register" className=" text-decoration-none py-2 ms-2 text-primary fw-bold">
//                       Register
//                     </Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPages;
