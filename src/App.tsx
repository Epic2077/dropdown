import DropdownInput from "./components/Input/Input";
import { DropdownProvider } from "./utils/DropdownContext";

function App() {
  return (
    <DropdownProvider>
      <div className="center">
        <DropdownInput />
      </div>
    </DropdownProvider>
  );
}

export default App;
