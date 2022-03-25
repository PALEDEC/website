import { useRef, useState } from "react";
const inittodos = [{
        
        id: 1,
        name: 'call the dentist ',
        completed: false
    },
    {
        id: 2,
        name: 'Schedule a dinner with Peter ',
        completed: true
    }
   
]





export default function Blog() {
    const [todos, setTodos] = useState(inittodos);
    const [text, setText] = useState('')

    function newTodos (){
        if(text){
          console.log(text)

          let x = {
              id: todos.length +1,
              name: text,
              completed: false
          }
          
          todos.push(x)
          setTodos(todos)
          setText('')
      }
      
    }

    function deleteTodos (id){

        let newTodos = todos.filter((todo)=>{
            return todo.id !== id
        })

        setTodos(newTodos)

    }

    function cmpltTodo(id){
        let newTodos = todos.map(todo =>{
            if(todo.id == id){
                todo.completed = !todo.completed
            }
           return todo
        })

        setTodos(newTodos)
    }
    

    return ( 
        <div>
        
        <input type='text' placeholder='Enter Todo here' 
         onChange={(e) => setText(e.target.value)}
         value={text}
        
        />
        <button onClick={newTodos}>submit</button>
        <h1> text: {text}</h1>

        {todos.map((todo) =>{
            return( < h1 key={todo.id}> { todo.name }  
            <span onClick={(e) => deleteTodos(todo.id)}>x</span>
            <span ><input type='checkbox' checked={todo.completed}  onChange={(e) => cmpltTodo(todo.id)} /></span>
            </h1>)
            
        } )}

            </div>
        )

    }