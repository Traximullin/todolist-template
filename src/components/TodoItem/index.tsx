import { FC } from "react"
import { List } from "antd"
import { ITodoItem } from "./interface"
import "./index.scss"

const { Item } = List

const TodoItem: FC<ITodoItem> = (props) => {
    const { children } = props

    return (
        <Item className="todo-item">
            {children}
        </Item>
    )
}

export default TodoItem
