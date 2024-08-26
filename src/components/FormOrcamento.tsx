import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import emailjs from "@emailjs/browser";
import styles from '../layouts/formfinalOrcamento.module.css'

interface FormValues {
  fullname: string;
  email: string;
  telefone: string;
  message: string;
}

const FormComponent: React.FC = () => {

  const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    const templateParams = {
      from_name: values.fullname,
      telefone: values.telefone,
      message: values.message,
      email: values.email
    };
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )    
      .then(() => {
        setSubmitting(false);
        alert('Mensagem enviada com sucesso!');
      })
      .catch(() => {
        setSubmitting(false);
        alert('Ocorreu um erro ao enviar a mensagem.');
      });
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, 'Nome muito curto')
      .max(255, 'Nome muito longo')
      .required('Nome é obrigatório'),
    email: Yup.string()
      .email('Endereço de e-mail inválido')
      .required('E-mail é obrigatório'),
    message: Yup.string()
      .min(10, 'Mensagem muito curta')
      .required('Mensagem é obrigatória'),
  });

  return (
    <Formik
      initialValues={{
        fullname: '',
        email: '',
        telefone: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.containerform}>
          <div>
            <div>
              <label htmlFor="fullname" style={{ color: "white", display: 'flex', justifyContent: 'left', marginBottom: 5}}>Nome </label>
            </div>
            <Field type="text" name="fullname" id="fullname" className={styles.inputform}
              placeholder="Digite seu nome" />
            <ErrorMessage className={styles.erro} name="fullname" component="div" />
          </div>
          <div>
          <div>
              <label htmlFor="email" style={{ color: "white", display: 'flex', justifyContent: 'left', marginBottom: 5}}>E-mail </label>
            </div>
            <Field type="email" name="email" id="email" className={styles.inputform}
              placeholder="Digite seu e-mail" />
            <ErrorMessage className={styles.erro} name="email" component="div" />
          </div>
          <div>
          <div>
              <label htmlFor="telefone" style={{ color: "white", display: 'flex', justifyContent: 'left', marginBottom: 5}}>Telefone </label>
            </div>
            <Field type="text" name="telefone" id="telefone" className={styles.inputform}
              placeholder="Digite seu telefone"
            />
            <ErrorMessage className={styles.erro} name="telefone" component="div" />
          </div>
          <div>
          <div>
              <label htmlFor="message" style={{ color: "white", display: 'flex', justifyContent: 'left', marginBottom: 5}}>Mensagem </label>
            </div>
            <Field as="textarea" name="message" id="message"
              placeholder="Digite sua mensagem"
              className={styles.textarea} />
            <ErrorMessage className={styles.erro} name="message" component="div" />
          </div>
          <button className={styles.buttonform} type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
