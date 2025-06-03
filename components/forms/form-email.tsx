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
      console.log("Submitting form with values:", values);

      const result = await sendEmail(values);
      console.log("Result from server action:", result);

      if (result.success) {
        toast.success(result.message || "Email sent successfully! 🎉", {
          id: toastId,
        });
        form.reset();
      } else {
        toast.error(result.error || "An error occurred", { id: toastId });
      }
    } catch (error: unknown) {
      console.error("Unexpected error during submission:", error);

      if (error instanceof Error) {
        toast.error(error.message || "Unexpected error occurred.", {
          id: toastId,
        });
      } else {
        toast.error("An unexpected error occurred.", { id: toastId });
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
                  <div className="relative w-full z-50">
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
                      disabled={form.formState.isSubmitting}>
                      <Send size={16} strokeWidth={2} aria-hidden="true" />
                    </button>
                  </div>
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
