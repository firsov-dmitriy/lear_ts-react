import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "./component/List";
import TodoItem from "./component/TodoItem";
import { ITodo } from "./types/types";

const App = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>(
                "https://jsonplaceholder.typicode.com/todos"
            );
            setTodos(response.data);
        } catch (e) {
            alert(e);
        }
    }
    return (
        <div className="container">
            <List
                items={todos}
                renderItem={(todo: ITodo) => (
                    <TodoItem todo={todo} key={todo.id} />
                )}
            />
        </div>
    );
};

export default App;
