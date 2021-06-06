interface User {
  first_name?: string;
  last_name?: string;
  username: string;
  id: string;
  roles: any;
}

interface Session {
  user: User;
  token: string;
  refreshToken: string;
}
