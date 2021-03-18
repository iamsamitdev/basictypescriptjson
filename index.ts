import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Defind Structor of project with Interface
interface Todo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url).then(response => {
    
    // console.log(response.status);
    // console.log(response.headers);
    // console.log(response.config)
    // console.log(response.data)

    const todo: Todo = response.data;
    
    const id= todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed)

})

const logTodo = (id: number,title: string,completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
`)
}