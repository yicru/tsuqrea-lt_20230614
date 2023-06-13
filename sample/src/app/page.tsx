'use client'

import { graphql } from '@/lib/gql'
import { useQuery } from 'urql'
import { TodoListItem } from '@/features/todo/components/TodoListItem'
import { AddTodoForm } from '@/features/todo/components/AddTodoForm'

const HomePageQuery = graphql(/* GraphQL */ `
  query HomePageQuery {
    todos {
      id
      ...TodoListItem_todo
    }
  }
`)

export default function Home() {
  const [{ data }] = useQuery({ query: HomePageQuery })

  return (
    <main className={'flex flex-col h-full'}>
      <div className={'flex-1'}>
        <div className={'divide-y'}>
          {data?.todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
      <AddTodoForm />
    </main>
  )
}
