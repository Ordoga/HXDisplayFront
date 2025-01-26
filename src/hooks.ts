import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../src/store/store.ts'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
