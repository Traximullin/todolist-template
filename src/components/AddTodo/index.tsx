import { FC, useRef } from "react"
import type { InputRef } from 'antd';
import { Input, Space } from "antd"
import "./index.scss"
import Button from "../Button"

const AddTodo: FC = () => {
    const inputRef = useRef<InputRef | null>(null)

    const handleAddTodoClick = () => {
        //@ts-ignore
        if(inputRef.current.input.value.trim()) {
            alert('Создание задачи')
        }
    }

    return (
        <Space>
            <Input
                ref={inputRef}
                className="input"
                placeholder="Создать новую задачу"
            />
            <Button onClick={handleAddTodoClick}>
                Добавить
            </Button>
        </Space>
    )
}

export default AddTodo
