import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import { FragmentType, graphql, useFragment } from '@/lib/gql'
import { useMutation } from 'urql'

const TodoFragment = graphql(/* GraphQL */ `
  fragment TodoListItem_todo on Todo {
    id
    text
    completed
  }
`)

const ToggleTodoMutation = graphql(/* GraphQL */ `
  mutation ToggleTodoMutation($id: ID!) {
    toggleTodo(id: $id) {
      id
      completed
    }
  }
`)

type Props = {
  todo: FragmentType<typeof TodoFragment>
}

export const TodoListItem = (props: Props) => {
  const todo = useFragment(TodoFragment, props.todo)
  const [, toggleTodo] = useMutation(ToggleTodoMutation)

  const handleOnChange = async () => {
    await toggleTodo({
      id: todo.id,
    })
  }

  return (
    <div className="flex items-center space-x-2 py-4">
      <Checkbox
        checked={todo.completed}
        id={`todo-${todo.id}`}
        onCheckedChange={handleOnChange}
      />
      <Label
        className={cn(todo.completed && 'line-through')}
        htmlFor={`todo-${todo.id}`}
      >
        {todo.text}
      </Label>
    </div>
  )
}
