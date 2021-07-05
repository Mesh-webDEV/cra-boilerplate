import Joi from 'joi';

// New event:

// StepOne:
const newEventStepOneSchema = Joi.object({
  name: Joi.string().alphanum().trim().min(1).max(45).required(),
  rounds: Joi.number().min(1).max(24).required(),
  date: Joi.date().required(),
  type: Joi.string().required(),
  lobbyCode: Joi.string().trim().required(),
});

export const validateEventName = async name => {
  try {
    Joi.attempt(name, Joi.string().alphanum().trim().min(1).max(45).required());
    return '';
  } catch (error) {
    return error.message.replace('"value"', 'event name');
  }
};

export const isStepOneValid = async stepOne => {
  return new Promise(async (resolve, reject) => {
    try {
      await newEventStepOneSchema.validateAsync(stepOne, { abortEarly: false });
      return resolve();
    } catch (error) {
      return reject(error.details);
    }
  });
};

// authentication
const authFieldsSchema = Joi.object({
  username: Joi.string().token().trim().min(1).max(45).trim().required(),
  password: Joi.string()
    .pattern(/((?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{8,50})/)
    .message(
      'Password must be 8 characters long, has at least ONE number and ONE special character'
    )
    .required(),
});

export const isSignupFormValid = async form => {
  try {
    await authFieldsSchema.validateAsync(form);
    return '';
  } catch (error) {
    return error.message;
  }
};

export const isSigninFormValid = async form => {
  try {
    await authFieldsSchema.validateAsync(form);
    return '';
  } catch (error) {
    return error.message;
  }
};

export const validateUsername = username => {
  try {
    Joi.attempt(
      username,
      Joi.string().token().trim().min(1).max(45).required()
    );
    return '';
  } catch (error) {
    return error.message.replace('"value"', 'Username');
  }
};
export const validatePassword = password => {
  try {
    Joi.attempt(
      password,
      Joi.string()
        .pattern(/((?=.*\d)(?=.*[a-zA-Z])(?=.*[\W]).{8,50})/)
        .message(
          'Password must be 8 characters long, has at least ONE number and ONE special character'
        )
        .required()
    );

    return '';
  } catch (error) {
    return error.message.replace('"value"', 'Password');
  }
};
