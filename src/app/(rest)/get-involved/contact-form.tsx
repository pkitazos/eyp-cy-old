"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input, Textarea, useToast } from "@/components";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Please enter a Name"),
  email: z.string().email("Please enter a valid Email"),
  subject: z.string().min(2, "Please enter a Subject Line"),
  text: z.string().min(2, "Please enter your Message here"),
});

type formData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formData>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: formData) => {
    const { name, email, subject, text } = data;

    fetch(`/api/email`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        text,
      }),
    })
      .then((message) => {
        console.log(message);
        toast({
          variant: "success",
          title: "Sent",
          description: "Message delivered successfully.",
        });
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Error",
          description:
            "Something went wrong while sending your mesasge. Please try again later.",
        });
      });

    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center"
    >
      <div className="flex w-full flex-col md:flex-row md:gap-5">
        <div className="flex h-20 w-full flex-col justify-end">
          {errors.name && (
            <p className="mb-1 text-red-600">{errors.name.message}</p>
          )}
          <Input type="text" placeholder="Name" {...register("name")} />
        </div>
        <div className="flex h-20 w-full flex-col justify-end">
          {errors.email && (
            <p className="mb-1 text-red-600">{errors.email.message}</p>
          )}
          <Input type="email" placeholder="Email" {...register("email")} />
        </div>
      </div>
      <div className="flex h-20 w-full flex-col justify-end">
        {errors.subject && (
          <p className="mb-1 w-full text-left text-red-600">
            {errors.subject.message}
          </p>
        )}
        <Input placeholder="Subject" {...register("subject")} />
      </div>
      <div className="flex h-[7.5rem] w-full flex-col justify-end">
        {errors.text && (
          <p className="mb-1 w-full text-left text-red-600">
            {errors.text.message}
          </p>
        )}
        <Textarea placeholder="Message" {...register("text")} />
      </div>
      <Button
        className="mt-10 disabled:bg-gray-300 disabled:text-gray-500"
        disabled={isSubmitting}
      >
        Send
      </Button>
    </form>
  );
}
