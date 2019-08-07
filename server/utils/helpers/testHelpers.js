import bcrypt from 'bcryptjs';

export const clearData = async (prismaMockInstance) => {
  const { deleteManyLocations, deleteManyUsers } = prismaMockInstance;
  await deleteManyLocations({});
  await deleteManyUsers({});
};

export const createTestUser = async (prismaMockInstance, signupInput) => {
  const { createUser } = prismaMockInstance;
  const password = await bcrypt.hash(signupInput.password, 10);
  const user = await createUser({ ...signupInput, password });

  return user;
};

export const getLocationId = async (prismaMockInstance, name) => {
  const location = await prismaMockInstance.location({
    name,
  });
  return location.id;
};
