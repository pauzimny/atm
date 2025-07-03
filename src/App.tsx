import './App.css';
import { ATMContainer } from './ATMContainer';
import { ATMMachineProvider } from './context/ATMMachineProvider';

function App() {
  return (
    <ATMMachineProvider>
      <ATMContainer />
    </ATMMachineProvider>
  );
}

export default App;
