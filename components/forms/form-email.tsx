"use client";

import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitEmail } from "@/schemas";
import { sendEmail } from "@/actions/getInfo";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { toast, Toaster } from "react-hot-toast";

const FormEmail = () => {
  const form = useForm<z.infer<typeof SubmitEmail>>({
    resolver: zodResolver(SubmitEmail),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SubmitEmail>) => {
    let toastId: string | undefined;

    try {
      toastId = toast.loading("Sending email...");
      await sendEmail(values);
      toast.success("Email sent successfully! 🎉", { id: toastId });
      form.reset();
    } catch (error: unknown) {
      console.error("Error sending email:", error);

      if (error instanceof Error) {
        toast.error(
          `Error: ${
            error.message || "Could not send email. Please try again."
          }`,
          { id: toastId }
        );
      } else if (error && typeof error === "object" && "response" in error) {
        const apiError = error as { response?: { data: unknown } };

        if (apiError.response) {
          console.error("API Error Response:", apiError.response.data);
          toast.error(`API Error: ${JSON.stringify(apiError.response.data)}`, {
            id: toastId,
          });
        } else {
          console.error("Unknown API error occurred:", apiError);
          toast.error("An unexpected error occurred. Please try again.", {
            id: toastId,
          });
        }
      } else {
        toast.error("Unknown error occurred. Please try again.", {
          id: toastId,
        });
      }
    }
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
                        disabled={form.formState.isSubmitting}
                      />
                      <button
                        className="absolute inset-y-0 end-[-24px] flex h-full w-20 items-center justify-center rounded-e-lg border border-transparent text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Subscribe"
                        type="submit"
                        disabled={form.formState.isSubmitting}
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
