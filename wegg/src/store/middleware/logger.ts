import { Middleware } from '@reduxjs/toolkit'
import { setLogs } from '../slices/logs'

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type !== 'logs/setLogs') {
    store.dispatch(setLogs({ action, timestamp: new Date().toISOString() }))
  }
  return next(action)
}

export default loggerMiddleware
