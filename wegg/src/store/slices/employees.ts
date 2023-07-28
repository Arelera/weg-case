import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Employee } from '../types'

type EmployeesState = {
  data: Employee[]
  votes: Record<string, number>
}

const initialState: EmployeesState = {
  data: [],
  votes: {},
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: () => {},
    upvoteEmployee: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.votes[payload.id] = (state.votes[payload.id] || 0) + 1
    },
    downvoteEmployee: (state, { payload }: PayloadAction<{ id: string }>) => {
      if (state.votes[payload.id]) {
        state.votes[payload.id] = state.votes[payload.id] - 1
      }
    },
  },
})

export const { setEmployees, upvoteEmployee, downvoteEmployee } =
  employeesSlice.actions
export default employeesSlice.reducer
