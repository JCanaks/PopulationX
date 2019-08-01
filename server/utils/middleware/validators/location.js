import validator from '../../helpers/validatorHelper';

const createLocation = async (resolve, parent, args, context, info) => {
  const locationInput = {
    name: args.name,
    noOfFemales: args.noOfFemales,
    noOfMales: args.noOfMales,
    locatedIn: args.locatedIn,
  };

  const validation = validator.createLocationRules(locationInput);
  if (validation) {
    throw new Error(JSON.stringify(validation));
  }

  const result = await resolve(parent, args, context, info);
  return result;
};

const updateLocation = async (resolve, parent, args, context, info) => {
  const locationInput = {
    id: args.id,
    name: args.name,
    noOfFemales: args.noOfFemales,
    noOfMales: args.noOfMales,
    locatedIn: args.locatedIn,
  };

  const validation = validator.updateLocationRules(locationInput);
  if (validation) {
    throw new Error(JSON.stringify(validation));
  }

  const result = await resolve(parent, args, context, info);
  return result;
};


const deleteLocation = async (resolve, parent, args, context, info) => {
  const locationInput = {
    id: args.id,
  };

  const validation = validator.deleteLocationRules(locationInput);
  if (validation) {
    throw new Error(JSON.stringify(validation));
  }

  const result = await resolve(parent, args, context, info);
  return result;
};


export default {
  createLocation,
  updateLocation,
  deleteLocation,
};
