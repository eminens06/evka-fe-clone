interface User {
  firstName?: string;
  lastName?: string;
  email: string;
  id: string;
  configurations: any;
}

interface Session {
  user: User;
  token: string;
  refreshToken: string;
}

interface BookCreateFormikValues {
  name: string;
  duration: string;
  description: string;
  authorIds?: string[];
  subjectIds?: string[];
  isShown?: boolean;
  isFav?: boolean;
}
