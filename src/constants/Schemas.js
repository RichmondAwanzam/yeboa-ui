import { schema , arrayOf } from 'normalizr';

const patients = new  schema.Entity('patients');
const patient = new  schema.Entity('patient');
patients.define({
  patient,
});



export const patientSchema = patients;
