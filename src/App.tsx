import Home from "./Views/Home/Home"
import "./App.css"

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider} from 'primereact/api';

function App() {
  return (
    <PrimeReactProvider>

      <Home/>
    </PrimeReactProvider>
  )
}

export default App
