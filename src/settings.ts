// import getConfig from 'next/config';
// Only holds serverRuntimeConfig and publicRuntimeConfig
// const { publicRuntimeConfig } = getConfig();

const settings = {
  apiUrl: process.env.API_URL || '',
  apiWsUrl: process.env.API_WS_URL || '',
  apiBaseUrl: process.env.API_BASE_URL || '',
  env: process.env.NODE_ENV || 'development',
  //defaultPageSize: 20,
  timestampFormat: 'DD.MM.YYYY HH:mm:ss',
  defaultHeader: 'Real Estate',
  version: process.env.VERSION || '',
  totalRowType: 'Total',
  camTotalRowType: 'camTotal',
  autoCompleteLevel: 2,
  imperial: 'IMPERIAL',
  metric: 'METRIC',
  M2_PER_SQFT: 10.764,
  section_container_height: 40,
  empty_search_text: "We don't have any results matching your query.",
  pageSizeOptions: ['10', '25', '50', '100'],
  pageSize: 25,
  remainingTimeLevel: 0,
};

export default settings;
