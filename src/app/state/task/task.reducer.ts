import { createReducer, on } from '@ngrx/store';
import {updateReq, updateSuccess, updateReset} from "./task.action";

export const initialState = {
    loading : false,
    isUpdate:false
};

export const taskReducer = createReducer(
    initialState,
    on(updateReq, (state) => ({...state , loading : true}) ),
    on(updateSuccess, (state) => ({...state , loading : false, isUpdate : true}) ),
    on(updateReset, (state) => ({...state , loading : false, isUpdate : false}) ),
)
