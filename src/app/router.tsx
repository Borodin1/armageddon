import { HomePage } from '@/pages/Home/components';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    }
])