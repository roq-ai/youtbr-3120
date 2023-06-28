import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  url: yup.string().required(),
  organization_id: yup.string().nullable(),
});
