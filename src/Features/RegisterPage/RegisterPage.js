import { handleRegister } from './registerUtils';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <h1 className="text-center">Register</h1>
      <form onSubmit={handleRegister} className={styles.form}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter password" />
        </div>
        <button type="submit" disabled className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}