interface Option {
  value: string;
  text: string;
}

type Status =
  | 'warning'
  | 'error'
  | 'success'
  | 'pending'
  | 'pending_paint'
  | 'none';

type StatusObject = {
  text: string;
  status: Status;
};
