import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { graphql } from '@/lib/gql'
import { useMutation } from 'urql'

const AddTodoMutation = graphql(/* GraphQL */ `
  mutation addTodoMutation($text: String!) {
    addTodo(text: $text) {
      id
    }
  }
`)

const formSchema = z.object({
  text: z.string().min(1),
})

export const AddTodoForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  })

  const [{ fetching }, addTodo] = useMutation(AddTodoMutation)

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await addTodo(values)
    form.reset()
  }

  return (
    <Form {...form}>
      <form className={'flex space-x-4'} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className={'flex-1'}>
              <FormControl>
                <Input disabled={fetching} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={fetching} type="submit">
          Add
        </Button>
      </form>
    </Form>
  )
}
