import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType):  UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                let sortedUpByName = [...state].sort((a, b) => a.name.localeCompare(b.name))
                return sortedUpByName
            } else {
                let sortedUpByName = [...state].sort((a, b) => b.name.localeCompare(a.name))
                return sortedUpByName
            }

        }
        case 'check': {
            return state.filter(el => el.age >= 18);
        }
        default:
            return state
    }
}
