const Home = props => {
  return (
    <div>
      <h1>Hello, world</h1>

      <h5>Env: {process.env.NODE_ENV}</h5>
      <h5>App URI: {process.env.NEXT_PUBLIC_APP_URI}</h5>
    </div>
  );
};

export default Home;
