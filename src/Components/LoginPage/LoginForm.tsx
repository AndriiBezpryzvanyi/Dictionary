import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

const validateSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginForm = () => {
  const handleLogin = (values: LoginFormValues) => {
    console.log("login values: ", values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: validateSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "50%" }}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <Button type="submit">Log In</Button>
      </Box>
    </form>
  );
};

export default LoginForm;
