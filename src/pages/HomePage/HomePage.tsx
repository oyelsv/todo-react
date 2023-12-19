import React, { useCallback } from 'react';
import { Formik } from 'formik';

import { useSignupMutation } from 'features/core/auth';

const HomePage = (): React.ReactElement => {
  const [signup] = useSignupMutation();

  const handleSubmit = useCallback(
    async (formData, formik) => {
      try {
        const t = await signup(formData).unwrap();

        formik.resetForm({ values: t });
      } catch (err) {
        throw new Error(err);
      }
    },
    [signup]
  );

  return (
    <>
      <h1>Home</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          username: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit: triggerSubmit }) => (
          <form onSubmit={triggerSubmit} noValidate>
            <div>
              <input
                type="username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <input type="email" name="email" value={values.email} onChange={handleChange} />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;
