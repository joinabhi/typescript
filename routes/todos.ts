import { Router } from 'express';

import { Todo } from '../model/todos'

let todos:Todo[]=[]

const router= Router();

type RequestBody = {text:string}
type RequestParams = {todoId:string}

router.get('/', (req, res, next)=>{
  res.status(200).json({ todos : todos })
})

router.post('/todo', (req, res, next)=>{
  const body=req.body as RequestBody
 const newTodo: Todo={
    id:new Date().toISOString(),
    text: body.text
 }
todos.push(newTodo)
res.status(201).json({message:'Added Todo', todo:newTodo, todos:todos})
})

router.put('/todo/:todoId', (req, res, next)=>{
  const params=req.params as RequestParams
  const tid=params.todoId;
  const todoIndex=todos.findIndex((todoItem)=>todoItem.id===tid);
    if(todoIndex>=0){ 
      todos[todoIndex]={id:todos[todoIndex].id, text:req.body.text}
      res.status(200).json({message:'updated todos'})
    }
    res.status(400).json({message:'could not find todo for this id'})
})

router.delete('/todo/:todoId', (req, res, next)=>{
  todos=todos.filter((todoItem)=>todoItem.id!==req.params.todoId);
  res.status(200).json({message:'Deleted todo', todos:todos})
});


export default router