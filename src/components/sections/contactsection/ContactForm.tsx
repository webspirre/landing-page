import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { supabase } from "@/config/supabase";

// Define Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  lastName: Yup.string().required("LastName is required"),
  country: Yup.string().required("Country is required"),
  specialization: Yup.string().required("Your specialization is required"),
  industry: Yup.string().required("Industry is required"),
});

interface FormData {
  name: string;
  email: string;
  lastName: string;
  country: string;
  specialization: string;
  industry: string;
}

const countryOptions_ = [
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
];

const specializationOptions_ = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "fullstack", label: "Fullstack Development" },
];

const industryOptions_ = [
  { value: "tech", label: "Technology" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
];

const ContactForm: React.FC = () => {
  const initialValues: FormData = {
    name: "",
    email: "",
    lastName: "",
    country: "",
    industry: "",
    specialization: "",
  };

  const handleSubmit = async (values: FormData) => {
    console.log(values);
    // Handle form submission logic here
    try {
      // Destructure formData object
      const { name, lastName, email, country, specialization, industry } =
        values;
      // Insert formData into Supabase
      const { data, error } = await supabase
        .from("waitlist_form")
        .insert([
          {
            name,
            lastName,
            email,
            country,
            specialization,
            industry,
          },
        ])
        .select();

      // Handle errors
      if (error) {
        console.error("Error inserting data into Supabase:", error.message);
        return;
      }

      // Handle success
      console.log("Data inserted into Supabase:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="p-20 space-y-20">
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="lastName">lastName:</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="country">Select a Country:</label>
            <Field name="country">
              {({
                field,
              }: {
                field: {
                  name: string;
                  value: any;
                  onChange: (e: any) => void;
                  onBlur: () => void;
                };
              }) => (
                <Select
                  {...field}
                  onChange={(selectedOption) =>
                    setFieldValue("country", selectedOption.value)
                  }
                  options={countryOptions_}
                  placeholder="Select Country..."
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      height: "60px",
                      width: "100%", // Customize width as needed
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isSelected ? "#007bff" : "white", // Change background color of selected option
                      color: state.isSelected ? "white" : "black", // Change text color of selected option
                    }),
                  }}
                />
              )}
            </Field>
            <ErrorMessage name="country" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="specialization">Select a Specialization:</label>
            <Field name="specialization">
              {({
                field,
              }: {
                field: {
                  name: string;
                  value: any;
                  onChange: (e: any) => void;
                  onBlur: () => void;
                };
              }) => (
                <Select
                  {...field}
                  onChange={(selectedOption) =>
                    setFieldValue("specialization", selectedOption.value)
                  }
                  options={specializationOptions_}
                  placeholder="Select Specialization..."
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      height: "60px",
                      width: "100%", // Customize width as needed
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isSelected ? "#007bff" : "white", // Change background color of selected option
                      color: state.isSelected ? "white" : "black", // Change text color of selected option
                    }),
                  }}
                />
              )}
            </Field>
            <ErrorMessage
              name="specialization"
              component="div"
              className="error"
            />
          </div>
          <div>
            <label htmlFor="industry">Select a industry:</label>
            <Field name="industry">
              {({
                field,
              }: {
                field: {
                  name: string;
                  value: any;
                  onChange: (e: any) => void;
                  onBlur: () => void;
                };
              }) => (
                <Select
                  {...field}
                  onChange={(selectedOption) =>
                    setFieldValue("industry", selectedOption.value)
                  }
                  options={industryOptions_}
                  placeholder="Select Industry..."
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      height: "60px",
                      width: "100%", // Customize width as needed
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isSelected ? "#007bff" : "white", // Change background color of selected option
                      color: state.isSelected ? "white" : "black", // Change text color of selected option
                    }),
                  }}
                />
              )}
            </Field>
            <ErrorMessage name="industry" component="div" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
