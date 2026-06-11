import {Routes, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import AI_Assistant from '../pages/AI_Assistant';
import Analytics from '../pages/Analytics';
import MachineHealth from '../pages/MachineHealth';
import Predictions from '../pages/Predictions';
import Settings from '../pages/Settings';
import DashboardLayout from '../layouts/DashboardLayout';


function AppRoutes() {
    return (
        <Routes>
            <Route element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="machine-health" element={<MachineHealth />} />
                <Route path="ai-assistant" element={<AI_Assistant />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="predictions" element={<Predictions />} />
                <Route path="settings" element={<Settings />} />
            </Route>   
        </Routes>
    );
}

export default AppRoutes;