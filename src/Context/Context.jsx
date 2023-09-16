import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from 'axios'

const DentistStates = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTISTS':
            return { ...state, dentists: action.payload }
        case 'GET_DENTIST':
            return { ...state, dentist: action.payload }
        case 'ADD_FAV':
            if (!state.favs.some(fav => fav.id === action.payload.id)) {
                return { ...state, favs: [...state.favs, action.payload] };
            } else {
                return state;
            }
        case 'REMOVE_FAV':
            const updatedFavs = state.favs.filter(fav => fav.id !== action.payload.id);
            localStorage.setItem('favs', JSON.stringify(updatedFavs)); // Actualiza el localStorage
            return { ...state, favs: updatedFavs };
        case 'SWITCH_THEME':
            return { ...state, theme: !state.theme }
        default:
            throw new Error("Accion desconocida")
    }
}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialState = {
    dentists: [],
    dentist: {},
    favs: initialFavState,
    theme: true,
}

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(url)
            .then(res => dispatch({ type: 'GET_DENTISTS', payload: res.data }))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    return (
        <DentistStates.Provider value={{ dispatch, state }}>
            {children}
        </DentistStates.Provider>
    )
}

export default Context

export const useDentistStates = () => useContext(DentistStates)
