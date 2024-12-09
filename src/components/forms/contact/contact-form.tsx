/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./contact-form.module.css";
import { sendContactEmail } from "./utils";

// Define a Zod validation schema
const schema = z.object({
  firstName: z.string().min(3, "First Name must be at least 3 characters"),
  lastName: z.string().min(3, "Last Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof schema>; // Type inference from Zod schema
const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // Submit handler
  const onSubmit: SubmitHandler<ContactFormData> = async (
    data: ContactFormData,
  ) => {
    console.log(data);
    try {
      const emailResponse = await sendContactEmail(data);
      console.log(emailResponse);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={styles.form}>
      <div className={styles["form-group"]}>
        <label htmlFor="name">
          Name <span className={styles.required}>(required)</span>
        </label>
        <div className={styles["name-inputs"]}>
          <div className={styles["input-group"]}>
            <input id="firstName" type="text" {...register("firstName")} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className={styles["input-group"]}>
            <input id="lastName" type="text" {...register("lastName")} />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        {errors.firstName && (
          <p className={styles.error}>
            {errors.firstName.message ?? "Invalid first name"}
          </p>
        )}
        {errors.lastName && (
          <p className={styles.error}>
            {errors.lastName.message ?? "Invalid last name"}
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
