import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.scss';
import { Header } from "./components/header/header";

function App() {
  return (
    <>
        <BrowserRouter>
        <Header />
        </BrowserRouter>
    </>
  );
}

export default App;
