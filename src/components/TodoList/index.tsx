import { FC } from "react"
import { Divider, List } from "antd"
import TodoItem from "../TodoItem"

const TodoList: FC = () => {
    const todos = [1,2,3,4,5]
    
    return (
        <>
            <Divider orientation="left">Задачи - {todos.length}</Divider>
            <List
                size="large"
                dataSource={todos}
                renderItem={(item) => 
                    <TodoItem>
                        {item}
                    </TodoItem>
                }
            />
        </>
    )
}

export default TodoList