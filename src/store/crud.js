import { createSlice } from '@reduxjs/toolkit'

const shopCrud = createSlice({
    name: 'crud',
    initialState: { // use < state.itemsList > get value
        items: [],
    },
    reducers: {
        create(state, action) {
            // ex:
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (existingItem) {
                return "data existing"
            }else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title
                })
            }

        },
        read(state, action) { 

        },
        editor(state, action) { 

        },
        remove(state, action) { 
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (existingItem) {
                /*
                    true, action...
                */
            }
        },

        
    }
})


export const { create, read, editor, remove } = shopCrud.actions;
export default shopCrud;