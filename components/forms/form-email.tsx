"use client";

import * as z from "zod";

import React, { startTransition, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitEmail } from "@/schemas";
import { sendEmail } from "@/actions/getInfo";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { toast, Toaster } from "react-hot-toast";

const FormEmail = () => {
  const [isPending] = useTransition();

  const form = useForm<z.infer<typeof SubmitEmail>>({
    resolver: zodResolver(SubmitEmail),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SubmitEmail>) => {
    startTransition(() => {
      toast
        .promise(
          sendEmail(values),
          {
            loading: "Sending email...",
            success: <b>Email sent successfully! 🎉</b>,
            error: <b>Could not send email. Please try again.</b>,
          },
          {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }
        )
        .then(() => {
          form.reset();
        });
    });
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <div className="relative w-full">
                      <Input
                        {...field}
                        id="input-19"
                        className="pe-10 dark:text-white"
                        placeholder="Fill your email.."
                        type="email"
                        disabled={isPending}
                      />
                      <button
                        className="absolute inset-y-0 end-[-24px] flex h-full w-20 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Subscribe"
                        type="submit"
                        disabled={isPending}
                      >
                        <Send size={16} strokeWidth={2} aria-hidden="true" />
                      </button>
                    </div>
                  </>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default FormEmail;
