import React, { FC } from "react";
import { ITodo } from "../types/types";
interface TodoItemProps {
    todo: ITodo;
}
const TodoItem: FC<TodoItemProps> = ({ todo }) => {
    return (
        <div className="card" style={{ width: "18rem" }} key={todo.title}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title ">{todo.title}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

export default TodoItem;
