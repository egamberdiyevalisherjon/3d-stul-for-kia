import './App.css';
import ModelViewer from './Viewer';

function App() {
  return (
    <div className="App">
      <ModelViewer scale="7" position={[0, -3, 0]} modelPath={"/stul.glb"} />
    </div>
  );
}

export default App;
