import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

const stacks = [
  {
    id: "rust-developer",
    label: "Rust Developer",
  },
  {
    id: "javascript-developer",
    label: "Javascript Developer",
  },
] as const;

const FormSchema = z.object({
  stacks: z.array(z.string()).refine((value) => value.some((stack) => stack), {
    message: "You have to select at least one stack.",
  }),
});

export const StackSelectorForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      stacks: [],
    },
  });

  function onSubmit() {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mt-8">
        <FormField
          control={form.control}
          name="stacks"
          render={() => (
            <FormItem className="w-full flex items-center gap-4">
              {stacks.map((stack) => (
                <FormField
                  key={stack.id}
                  control={form.control}
                  name="stacks"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={stack.id}
                        className={cn("flex flex-row h-10 md:h-16 items-center px-3 w-full border space-x-3 space-y-0", 
                            field.value?.includes(stack.id) && "bg-primary/30")}
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(stack.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, stack.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== stack.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm md:text-lg font-normal w-full">
                          {stack.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={!form.formState.isValid} type="submit">Get your reward now</Button>
      </form>
    </Form>
  );
};
