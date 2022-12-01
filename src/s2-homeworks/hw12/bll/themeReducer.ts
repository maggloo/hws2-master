export type ThemeSateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): ThemeSateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}


type ActionType = ReturnType<typeof changeThemeId>;
export const changeThemeId = (id: number): { type: 'SET_THEME_ID', id: number } => ({type: 'SET_THEME_ID', id} as const) // fix any
