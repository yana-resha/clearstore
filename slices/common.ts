import { createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  sessionId: string
}

const initialState: initialStateType = {
  sessionId: 'id' + new Date().getTime(),
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updateSession: (state) => {
      state.sessionId = 'id' + new Date().getTime()
    },
  },
})

export const { updateSession } = commonSlice.actions
export const commonReducer = commonSlice.reducer
