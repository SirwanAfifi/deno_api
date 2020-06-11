import { UserService } from "../../services/user.ts";

const getUsers = () => {
  return UserService.getUsers();
};

const Queries = {
  getUsers,
};

export { Queries };
