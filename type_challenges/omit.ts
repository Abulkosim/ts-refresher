interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, K> = {
 [P in keyof T as P extends K ? never : P]: T[P]
}


type TodoType = MyOmit<Todo, 'description' | 'title'>

const check: TodoType = {
  completed: false,
}