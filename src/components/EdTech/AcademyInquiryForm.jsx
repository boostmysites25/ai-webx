import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../data/constant";
import toast from "react-hot-toast";
import { SpinnerContext } from "../SpinnerContext";

const experienceLevels = ["Beginner", "Some Experience", "Active Trader"];

const AcademyInquiryForm = () => {
  const navigate = useNavigate();
  const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience: "Beginner",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    setSpinner(true);
    const emailBody =
      `Name: ${values.name}\n\n` +
      `Email: ${values.email}\n\n` +
      `Phone: ${values.phone}\n\n` +
      `Experience: ${values.experience}\n\n` +
      `Message:\n${values.message}`;

    const payload = {
      to: companyDetails.email,
      subject: "EdTech Academy Inquiry — AI WebX Stock Market Training",
      body: emailBody,
      name: "AI WebX EdTech",
    };

    try {
      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const res = await response.json();
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success("Message sent successfully");
        reset();
        navigate("/thank-you");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSpinner(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-3"
      aria-label="Academy enrollment inquiry form"
    >
      <div>
        <label className="text-xs uppercase tracking-wide text-gray-500">
          Full Name
        </label>
        <input
          type="text"
          className="w-full border border-primary/20 rounded-md p-3 mt-1 outline-none focus:border-secondary"
          placeholder="Your name"
          {...register("name", { required: "Name is required" })}
        />
        <small className="error-message">{errors.name?.message}</small>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-gray-500">
          Email
        </label>
        <input
          type="email"
          className="w-full border border-primary/20 rounded-md p-3 mt-1 outline-none focus:border-secondary"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalid email",
            },
          })}
        />
        <small className="error-message">{errors.email?.message}</small>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-gray-500">
          WhatsApp / Phone
        </label>
        <input
          type="tel"
          className="w-full border border-primary/20 rounded-md p-3 mt-1 outline-none focus:border-secondary"
          placeholder="+91 ..."
          {...register("phone", { required: "Phone is required" })}
        />
        <small className="error-message">{errors.phone?.message}</small>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-gray-500">
          Experience Level
        </label>
        <select
          className="w-full border border-primary/20 rounded-md p-3 mt-1 outline-none focus:border-secondary bg-white"
          {...register("experience")}
        >
          {experienceLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs uppercase tracking-wide text-gray-500">
          Your Message
        </label>
        <textarea
          rows={4}
          className="w-full border border-primary/20 rounded-md p-3 mt-1 outline-none focus:border-secondary"
          placeholder="Tell us about your trading goals or questions..."
          {...register("message", { required: "Message is required" })}
        />
        <small className="error-message">{errors.message?.message}</small>
      </div>
      <p className="text-xs text-gray-500">
        By submitting, you agree to be contacted about the mentorship program. We
        never share your details.
      </p>
      <button type="submit" disabled={isSubmitting} className="primary-btn">
        Send Message
      </button>
    </form>
  );
};

export default AcademyInquiryForm;
