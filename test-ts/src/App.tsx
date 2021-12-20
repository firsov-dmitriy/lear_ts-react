import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVarian } from './component/Card';
import EventsExapmle from './component/EventsExapmle';
import List from './component/List';
import TodoItem from './component/TodoItem';
import UserItem from './component/UserItem';
import UserList from './component/UserList';
import { ITodo, IUser } from './types/types';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(()=> {
    fetchUsers()
    fetchTodos()
  },[])
 async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")    
      setUsers(response.data)
    }catch (e){
      alert(e)
    }
  }
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")    
      setTodos(response.data)
    }catch (e){
      alert(e)
    }
  }
  return (
    
    <div>
    <EventsExapmle/>
      <Card  variant={CardVarian.primary} width='200px' height='200px'  >
        <button>Кнопка</button>
        </Card>
        <List 
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
        />
        <List 
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem  todo={todo} key={todo.id}/>}
        />

    </div>
  );
};

export default App;