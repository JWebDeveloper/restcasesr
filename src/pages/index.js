export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/transportDirect", // Redirects to the `/login` route
      permanent: false,      // Marks the redirection as temporary
    },
  };
}

export default function Home() {
  // This component won't render due to redirection
  return null
}

