/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./contact-form.module.css";

// Define a Zod validation schema
const schema = z.object({
  name: z.string().min(3, "name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  //   age: z.number().min(18, "You must be at least 18 years old"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>; // Type inference from Zod schema
const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      //   age: 0,
      message: "",
    },
  });

  // Submit handler
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
      <div className={styles["form-group"]}>
        <label htmlFor="name">
          Name <span className={styles.required}>(required)</span>
        </label>
        <div className={styles["name-inputs"]}>
          <div className={styles["input-group"]}>
            <input id="firstName" type="text" {...register("name")} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className={styles["input-group"]}>
            <input id="lastName" type="text" {...register("name")} />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        {errors.name && (
          <p className={styles.error}>
            {errors.name.message ?? "Invalid name"}
          </p>
        )}
      </div>

      <div className={styles["form-group"]}>
        <label htmlFor="email">
          Email <span className={styles.required}>(required)</span>
        </label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && (
          <p className={styles.error}>
            {errors.email.message ?? "Invalid email"}
          </p>
        )}
      </div>

      <div className={styles["form-group"]}>
        <label htmlFor="message">
          Message <span className={styles.required}>(required)</span>
        </label>
        <textarea id="message" rows={6} {...register("message")} />
        {errors.message && (
          <p className={styles.error}>
            {errors.message.message ?? "Invalid message"}
          </p>
        )}
      </div>

      <button type="submit" className={styles["submit-button"]}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
