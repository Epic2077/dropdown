import DropdownInput from "./components/Input/Input";

function App() {
  return (
    <>
      {/* Just to show that I could use useContext */}
      {/* <DropdownProvider> */}
      <div className="center">
        <DropdownInput />
      </div>
      {/* </DropdownProvider> */}
    </>
  );
}

export default App;
