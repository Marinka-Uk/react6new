import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAllTasks = createAsyncThunk(
    'tasks/getAllTasks',
    async() => {
        return fetch('https://68dab5e523ebc87faa3107d5.mockapi.io/tasks').then((responce) => {responce.json()})

    }
)

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async(task, { rejectedWithValue }) => {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(task),
        }
        try{
            const responce = await fetch('https://68dab5e523ebc87faa3107d5.mockapi.io/tasks')
            return await responce.json()
        } catch (error) {
            return rejectedWithValue("Сталася помилка")
        }
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async(task, { rejectedWithValue }) => {
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(task),
        }
        try{
            const responce = await fetch(`https://68dab5e523ebc87faa3107d5.mockapi.io/tasks/${task.id}`,options)
            return await responce.json()
        } catch (error) {
            return rejectedWithValue("Сталася помилка")
        }
    }
)


export const switchtask = createAsyncThunk(
    'tasks/switchTask',
    async(task, { rejectedWithValue }) => {
        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({...task, copleted: !task.completed}),
        }
        try{
            const responce = await fetch(`https://68dab5e523ebc87faa3107d5.mockapi.io/tasks/${task.id}`,options)
            return await responce.json()
        } catch (error) {
            return rejectedWithValue("Сталася помилка")
        }
    }
)

