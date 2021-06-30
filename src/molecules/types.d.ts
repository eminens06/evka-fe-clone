type Column = {
  key: string;
  title: string;
  dataIndex: string;
  render?: Function;
};

type Data = Record<string, any>;

type DataSource = Data[];
