import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { Theme } from './Components/Includes/Theme/Theme'
import PageNotFind from './pages/Errors/PageNotFind'

import { RoutesMain } from './routes/RoutesMain'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {RoutesMain}
                <Route path="*" element={<PageNotFind />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
