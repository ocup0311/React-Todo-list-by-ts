interface Todo {
  text: string
  complete: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void

type AddTodo = (text: string) => void

type Simplify<T> = T extends Record<string, any>
  ? { [K in keyof T]: Simplify<T[K]> }
  : T

type SimplifyTodo = Simplify<Todo>
