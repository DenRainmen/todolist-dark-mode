import {ChangeEvent, FC} from 'react';
import {FilterValuesType} from "./App";
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";
import {
    Button,
    Checkbox,
    IconButton, List,
    ListItem,
    Typography
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type TodoListPropsType = {
    todoListId: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todoListId: string) => void
    removeTask: (taskId: string, todoListId: string) => void
    changeTodoListFilter: (filter: FilterValuesType, todoListId: string) => void
    changeTaskStatus: (taskId: string, newIsDone: boolean, todoListId: string) => void
    changeTodoListTitle: (newTitle: string, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export const TodoList: FC<TodoListPropsType> = (props) => {

    let isAllTasksNotIsDone = true // все не выполенные
    for (let i = 0; i < props.tasks.length; i++) {
        if (props.tasks[i].isDone) {
            isAllTasksNotIsDone = false
            break;
        }
    }
    const todoClasses = isAllTasksNotIsDone ? "todolist-empty" : "todolist"


    const todoListItems: Array<JSX.Element> = props.tasks.map((task) => {
        const removeTaskHandler = () => props.removeTask(task.id, props.todoListId)
        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(task.id, e.currentTarget.checked, props.todoListId)
        const changeTaskTitle = (newTitle: string) => props.changeTaskTitle(task.id, newTitle, props.todoListId)
        return (
            <ListItem
                key={task.id}
                divider
                disablePadding
                secondaryAction={<IconButton
                    size="small"
                    onClick={removeTaskHandler}>
                    <DeleteForeverIcon />
                </IconButton>}
            >
                <Checkbox
                    edge="start"
                    color="secondary"
                    size="small"
                    onChange={changeTaskStatus}
                    checked={task.isDone}
                />
                <EditableSpan
                    title={task.title}
                    changeTitle={changeTaskTitle}
                    classes={task.isDone ? "task-done" : "task"}
                />
            </ListItem>
        )
    })

    const addTask = (title: string) => props.addTask(title, props.todoListId)
    const removeTodoList = () => props.removeTodoList(props.todoListId)
    const changeTodoListTitle = (newTitle: string) => props.changeTodoListTitle(newTitle, props.todoListId)
    return (
        <div className={todoClasses}>
            <Typography
                variant="h5"
                align="center"
                fontWeight="bold"
                gutterBottom
            >
                <EditableSpan title={props.title} changeTitle={changeTodoListTitle} />
                <Button
                    size="small"
                    variant="contained"
                    onClick={removeTodoList}
                    endIcon={<DeleteForeverIcon />}
                    sx={{ml: "15px"}}
                >
                    Del
                </Button>
            </Typography>
            <AddItemForm
                addItem={addTask}
                recommendedTitleLength={15}
                maxTitleLength={20}
            />
            <List>
                {todoListItems}
            </List>
            <div className={"btn-filter-container"}>
                <Button
                    size="small"
                    variant="contained"
                    disableElevation
                    color={props.filter === "all" ? "secondary" : "primary"}
                    onClick={() => {
                        props.changeTodoListFilter("all", props.todoListId)
                    }}
                >All
                </Button>
                <Button
                    size="small"
                    variant="contained"
                    disableElevation
                    color={props.filter === "active" ? "secondary" : "primary"}
                    onClick={() => {
                        props.changeTodoListFilter("active", props.todoListId)
                    }}
                >Active
                </Button>
                <Button
                    size="small"
                    variant="contained"
                    disableElevation
                    color={props.filter === "completed" ? "secondary" : "primary"}
                    onClick={() => {
                        props.changeTodoListFilter("completed", props.todoListId)
                    }}
                >Completed
                </Button>
            </div>
        </div>
    );
};

