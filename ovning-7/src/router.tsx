import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/RootLayouts'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Songs from './pages/Songs'
import SongDetails from './pages/SongDetails'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'songs',
                element: <Songs />
            },
            {
                path: 'songs/:id',
                element: <SongDetails />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router
