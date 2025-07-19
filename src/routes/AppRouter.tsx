import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DidacticUnitCreationPage from "../pages/DidacticUnitCreationPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<DidacticUnitCreationPage />} />
        </Routes>
    )
}

export default AppRouter;