/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query HomePageQuery {\n    todos {\n      id\n      ...TodoListItem_todo\n    }\n  }\n':
    types.HomePageQueryDocument,
  '\n  mutation addTodoMutation($text: String!) {\n    addTodo(text: $text) {\n      id\n    }\n  }\n':
    types.AddTodoMutationDocument,
  '\n  fragment TodoListItem_todo on Todo {\n    id\n    text\n    completed\n  }\n':
    types.TodoListItem_TodoFragmentDoc,
  '\n  mutation ToggleTodoMutation($id: ID!) {\n    toggleTodo(id: $id) {\n      id\n      completed\n    }\n  }\n':
    types.ToggleTodoMutationDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query HomePageQuery {\n    todos {\n      id\n      ...TodoListItem_todo\n    }\n  }\n'
): (typeof documents)['\n  query HomePageQuery {\n    todos {\n      id\n      ...TodoListItem_todo\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation addTodoMutation($text: String!) {\n    addTodo(text: $text) {\n      id\n    }\n  }\n'
): (typeof documents)['\n  mutation addTodoMutation($text: String!) {\n    addTodo(text: $text) {\n      id\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment TodoListItem_todo on Todo {\n    id\n    text\n    completed\n  }\n'
): (typeof documents)['\n  fragment TodoListItem_todo on Todo {\n    id\n    text\n    completed\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation ToggleTodoMutation($id: ID!) {\n    toggleTodo(id: $id) {\n      id\n      completed\n    }\n  }\n'
): (typeof documents)['\n  mutation ToggleTodoMutation($id: ID!) {\n    toggleTodo(id: $id) {\n      id\n      completed\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
