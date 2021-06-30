interface Option {
  value: string;
  text: string;
}

type Status = 'warning' | 'error' | 'success';

type StatusTexts = Record<Status, string>;
