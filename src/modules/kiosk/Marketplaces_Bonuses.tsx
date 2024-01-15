import React, { useState, useEffect } from 'react';
import moment from 'moment';
const trTR = require('antd/lib/locale/tr_TR');
import { useRelayEnvironment, fetchQuery } from 'relay-hooks';
import { Menu, Dropdown, Button, Spin, Divider, DatePicker, Card, Col, Row, Typography } from 'antd';
const { Title, Text } = Typography;
import { DownOutlined } from '@ant-design/icons';
import GET_MARKETPLACES_N_BONUSES_DATA, {
  KioskMarketplacesBonusesQuery,
} from '../../__generated__/KioskMarketplacesBonusesQuery.graphql';
import VerticalProgressBar from './VerticalProgressBar';

const monthNamesTr = {
  '1': 'Ocak',
  '2': 'Şubat',
  '3': 'Mart',
  '4': 'Nisan',
  '5': 'Mayıs',
  '6': 'Haziran',
  '7': 'Temmuz',
  '8': 'Ağustos',
  '9': 'Eylül',
  '10': 'Ekim',
  '11': 'Kasım',
  '12': 'Aralık',
};

const labelsOrder = [
  "Aynı Ay İçerisinde Oluşturulup Sevk Edilen Siparişler",
  "Bir Önceki Ay Oluşturulup Bulunduğumuz Ay İçerisinde Sevk Edilen Siparişler",
  "2 Ay Önce Oluşturulup Bulunduğumuz Ay İçerisinde Sevk Edilen Siparişler"
];

const cardStyle = { minHeight: '400px' };

const SevkCard = ({ data, label, isSiparisSevkiyat }) => {
  return (
    <Card title={label} style={cardStyle}>
      {Object.entries(data).map(([key, values], index, array) => {
        const title = labelsOrder[index] || key;

        return (
          <div key={`${key}-${index}`} style={{ padding: '25px' }}>
            <Row gutter={16}>
              <Col span={24}>
                <Title level={5}>{title}</Title>
                <div style={{ marginBottom: '6px' }}>
                  <Text strong style={{ fontSize: '1.1em' }}>Sevk Edilen Sipariş Sayısı: </Text>{values[0]} Adet Sipariş (Total Sipariş Sayısı: {values[1]})
                </div>
                <div>
                  <Text strong style={{ fontSize: '1.1em' }}>Siparişlerin Toplam Bedeli: </Text>{values[2].toLocaleString()} ₺
                </div>
              </Col>
            </Row>
            {index < array.length - 1 && <Divider />}
          </div>
        );
      })}
    </Card>
  );
};
const SatisCard = ({ data, label }) => {
  return (
    <Card title={label} style={cardStyle}>
      {Object.entries(data).reverse().map(([month, info], index) => (
        <Row key={`${month}-${index}`} gutter={16}>
          {/* Left Side */}
          <Col span={12} style={{ padding: '10px', background: '#f4f4f4', borderRadius: '8px' }}>
            <div style={{ marginBottom: '10px' }}>
              <Text><Text strong>Ay İçerisindeki Toplam Satış: </Text>{info.total_sale.toLocaleString()} ₺</Text>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <Text><Text strong>Ay İçerisindeki Toplam İade: </Text>{info.total_return.toLocaleString()} ₺</Text>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <Text><Text strong>Ay Toplamı: </Text>{(info.total_sale - info.total_return).toLocaleString()} ₺</Text>
            </div>
            <div>
              <Text><Text strong>Pazar Yerine Ödenen Toplam Komisyon Tutarı: </Text>{info.commission_total.toLocaleString()} ₺</Text>
            </div>

          </Col>
          {/* Right Side */}
          <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {info.barems ?
              <div style={{
                background: info.barems[0] ? '#4CAF50' : 'lightcoral',
                margin: '5px 0',
                padding: '10px',
                borderRadius: '4px',
                width: '90%',
                textAlign: 'center',
              }}>
                <Text strong>Barem 1</Text>
              </div>
              : null}
          </Col>
          {index < Object.entries(data).length - 1 && <Divider />}
        </Row >
      ))}
    </Card>
  );
};

const MarketplaceDataViewer = () => {
  const environment = useRelayEnvironment();
  const [selectedMarketplace, setSelectedMarketplace] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(moment());
  const [bonusesData, setBonusesData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentMonthTotal, setCurrentMonthTotal] = useState(0);
  const [barem1, setBarem1] = useState(0);
  const [barem2, setBarem2] = useState(0);
  const [barem3, setBarem3] = useState(0);


  const getBonusesData = async (month, year) => {
    setLoading(true);
    const {
      marketplacesBonuses,
    } = await fetchQuery<KioskMarketplacesBonusesQuery>(
      environment,
      GET_MARKETPLACES_N_BONUSES_DATA,
      {
        queryMonth: month,
        queryYear: year,
      },
    );

     if (!marketplacesBonuses) {
      console.error('Bonus hesaplamalarini almada hata!');
      return;
    }

    let firstItem;
    if (marketplacesBonuses && marketplacesBonuses.length) {
      firstItem = JSON.parse(marketplacesBonuses[0]);
      setCurrentMonthTotal(firstItem["current_month_total"]);
      setBarem1(firstItem["barem1"]);
      setBarem2(firstItem["barem2"]);
      setBarem3(firstItem["barem3"]);

      const parsedData = marketplacesBonuses.slice(1).map(data => JSON.parse(data));
      setBonusesData(parsedData);

      const selectedMarketplaceStillAvailable = parsedData.find(
        data => data.marketplace === selectedMarketplace?.marketplace
      );

      if (selectedMarketplaceStillAvailable) {
        setSelectedMarketplace(selectedMarketplaceStillAvailable);
      } else {
        const vivenseMarketplace = parsedData.find(data => data.marketplace === "Vivense");

        if (vivenseMarketplace) {
          setSelectedMarketplace(vivenseMarketplace);
        } else if (parsedData.length > 0) {
          setSelectedMarketplace(parsedData[0]);
        } else {
          setSelectedMarketplace(null);
        }
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    const month = selectedMonth.month() + 1;
    const year = selectedMonth.year();
    getBonusesData(month, year).then(() => setLoading(false));
  }, [selectedMonth]);

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '375px', marginBottom: '375px' }}><Spin /></div>;
  }


  const handleChange = (e) => {
    const marketplace = bonusesData.find(data => data.marketplace === e.target.value);
    setSelectedMarketplace(marketplace);
  }
  const handleMenuClick = (e) => {
    const marketplace = bonusesData.find(data => data.marketplace === e.key);
    setSelectedMarketplace(marketplace);
  };
  const months = selectedMarketplace && selectedMarketplace.months ? Object.keys(selectedMarketplace.months) : [];

  const menu = (
    <Menu onClick={handleMenuClick}>
      {bonusesData && bonusesData.map((data, index) => (
        <Menu.Item key={data.marketplace}>
          {data.marketplace}
        </Menu.Item>
      ))}
    </Menu>
  );
  if (!selectedMarketplace) return null;

  return (
    <div style={{ paddingBottom: '100px' }}>
      <div style={{ textAlign: 'right', padding: '8px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Tarih Seçimi:</label>
        <DatePicker
          picker="month"
          value={selectedMonth}
          onChange={(date) => setSelectedMonth(date)}
          locale={trTR.DatePicker}
          style={{ marginRight: '20px' }}
        />

        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Pazaryeri Seçimi:</label>
        <Dropdown overlay={menu}>
          <Button style={{ minWidth: '200px' }}>
            {selectedMarketplace ? selectedMarketplace.marketplace : 'Select...'} <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <Row>
        <Col span={24}>
          <Card title="Aylık Toplam Satış İlerleme Barı" style={{ height: '150px' }}>
            <VerticalProgressBar
              barem1={barem1}
              barem2={barem2}
              barem3={barem3}
              currentMonthTotal={currentMonthTotal}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={2}>
          <Card title="AYLAR" style={cardStyle}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              {
                [...Object.entries(selectedMarketplace?.months || {})]
                  .reverse()
                  .slice(0, 3)
                  .map(([month, _], index) => (
                    <div
                      key={index}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        margin: '72px 0',
                        textAlign: 'center',
                      }}
                    >
                      <Text style={{ fontSize: '16px' }}><b>{monthNamesTr[month]}</b></Text>
                    </div>
                  ))
              }
            </div>
          </Card>
        </Col>
        <Col span={11}>
          <SatisCard
            data={selectedMarketplace?.months || {}}
            label="SATIŞ"
          />
        </Col>
        <Col span={11}>
          <SevkCard
            data={selectedMarketplace?.siparis_sevkiyat || {}}
            label="SEVKİYAT"
            isSiparisSevkiyat={true}
          />
        </Col>
      </Row>
    </div>
  );

};
export default MarketplaceDataViewer;