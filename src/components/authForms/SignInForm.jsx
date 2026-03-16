import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";


import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { signInSchema } from "@/validations/authSchema";
import heroImg from "@/assets/bgimage.svg"; 


const SignInForm = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async(values) => {
  
  console.log(values);

   
  };


  return (
    <div className="min-h-screen bg-zinc-200">
     <div className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold tracking-widest">STOCK APP</h1>
        </div>
      </div>


      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/*resim */}
          <div className="hidden md:flex justify-start">
            <img
              src={heroImg}
              alt="Stock illustration"
              className="w-full max-w-xl "
            />
          </div>

          {/* sağ  kısmı olusturuyorm*/}
          <div className="w-full max-w-sm mx-auto md:mx-0 md:ml-auto">
            <h2 className="text-4xl tracking-wide text-center mb-6 uppercase">Login</h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                {/* email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                     <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input id="email"
                         type="email" placeholder="Email" {...field} 
                            className="h-11 bg-slate-50 border-slate-200 focus-visible:ring-2 focus-visible:ring-indigo-500"
                         />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* pass */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                            className="h-11 bg-slate-50 border-slate-200 focus-visible:ring-2 focus-visible:ring-indigo-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit"  className="h-11 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 mt-2">
                  SUBMIT
                </Button>

                <Link
                  to="/sign-up"
                  className="text-sm text-center underline-offset-4 hover:underline"
                >
                  Do you have not an account?
                </Link>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;