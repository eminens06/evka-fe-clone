import moment from 'moment';

export const monthlySales = {
  labels: [
    'Ocak',
    'Subat',
    'Mart',
    'Nisan',
    'Mayis',
    'Haziran',
    'Temmuz',
    'Agustos',
    'Eylul',
    'Ekim',
    'Kasim',
    'Aralik',
  ],
  datasets: [
    {
      label: 'Toplam Satış(TL)',
      data: [],
      borderWidth: 1,
      backgroundColor: '#587889',
    },
    {
      label: 'Ortalama Satış(TL)',
      data: [
        20000,
        30000,
        5000,
        20000,
        30000,
        5000,
        20000,
        30000,
        12000,
        19000,
        30000,
        5000,
      ],
      borderWidth: 1,
      backgroundColor: 'red',
    },
  ],
};

export const dateOptions = [
  { text: 'Satış Tarihi', value: 'ORDER' },
  { text: 'Sevk Tarihi', value: 'SHIPMENT' },
];

export const cumulativeAnnualData = {
  labels: ['N11', 'Evka', 'Trendyol', 'Hepsiburada', 'GittiGidiyor', 'Gel-Al'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const productSales = [
  {
    key: '1',
    saleDate: moment().format('DD/MM/YYYY').toString(),
    shipmentDate: moment().format('DD/MM/YYYY').toString(),
    name: 'Katlanir Masa',
    marketplace: 'Evka',
    count: '2',
    price: '2000',
    cargoName: 'Surat',
  },
  {
    key: '2',
    saleDate: moment().format('DD/MM/YYYY').toString(),
    shipmentDate: moment().format('DD/MM/YYYY').toString(),
    name: 'Layer C Sehpa Siyah',
    marketplace: 'Vivense',
    count: '2',
    price: '1200',
    cargoName: 'Yurtici Kargo',
  },
  {
    key: '3',
    saleDate: moment().format('DD/MM/YYYY').toString(),
    shipmentDate: moment().format('DD/MM/YYYY').toString(),
    name: 'Zemax Sehpa',
    marketplace: 'Trendyol',
    count: '2',
    price: '900',
    cargoName: 'Horoz',
  },
  {
    key: '3',
    saleDate: moment().format('DD/MM/YYYY').toString(),
    shipmentDate: moment().format('DD/MM/YYYY').toString(),
    name: 'Seffaf Akrilik C Sehpa',
    marketplace: 'Trendyol',
    count: '2',
    price: '1200',
    cargoName: 'Horoz',
  },
];
