import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Log } from '../types'

type LogsState = {
  data: Log[]
}

const initialState: LogsState = {
  data: [],
}

export const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    setLogs: (state, { payload }: PayloadAction<Log>) => {
      state.data.push(payload)
    },
  },
})

export const { setLogs } = logsSlice.actions
logsSlice.caseReducers.setLogs
export default logsSlice.reducer
