import { configureStore } from '@reduxjs/toolkit'
import loggerMiddleware from './middleware/logger'
import employeesReducer from './slices/employees'
import logsReducer from './slices/logs'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    logs: logsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})
