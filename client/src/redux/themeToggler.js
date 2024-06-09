import { createSlice } from '@reduxjs/toolkit'

let themeTogglerSlice = createSlice({
    name: 'themeToggler',
    initialState: false,
    reducers: {
        setThemeToggler: (state) => {
            return !state
        }
    }
})

export const { setThemeToggler } = themeTogglerSlice.actions

export default themeTogglerSlice.reducer