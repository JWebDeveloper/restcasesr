import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./RegisterPageStep2.module.css"; // Import CSS module
import Link from "next/link";

export default function RegisterPageStep2() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gstnNumber, setGstnNumber] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const referalCode = localStorage.getItem("referalCode");
    if (!username || !password || !referalCode) {
      router.push("/register");
    }
  }, [router]);

  const validateStep2 = () => {
    const errors = {};
    if (!firstName) errors.firstName = "First Name is required.";
    if (!lastName) errors.lastName = "Last Name is required.";
    if (!companyName) errors.companyName = "Company Name is required.";
    if (!address1) errors.address1 = "Address 1 is required.";
    if (!city) errors.city = "City is required.";
    if (!postalCode) errors.postalCode = "Postal Code is required.";
    if (!province) errors.province = "Province is required.";
    if (!phoneNumber) errors.phoneNumber = "Phone Number is required.";
    if (!gstnNumber) errors.gstnNumber = "GSTN Number is required.";
    return errors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validateStep2();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Registration successful", {
        firstName,
        lastName,
        companyName,
        address1,
        address2,
        city,
        postalCode,
        province,
        phoneNumber,
        gstnNumber,
      });
      alert("Registration successful");
      router.push("/driver"); // Redirect to dashboard
    }
  };

  return (
    <div className={`${styles.half} d-md-flex`}>
      <div className={styles.watermarked}>
        <img src="/assets/images/onboard.png" className="img-fluid" alt="Photo" />
      </div>
      <div className={styles.contents}>
        <div className="text-end p-3">
          Need Help?<span className="text-primary"> Contact Us </span>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className={`${styles.formBlock} mx-auto`}>
                <form onSubmit={handleRegister}>
                  <h2 className="fs-1 fs-bold text-center">Continue Login</h2>
                  <p className="fs-5 ">Just a few details needed before you proceed. </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} first`}>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="First Name"
                        />
                        {errors.firstName && <div className={styles.errorMessage}>{errors.firstName}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} last mb-3`}>
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="Last Name"
                        />
                        {errors.lastName && <div className={styles.errorMessage}>{errors.lastName}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} last mb-3`}>
                        <input
                          type="text"
                          id="companyName"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="Company Name"
                        />
                        {errors.companyName && <div className={styles.errorMessage}>{errors.companyName}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} last mb-3`}>
                        <input
                          type="text"
                          id="address1"
                          value={address1}
                          onChange={(e) => setAddress1(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="Address 1"
                        />
                        {errors.address1 && <div className={styles.errorMessage}>{errors.address1}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} last mb-3`}>
                        <input
                          type="text"
                          id="address2"
                          value={address2}
                          onChange={(e) => setAddress2(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="Address 2"
                        />
                        {errors.address2 && <div className={styles.errorMessage}>{errors.address2}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} last mb-3`}>
                        <input
                          type="text"
                          id="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="City"
                        />
                        {errors.city && <div className={styles.errorMessage}>{errors.city}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} last mb-3`}>
                        <input
                          type="text"
                          id="postalCode"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="Postal Code"
                        />
                        {errors.postalCode && <div className={styles.errorMessage}>{errors.postalCode}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} last mb-3`}>
                        <input
                          type="text"
                          id="province"
                          value={province}
                          onChange={(e) => setProvince(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="Province"
                        />
                        {errors.province && <div className={styles.errorMessage}>{errors.province}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} last mb-3`}>
                        <input
                          type="text"
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="Phone Number"
                        />
                        {errors.phoneNumber && <div className={styles.errorMessage}>{errors.phoneNumber}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`${styles.formGroup} last mb-3`}>
                        <input
                          type="text"
                          id="gstnNumber"
                          value={gstnNumber}
                          onChange={(e) => setGstnNumber(e.target.value)}
                          className="form-control card"
                          style={{ padding: "1rem" }}
                          placeholder="GSTN Number"
                        />
                        {errors.gstnNumber && <div className={styles.errorMessage}>{errors.gstnNumber}</div>}
                      </div>
                    </div>
                  </div>


                  <div className="col-md-6 text-center mb-3  pe-2">
                    <button type="submit" className={styles.CustomBtn + " "} >
                      Continue
                    </button>
                  </div>

                  <div className="d-flex justify-content-start align-items-center">
                    <span className={styles.responsiveText +" ml-auto text-gray "}> Do not wish to continue? </span>
                    <Link href="/login" className={styles.responsiveText +" text-decoration-none py-2 ms-2 text-primary fw-bold"}>
                      Sign Out
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
}

// import React, { useState } from "react";
// import styles from "../LoginPage/LoginPage.module.css"; // Import CSS module
// import { useRouter } from "next/router";
// import Link from "next/link";


// export default function RegisterPageStep2() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");
//   const [referalCode, setReferalCode] = useState("");
//   const [errors, setErrors] = useState({});
//   const router = useRouter();

//   const validateForm = () => {
//     const errors = {};
//     if (!username) errors.username = "Email is required.";
//     if (username && username.length < 3) errors.username = "Email must be at least 8 characters.";
//     if (!password) errors.password = "Password is required.";
//     if (!confirmpassword) errors.confirmpassword = "confirm Password is required.";
//     if (!referalCode) errors.referalCode = "referalCode is required.";
//     if (password && password.length < 6) errors.password = "Password must be at least 6 characters.";
//     return errors;
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       // Perform login logic here
//       console.log("Registeration successful");
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
//                 <form onSubmit={handleRegister} >
//                   <h2 className="fs-1 text-center">Registeration</h2>
//                   <p className="fs-5 ">Signup for your dispatcher account today!</p>
//                   <div className={`${styles.formGroup} first`}>
//                     <input
//                       type="text"
//                       id="email"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       className="form-control card" style={{ padding: "1rem" }}
//                       placeholder="Email"
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
//                   <div className={`${styles.formGroup} last mb-3`}>
//                     <input
//                       type="password"
//                       id="confirmpassword"
//                       value={confirmpassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       className="form-control card" style={{ padding: "1rem" }}
//                       placeholder="Confirm Password"
//                     />
//                     {errors.password && <div className={styles.errorMessage}>{errors.confirmpassword}</div>}
//                   </div>
//                   <div className={`${styles.formGroup} last mb-3`}>
//                     <input
//                       type="text"
//                       id="referalcode"
//                       value={referalCode}
//                       onChange={(e) => setReferalCode(e.target.value)}
//                       className="form-control card" style={{ padding: "1rem" }}
//                       placeholder="Referal Code"
//                     />
//                     {errors.referalCode && <div className={styles.errorMessage}>{errors.referalCode}</div>}
//                   </div>


//                   <div className="col-md-12 text-center">
//                     <button type="submit" className={styles.CustomBtn + " py-2 col-12"} style={{ padding: "1rem" }}>
//                       Register
//                     </button>
//                   </div>

//                   <div className="d-flex m-3 justify-content-center align-items-center">
//                     <span className="ml-auto text-gray "> Already have an account? </span>
//                     <Link href="/login" className=" text-decoration-none py-2 ms-2 text-primary fw-bold">
//                        Login
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
// }

// // // old working code
// // import { handleRegister } from './registerUtils';
// // import styles from './RegisterPage.module.css';

// // export default function RegisterPage() {
// //   return (
// //     <div className={styles.container}>
// //       <h1 className="text-center">Register</h1>
// //       <form onSubmit={handleRegister} className={styles.form}>
// //         <div className="mb-3">
// //           <label htmlFor="username" className="form-label">Username</label>
// //           <input type="text" className="form-control" id="username" placeholder="Enter username" />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="email" className="form-label">Email address</label>
// //           <input type="email" className="form-control" id="email" placeholder="Enter email" />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="password" className="form-label">Password</label>
// //           <input type="password" className="form-control" id="password" placeholder="Enter password" />
// //         </div>
// //         <button type="submit" disabled className="btn btn-success w-100">Register</button>
// //       </form>
// //     </div>
// //   );
// // }