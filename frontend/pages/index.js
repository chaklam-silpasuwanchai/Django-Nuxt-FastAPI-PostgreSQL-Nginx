export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/home',
      permanent: false, // Set to true for permanent redirect (HTTP 301)
    },
  };
}

// This component can be empty or contain a loading message, as it won't be rendered
const Index = () => null;

export default Index;