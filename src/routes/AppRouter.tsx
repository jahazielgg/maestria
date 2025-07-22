import { Route, Routes } from "react-router-dom";
import DidacticUnitCreationPage from "../pages/DidacticUnitCreationPage";
import Sidebar from "../modules/didacticUnit/components/Sidebar";
import { Box } from "@mui/material";

function AppRouter() {
    return (
        <Box className="flex w-full min-h-screen">
            <Sidebar />
            <Box component="main" className="flex-1 overflow-y-auto">
                <Routes>
                    <Route path="/" element={<DidacticUnitCreationPage />} />
                </Routes>
            </Box>
        </Box>
    )
}

export default AppRouter;