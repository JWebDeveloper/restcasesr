export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/login", // Redirects to the `/login` route
      permanent: false,      // Marks the redirection as temporary
    },
  };
}

export default function Home() {
  // This component won't render due to redirection
  return null
}

// // old working code
// import LoginPage from '../Features/LoginPage/LoginPage';

// export default function Home() {
//   return <>
//   <LoginPage />;
// </>
// }
