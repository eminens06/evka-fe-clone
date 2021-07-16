interface Option {
  value: string;
  text: string;
}

type Status = 'warning' | 'error' | 'success' | 'pending' | 'none';

type StatusObject = {
  text: string;
  status: Status;
};
