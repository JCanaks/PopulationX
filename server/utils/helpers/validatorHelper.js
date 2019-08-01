import Validator from 'validatorjs';

const validationErrors = {
  name: {
    required: 'Please enter a name in the specified field',
    min: 'Name should be a minimum of 2 characters',
    max: 'Name should have a maximum of 50 characters',
  },
  email: {
    required: 'Please enter an email in the specified field',
    email: 'Email entered is invalid',
  },
  password: {
    required: 'Please enter a password in the specified field',
    min: 'Password must be at least 4 characters',
    max: 'Password should have a maximum of 50 characters',
  },
  id: {
    required: 'Please enter an id in the specified field',
  },
  locatedIn: {
    min: 'LocatedIn should have a minimum of 2 characters',
    max: 'LocatedIn should have a maximum of 50 characters',
  },
};

const signupRules = (userInput) => {
  const rules = {
    name: ['required', 'min:2', 'max:50'],
    email: 'required|email',
    password: ['required', 'min:4', 'max:50'],
  };

  const validation = new Validator(userInput, rules, {
    'required.name': validationErrors.name.required,
    'required.email': validationErrors.email.required,
    'required.password': validationErrors.password.required,
    'min.name': validationErrors.name.min,
    'min.password': validationErrors.password.min,
    'max.name': validationErrors.name.max,
    'max.password': validationErrors.password.max,
    'email.email': validationErrors.email.email,
  });

  if (validation.fails()) {
    return validation.errors.all();
  }
  return false;
};

const loginRules = (userInput) => {
  const rules = {
    email: 'required|email',
    password: ['required', 'min:4', 'max:50'],
  };

  const validation = new Validator(userInput, rules, {
    'required.email': validationErrors.email.required,
    'required.password': validationErrors.password.required,
    'min.password': validationErrors.password.min,
    'max.password': validationErrors.password.max,
    'email.email': validationErrors.email.email,
  });

  if (validation.fails()) {
    return validation.errors.all();
  }
  return false;
};

const createLocationRules = (userInput) => {
  const rules = {
    name: ['required', 'min:2', 'max:50'],
    locatedIn: ['min:2', 'max:50'],
  };

  const validation = new Validator(userInput, rules, {
    'required.name': validationErrors.name.required,
    'min.name': validationErrors.name.min,
    'max.name': validationErrors.name.max,
    'min.locatedIn': validationErrors.locatedIn.min,
    'max.locatedIn': validationErrors.locatedIn.max,
  });

  if (validation.fails()) {
    return validation.errors.all();
  }
  return false;
};

const updateLocationRules = (userInput) => {
  const rules = {
    id: 'required',
    name: ['min:2', 'max:50'],
    locatedIn: ['min:2', 'max:50'],
  };

  const validation = new Validator(userInput, rules, {
    'required.id': validationErrors.id.required,
    'min.name': validationErrors.name.min,
    'max.name': validationErrors.name.max,
    'min.locatedIn': validationErrors.locatedIn.min,
    'max.locatedIn': validationErrors.locatedIn.max,
  });

  if (validation.fails()) {
    return validation.errors.all();
  }
  return false;
};

const deleteLocationRules = (userInput) => {
  const rules = {
    id: 'required',
  };

  const validation = new Validator(userInput, rules, {
    'required.id': validationErrors.id.required,
  });

  if (validation.fails()) {
    return validation.errors.all();
  }
  return false;
};

export default {
  signupRules,
  loginRules,
  createLocationRules,
  updateLocationRules,
  deleteLocationRules,
};
