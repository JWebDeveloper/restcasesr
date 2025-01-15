import Link from 'next/link';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className="text-center">Welcome to the App</h1>
      <nav className="mt-4">
        <ul className="list-unstyled">
          <li><Link href="/login" legacyBehavior><a className="btn btn-primary w-100 mb-2">Go to Login</a></Link></li>
          <li><Link href="/register" legacyBehavior><a className="btn btn-success w-100 mb-2">Go to Register</a></Link></li>
          <li><Link href="/recoverPassword" legacyBehavior><a className="btn btn-warning w-100">Go to Recover Password</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
