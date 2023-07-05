import {configureStore} from '@reduxjs/toolkit'
import UniversiteReducer from "./Reducer/Universitereducers"  


const Store = configureStore({
    reducer: {
        ListUniversite: UniversiteReducer

    }
})
export default Store