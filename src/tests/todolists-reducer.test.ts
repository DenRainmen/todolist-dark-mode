import { AddTodolistAC, ChangeTodolistFilterAC, ChangeTodolistTitleAC, RemoveTodolistAC, todolistsReducer} from './todolists-reducer'
import { v1 } from 'uuid'
import { TodoListType } from '../App'


let todolistId1 = v1()
let todolistId2 = v1()

const startState: TodoListType[] = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' }
]





//test 1

test('correct todolist should be removed',
    () => {


        const testResult = todolistsReducer(startState, (RemoveTodolistAC(todolistId1)))

        expect(testResult.length).toBe(1)
        expect(testResult[0].id).toBe(todolistId2)
    })

//test 2

test("new todolist should be adding", () => {

    const action = AddTodolistAC()

    const testResult = todolistsReducer(startState, action)

    expect(testResult.length).toBe(3)
})


//test 3

test("todolist should change his title ", () => {

    const action = ChangeTodolistTitleAC(todolistId1, "New todolist title")

    const testResult = todolistsReducer(startState, action)

    expect(testResult[0].title).toBe("New todolist title")
})


//test 4

test("todolist filter should change ", ()=>{


const action = ChangeTodolistFilterAC(todolistId1,"active")

    const testResult = todolistsReducer(startState, action)

    expect(testResult[0].filter).toBe("active")
    expect(testResult[1].filter).toBe("all")
    console.log(testResult)

})