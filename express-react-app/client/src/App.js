import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Theme } from './components/app/Theme'
import PageNotFind from './pages/Errors/PageNotFind'

import { RoutesMain } from './routes/RoutesMain'

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <Routes>
                    {RoutesMain}
                    <Route path="*" element={<PageNotFind />} />
                </Routes>
            </BrowserRouter>
        </Theme>
    )
}

export default App
