import * as yup from 'yup';

export const socialMediaProfileValidationSchema = yup.object().shape({
  name: yup.string().required(),
  platform: yup.string().required(),
  organization_id: yup.string().nullable(),
});
