import { Theme } from "@react-navigation/native"


type ThemeAction = 
    | {type: 'set_dark_theme'}
    | {type: 'set_light_theme'}


export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.7)',
    colors:{
        primary: 'green',
        background: 'white',
        card: 'blue',
        text: 'green',
        border: 'pink',
        notification: 'teal',
    }
}

export const darkTheme:ThemeState = {
    currentTheme:'dark',
    dark: true,
    dividerColor:'orange',
    colors:{
        primary: 'orange',
        background: 'black',
        card: 'blue',
        text: 'white',
        border: 'pink',
        notification: 'teal',
    }
}

export const themeReducer = (state:ThemeState, action:ThemeAction):ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            return {
                ...lightTheme
            }
        
        case 'set_dark_theme':
            return{
                ...darkTheme
            }
    
        default:
            return state;
    }
}