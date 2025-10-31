import {create} from 'zustand'

type SortState = {
    value:'latest' | 'low' | 'high',
    setValue:(value:'latest' | 'low' | 'high')=>void
}
export const useSortStore = create<SortState>((set)=>({
    value:'latest',
    setValue:(value)=>set({value})
}))