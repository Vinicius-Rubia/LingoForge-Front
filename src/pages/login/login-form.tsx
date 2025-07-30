import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePasswordToggle } from "@/hooks/use-password-toggle";
import { cn } from "@/lib/utils";
import { AuthSchemas } from "@/validators/auth-schemas";
import type { RegisterSchemaType } from "@/validators/schema-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [inputType, toggleVisibility] = usePasswordToggle();

  const isPasswordVisible = inputType === "text";

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(AuthSchemas.register),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: RegisterSchemaType) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Entre na sua conta</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Insira seu e-mail abaixo para acessar sua conta
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid gap-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <FormLabel>Senha</FormLabel>
                    <Link
                      to="/"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Esqueceu sua senha?
                    </Link>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={inputType}
                        placeholder="*********"
                        {...field}
                      />
                      <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 [&>svg]:size-5 [&>svg]:text-muted-foreground"
                        onClick={toggleVisibility}
                      >
                        {isPasswordVisible ? <EyeOff /> : <Eye />}
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Ou continue com
            </span>
          </div>
          <Button variant="outline" className="w-full" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Login com Google
          </Button>
        </div>
      </form>
    </Form>
  );
}
