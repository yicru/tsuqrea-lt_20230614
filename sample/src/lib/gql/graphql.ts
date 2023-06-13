/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Mutation = {
  __typename?: 'Mutation'
  addTodo: Todo
  toggleTodo: Todo
}

export type MutationAddTodoArgs = {
  text: Scalars['String']['input']
}

export type MutationToggleTodoArgs = {
  id: Scalars['ID']['input']
}

export type Query = {
  __typename?: 'Query'
  greetings?: Maybe<Scalars['String']['output']>
  todos: Array<Todo>
}

export type Todo = {
  __typename?: 'Todo'
  completed: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  text: Scalars['String']['output']
}

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never }>

export type HomePageQueryQuery = {
  __typename?: 'Query'
  todos: Array<
    { __typename?: 'Todo'; id: string } & {
      ' $fragmentRefs'?: {
        TodoListItem_TodoFragment: TodoListItem_TodoFragment
      }
    }
  >
}

export type AddTodoMutationMutationVariables = Exact<{
  text: Scalars['String']['input']
}>

export type AddTodoMutationMutation = {
  __typename?: 'Mutation'
  addTodo: { __typename?: 'Todo'; id: string }
}

export type TodoListItem_TodoFragment = {
  __typename?: 'Todo'
  id: string
  text: string
  completed: boolean
} & { ' $fragmentName'?: 'TodoListItem_TodoFragment' }

export type ToggleTodoMutationMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type ToggleTodoMutationMutation = {
  __typename?: 'Mutation'
  toggleTodo: { __typename?: 'Todo'; id: string; completed: boolean }
}

export const TodoListItem_TodoFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TodoListItem_todo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Todo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TodoListItem_TodoFragment, unknown>
export const HomePageQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HomePageQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'todos' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'TodoListItem_todo' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TodoListItem_todo' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Todo' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'text' } },
          { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HomePageQueryQuery, HomePageQueryQueryVariables>
export const AddTodoMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'addTodoMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'text' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addTodo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'text' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'text' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddTodoMutationMutation,
  AddTodoMutationMutationVariables
>
export const ToggleTodoMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ToggleTodoMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'toggleTodo' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'completed' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ToggleTodoMutationMutation,
  ToggleTodoMutationMutationVariables
>
