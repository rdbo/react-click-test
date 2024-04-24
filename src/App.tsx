import ClickTest from "./components/ClickTest";

function App() {
  return (
      <main>
        <h1 className="font-bold text-2xl">Hello World</h1>
        <ClickTest timeSecs={5} onFinish={(cps) => alert(cps)}/>
      </main>
  );
}

export default App;
