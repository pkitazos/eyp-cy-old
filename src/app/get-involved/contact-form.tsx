"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ActionButton, Input, Textarea, useToast } from "~/components";

const FormSchema = {
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  text: z.string(),
};

type formData = typeof FormSchema;

export function ContactForm() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formData>();

  const onSubmit = (data: formData) => {
    const { name, email, subject, text } = data;

    fetch(`http://localhost:3000/api/email`, {
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
      .then(() => {
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
        <div className="flex flex-col w-full h-20 justify-end">
          {errors.name && (
            <p className="text-red-600 mb-1">{errors.name.message}</p>
          )}
          <Input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Please enter a Name" })}
          />
        </div>
        <div className="flex flex-col w-full h-20 justify-end">
          {errors.email && (
            <p className="text-red-600 mb-1">{errors.email.message}</p>
          )}
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Please enter an Email" })}
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-20 justify-end">
        {errors.subject && (
          <p className="w-full text-left text-red-600 mb-1">
            {errors.subject.message}
          </p>
        )}
        <Input
          placeholder="Subject"
          {...register("subject", { required: "Please enter a Subject Line" })}
        />
      </div>
      <div className="flex flex-col w-full h-[7.5rem] justify-end">
        {errors.text && (
          <p className="w-full text-left text-red-600 mb-1">
            {errors.text.message}
          </p>
        )}
        <Textarea
          placeholder="Message"
          {...register("text", { required: "Please enter your message" })}
        />
      </div>
      <ActionButton
        className="mt-10 disabled:bg-gray-300 disabled:text-gray-500"
        disabled={isSubmitting}
        text="Send"
        variant="button"
        onClick={() => {}}
      />
    </form>
  );
}
