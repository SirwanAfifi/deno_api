import { faker } from "https://raw.githubusercontent.com/jackfiszr/deno-faker/master/mod.ts";

const getUsers = () => {
  return Array.from({ length: 50 }).map((_) => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: 30,
  }));
};

export const UserService = {
  getUsers,
};
