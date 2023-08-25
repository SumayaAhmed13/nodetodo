console.log("Running Todo.js");

const fs=require('fs');

//Add Todo
const addTodo=(title)=>{
    let todos=fetchTodos();
    let todo={title};

    let duplicateTodo=todos.filter((todo)=>todo.title===title);

    if(duplicateTodo.length === 0){
        todos.push(todo);
        saveTodo(todos);
        return todo;
    }
}
// read Todo by parameter

const readTodo=(title)=>{

   const todos=fetchTodos();
    const filetrTodos=todos.filter((todo)=>todo.title ===title);
    return filetrTodos[0];

}


//get all Todo

const getTodo=()=>{
    return fetchTodos();
}


//Delete Todo

const deleteTodo=(title)=>{
    const todos=fetchTodos();
    const filetrTodos=todos.filter((todo)=>todo.title !==title);

    saveTodo(filetrTodos);
    return todos.length !==filetrTodos.length;

}

const logTodo=(todo)=>{
    console.log('-----------');
    console.log(`Title is that : ${todo.title}`)
}
//

// Utility  Todo functions

const fetchTodos=()=>{
   try{
    let todoString=fs.readFileSync('todoData.json');
    let todo=JSON.parse(todoString);
    return todo;

   }
   catch(err){
    return [];
   }

}

const saveTodo=(todos)=>{
    fs.writeFileSync('todoData.json',JSON.stringify(todos))

}

module.exports=
{
    addTodo,
    deleteTodo,
    getTodo,
    readTodo,
    logTodo
}