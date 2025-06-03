"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "@/zod/schema";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { sendEmail } from "@/actions/getInfo";
import toast from "react-hot-toast";
import { useState } from "react";
import { GradientButton } from "./gradient-button";

function ButtonHarmonia() {
  const logo = "/Logo/harmonia-logo-only.svg";
  const [isDialogOpen, setDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const sendPromise = toast.promise(sendEmail(values), {
      loading: "Sending...",
      success: (data) => {
        if (!data.success) throw new Error(data.error);
        form.reset();
        setDialogOpen(false);
        return <b>Email sent successfully!</b>;
      },
      error: (err) => {
        return <b>{err.message || "Could not send email."}</b>;
      },
    });

    await sendPromise;
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <GradientButton>⚡️ Subscribe</GradientButton>
      </DialogTrigger>
      <DialogContent className="w-full">
        <div className="mb-2 flex flex-col items-center gap-2">
          <Image src={logo} alt="Harmonia Logo Only" width={50} height={50} />
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Never miss an update
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              Subscribe to receive news from us.
            </DialogDescription>
          </DialogHeader>
        </div>

        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
            <div className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="relative w-full">
                      <div className="w-full">
                        <Input
                          id="dialog-subscribe"
                          className="peer ps-9 w-full"
                          placeholder="hi@youremail.com"
                          type="email"
                          aria-label="Email"
                          {...field}
                        />
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                          <Mail size={16} strokeWidth={2} aria-hidden="true" />
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-between items-center">
              <Button type="button" className="w-full">
                Subscribe
              </Button>
            </div>
          </form>
        </Form>

        <p className="text-center text-xs text-muted-foreground">
          By subscribing you agree to our{" "}
          <a className="underline hover:no-underline" href="#">
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}

export { ButtonHarmonia };
