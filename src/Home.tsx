import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <>
    <h1>HOME</h1>
    <button onClick={() => history.push("/clicktest/5")}>
      Start Click Test
    </button>
    </>
  );
}

export default Home;
