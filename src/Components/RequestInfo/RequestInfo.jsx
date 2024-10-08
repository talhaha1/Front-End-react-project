import {
  MainBox,
  HeadingTypography,
  ContentContainer,
  ContentTypography2,
  FormContainer,
  FormContainer1,
  FormField,
  SubmitButton,
  FormAlignmentContainer,
  ErrorMessage,
  ClickHereToScheduleButton,
} from "./RequestInfoStyle";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const RequestInfo = () => {
  const defaultValuesOfForm = {
    name: "",
    email: "",
    message: "",
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const templateParams = {
      user_name: values.name,
      to_email: values.email,
      user_message: values.message,
      reply_to: values.email,
      from_email: "careers@analyzinn.com",
    };
    console.log("Template Params:", templateParams);

    emailjs
      .send(
        "service_hkqi1af",
        "template_h1fo326",
        templateParams,
        "ruxMFLz9n_CUClXhn"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSnackbar({
            open: true,
            message: "Email sent successfully!",
            severity: "success",
          });
          resetForm();
        },
        (error) => {
          console.error("FAILED...", error);
          setSnackbar({
            open: true,
            message:
              error.text || "Failed to send email. Please try again later.",
            severity: "error",
          });
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Please write your message"),
  });

  return (
    <>
      <MainBox>
        <ContentContainer>
          <HeadingTypography
            variant="h3"
            component="h1"
            sx={{ paddingLeft: 0 }} // Override any padding if necessary
          >
            Request Info
          </HeadingTypography>
          <ContentTypography2>
            When Looking for a company where you can trust your Analytics with,
            You shouldn’t have to pay. That’s why we always offer a free
            consultation to anyone. Whether its your business, or you want to
            learn more. We urge you to Contact us via the form on the right, or
            by clicking a link below to schedule a meeting with us!
          </ContentTypography2>
          <ClickHereToScheduleButton href="https://calendly.com/analyzinnsolutions">
            Click here to schedule a meeting
          </ClickHereToScheduleButton>
        </ContentContainer>

        <FormContainer>
          <FormAlignmentContainer>
            <FormContainer1>
              <Formik
                initialValues={defaultValuesOfForm}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field
                      name="name"
                      as={FormField}
                      label={
                        <span>
                          Name <span style={{ color: "red" }}>*</span>
                        </span>
                      }
                      variant="outlined"
                      fullWidth
                    />
                    <FormikErrorMessage name="name" component={ErrorMessage} />

                    <Field
                      name="email"
                      as={FormField}
                      label={
                        <span>
                          Email <span style={{ color: "red" }}>*</span>
                        </span>
                      }
                      variant="outlined"
                      fullWidth
                    />
                    <FormikErrorMessage name="email" component={ErrorMessage} />

                    <Field
                      name="message"
                      as={FormField}
                      label="Comment or Message"
                      variant="outlined"
                      multiline
                      rows={isSmallScreen ? 6 : 10}
                      fullWidth
                    />
                    <FormikErrorMessage
                      name="message"
                      component={ErrorMessage}
                    />

                    <SubmitButton type="submit" disabled={isSubmitting}>
                      SUBMIT
                    </SubmitButton>
                  </Form>
                )}
              </Formik>
            </FormContainer1>
          </FormAlignmentContainer>
        </FormContainer>
      </MainBox>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default RequestInfo;
