import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IOptions } from "../../types/types";

interface IFilterState {
    inputs: Record<string, string>;
    options: [{
        specialityOptions: IOptions[];
        courseOptions: IOptions[];
        noveltyOptions: IOptions[];
    }]
}

const initialState: IFilterState = {
    inputs: {
        speciality: '',
        course: '',
        novelty: '',
    },
    options: [
        {
            specialityOptions: [
                {text: 'Frontend', value: 'Frontend'}, 
                {text: 'Backend', value: 'Backend'},
                {text: 'Design', value: 'Design'},
                {text: 'Не имеет значения', value: ''}
            ],
            courseOptions: [
                {text: '1-ый курс', value: '1-ый курс'}, 
                {text: '2-ой курс', value: '2-ой курс'},
                {text: '3-ий курс', value: '3-ий курс'}, 
                {text: '4-ый курс', value: '4-ый курс'}, 
                {text: 'Не имеет значения', value: ''}
            ],
            noveltyOptions: [
                {text: 'Новые', value: 'new'}, 
                {text: 'Старые', value: 'old'}
            ]
        }
    ]
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSelectValue: (state, action: PayloadAction<{name: string, value: string}>) => {
            state.inputs[action.payload.name] = action.payload.value
        }
    }
})

export default filterSlice.reducer
export const {setSelectValue} = filterSlice.actions