import { createYoga, createSchema } from 'graphql-yoga'

const todos = [
  { id: 1, text: 'Buy milk', completed: false },
  { id: 2, text: 'Buy eggs', completed: false },
  { id: 3, text: 'Buy bread', completed: false },
]

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Todo {
        id: ID!
        text: String!
        completed: Boolean!
      }

      type Query {
        greetings: String
        todos: [Todo!]!
      }

      type Mutation {
        addTodo(text: String!): Todo!
      }
    `,
    resolvers: {
      Query: {
        greetings: () =>
          'This is the `greetings` field of the root `Query` type',
        todos: () => todos,
      },
      Mutation: {
        addTodo: (_, { text }) => {
          const todo = { id: todos.length + 1, text, completed: false }
          todos.push(todo)
          return todo
        },
      },
    },
  }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: '/api/graphql',

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
})

export { handleRequest as GET, handleRequest as POST }
