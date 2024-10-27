import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { RoomProvider } from './context/RoomContext.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <RoomProvider>
            <App />
        </RoomProvider>
    </BrowserRouter>
)
