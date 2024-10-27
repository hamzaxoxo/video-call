import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Meeting from "./Meeting";

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meeting/:id" element={<Meeting />} />
        </Routes>
    )
}
