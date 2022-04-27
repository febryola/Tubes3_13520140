import Home from '../page/Home'
import Disease from '../page/Disease'
import History from '../page/History'
import About from '../page/About'
import Prediction from '../page/About'

export const AllRoutes = [
    {
        label: 'Home',
        path: '/',
        component: Home,
    }, {
        label: 'Disease',
        path: '/Disease',
        component: Disease,
    }, {
        label: 'History',
        path: '/History',
        component: History,
    }, {
        label: 'Prediction',
        path: '/Prediction',
        component: Prediction,
    }, {
        label: 'About',
        path: '/About',
        component: About,
    }
]

