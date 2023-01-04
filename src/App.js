import Summary from "./components/Summary/Summary";
import {createGlobalStyle} from "styled-components"
import AddShifts from "./container/AddShifts/AddShifts";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Pacifico', cursive;
  }
`

function App() {
  return (
    <div style={{margin:'16px 12px 16px 12px'}}>
      <GlobalStyle />
      <Summary />
      <AddShifts />
    </div>
  );
}

export default App;
