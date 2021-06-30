import { Roles } from '../../layout/roles';

interface User {
  firstName?: string;
  lastName?: string;
  email: string;
  id: string;
  roles: Roles[];
}

interface Session {
  user: User;
  token: string;
  refreshToken: string;
}
