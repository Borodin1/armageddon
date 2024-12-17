import { HomePage } from '@/pages/Home/components';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            }
        ]
    }
])