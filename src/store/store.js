import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice'
import fetchEmployeSlice from '../slice/fetchEmployeSlice';
import EditEmployeeSlice  from '../slice/EditEmployeeSlice';
import deleteEmplSlice from '../slice/deleteEmplSlice';

export default configureStore({
    reducer: {counterReducer, fetchEmployeSlice, EditEmployeeSlice, deletedItems: deleteEmplSlice}
})