// & We get runtime error if we try to import libraries in this file thus usage of any library is not possible with this `common` folder approach which we have setup with the help of "inlucde" key in `tsconfig.json` of each project.
// const express from 'express'
// console.log('express?', express) // (RUNTIME) Error: Cannot find module 'express'

// Works well in both frontend and backend projects
export const variable1 = "Hello from `common/utils.ts` file 6:28pm - 12 Jan 2025"

export type UserType = {
    name: string,
    age: number
}