
console.log("App.js is Running");

const _=require("lodash");
const yargs=require('yargs')
const todos= require('./todo');

const args=yargs.argv;
let command=args._[0];

//console.log(args.todo);
//console.log(todos.addTodo());
console.log(`Running Command: `+command);

if(command==='addTodo'){

    todos.addTodo(args.title)    

}
else if(command==='readTodo'){

    let todo= todos.readTodo(args.title); 
    if(todo){
        console.log("Great,Title was found");
        todos.logTodo(todo)

    }
    else{
        console.log('Whoops! The todo was not found.')
    }
    
   
   }

else if(command==='listTodo'){

    let allTodos=todos.getTodo();
    console.log(`Printing ${allTodos.length} todo(s).`);
    allTodos.forEach(todo => {
        todos.logTodo(todo)
    });
   
   
}  
else if(command==='deleteTodo'){

 let todoDeleted= todos.deleteTodo(args.title); 
 let message=todoDeleted ? "Todo Deleted Successfully":"Todo Not Found";
 console.log(message);

}
else{
    console.log("Invalid Command")
}



