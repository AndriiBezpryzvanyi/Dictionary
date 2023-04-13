import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface RegistrationFormValues {
  first_name: string;
  second_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const validateSchema = Yup.object().shape({
  first_name: Yup.string().required(),
  second_name: Yup.string(),
  email: Yup.string().required(),
  password: Yup.string()
    .required()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  confirm_password: Yup.string().oneOf([Yup.ref("password")], 'Must match "password" field value'),
});

const RegistrationForm = () => {
  const handleRegistration = (values: RegistrationFormValues) => {
    console.log("Registration values: ", values);
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      second_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: handleRegistration,
    validationSchema: validateSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "50%" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          name="first_name"
          placeholder="First name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
          error={formik.touched.first_name && Boolean(formik.errors.first_name)}
        />
        <TextField
          name="second_name"
          placeholder="Second name"
          value={formik.values.second_name}
          onChange={formik.handleChange}
          error={formik.touched.second_name && Boolean(formik.errors.second_name)}
        />
        <TextField
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
        />
        <Button type="submit">Sign up</Button>
      </Box>
    </form>
  );
};

export default RegistrationForm;
