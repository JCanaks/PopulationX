const clearData = async (prismaMockInstance) => {
  const { deleteManyLocations, deleteManyUsers } = prismaMockInstance;
  await deleteManyLocations({});
  await deleteManyUsers({});
};

export default clearData;
