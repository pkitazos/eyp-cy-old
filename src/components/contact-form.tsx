"use client";

import { Input, Textarea, ActionButton } from "./index";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const InputSchema = {
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  text: z.string(),
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof InputSchema>();

  const onSubmit: SubmitHandler<typeof InputSchema> = (data) => {
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
        alert("Message delivered successfully.");
      })
      .catch(() => {
        alert(
          "Something went wrong while sending your mesasge. Please try again later."
        );
      });
  };

  return (
    <form
      className="flex flex-col gap-5 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex md:flex-row flex-col gap-5">
        <Input placeholder="Name" {...register("name", { required: true })} />
        <Input placeholder="Email" {...register("email", { required: true })} />
      </div>
      <Input
        placeholder="Subject"
        {...register("subject", { required: true })}
      />
      <Textarea
        placeholder="Message"
        {...register("text", { required: true })}
      />
      <ActionButton type="submit" text={"Send"} />
    </form>
  );
}
