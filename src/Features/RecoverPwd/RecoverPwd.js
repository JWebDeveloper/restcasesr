import { handleRecovery } from './recoverUtils';
import styles from './RecoverPwd.module.css';

export default function RecoverPwd() {
  return (
    <div className={styles.container}>
      <h1 className="text-center">Recover Password</h1>
      <form onSubmit={handleRecovery} className={styles.form}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <button type="submit" disabled className="btn btn-warning w-100">Recover Password</button>
      </form>
    </div>
  );
}