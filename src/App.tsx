import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}



export default App;
