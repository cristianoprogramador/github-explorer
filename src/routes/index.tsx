import React from 'react'
import { Routes, Route} from 'react-router-dom'

import DashBoard from '../pages/Dashboard'
import Repository from '../pages/Repository'

const RoutesApp: React.FC = () => (
    <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/repository' element={<Repository />} />
    </Routes>
)

export default RoutesApp