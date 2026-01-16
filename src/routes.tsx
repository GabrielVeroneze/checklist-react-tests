import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from '@/pages/Home'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
