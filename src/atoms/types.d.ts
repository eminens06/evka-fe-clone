interface Option {
  value: string;
  text: string;
}

type Status = 'warning' | 'error' | 'success' | 'pending';

type StatusTexts = Record<Status, string>;
