import React, { useState, useEffect } from 'react';
import { useRelayEnvironment, fetchQuery } from 'relay-hooks';
import { Menu, Dropdown, Button, Spin, Divider } from 'antd';
import { Card, Col, Row, Typography } from 'antd';
const { Title, Text } = Typography;
import { DownOutlined } from '@ant-design/icons';
import GET_MARKETPLACES_N_BONUSES_DATA, {
    KioskMarketplacesBonusesQuery,
} from '../../__generated__/KioskMarketplacesBonusesQuery.graphql';

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
                const title = labelsOrder[index] || key; // Fallback to key if index is out of bounds

                return (
                    <div key={`${key}-${index}`} style={{ padding: '25px' }}> {/* Adjust padding as needed */}
                        <Row gutter={16}>
                            <Col span={24}>
                                <Title level={5}>{title}</Title>
                                <div style={{ marginBottom: '10px' }}> {/* Adjust marginBottom as needed */}
                                    <Text strong>Sipariş Sayısı: </Text>{values[0].toLocaleString()} Adet Sipariş
                                </div>
                                <div>
                                    <Text strong>Siparişlerin Toplam Bedeli: </Text>{values[1].toLocaleString()} ₺
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
                    <Col span={12} style={{ padding: '20px' }}> {/* Adjust padding as needed */}
                        <div style={{ marginBottom: '15px' }}>
                            <Text><Text strong>Ay İçerisindeki Toplam Satış: </Text>{info.total_sale.toLocaleString()} ₺</Text>
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <Text><Text strong>Ay İçerisindeki Toplam İade: </Text>{info.total_return.toLocaleString()} ₺</Text>
                        </div>
                        <div>
                            <Text><Text strong>Ay Toplamı: </Text>{(info.total_sale - info.total_return).toLocaleString()} ₺</Text>
                        </div>
                    </Col>
                    {/* Right Side */}
                    <Col span={12} style={{ padding: '10px' }}> {/* Adjust padding as needed */}
                        {info.barems ? info.barems.map((barem, idx) => (
                            <div key={idx} style={{
                                background: barem ? 'lightgreen' : 'lightcoral',
                                margin: '5px 0', // Adjust margin as needed
                                padding: '5px',  // Adjust padding as needed
                            }}>
                                <Text strong>Barem {idx + 1}: </Text>
                                <Text>{barem ? 'Başarılı' : 'Başarısız'}</Text>
                            </div>
                        )) : null}
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
    const [bonusesData, setBonusesData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const getBonusesData = async () => {
        const {
            marketplacesBonuses,
        } = await fetchQuery<KioskMarketplacesBonusesQuery>(
            environment,
            GET_MARKETPLACES_N_BONUSES_DATA,
            {},
        );
        const parsedData = marketplacesBonuses.map(data => JSON.parse(data));
        setBonusesData(parsedData);
        // Parsing data before finding "Vivense"
        const vivenseMarketplace = parsedData.find(data => data.marketplace === "Vivense");
        setSelectedMarketplace(vivenseMarketplace);
    };

    // Call getBonusesData when the component mounts
    useEffect(() => {
        getBonusesData().then(() => setLoading(false));
    }, []);

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}><Spin /></div>;
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
    if (!selectedMarketplace) return null; // Return null if no marketplace is selected, you can render a loader here if you prefer

    return (
        <div style={{ paddingBottom: '100px' }}>
            {/* Dropdown for selecting marketplace */}
            <div style={{ textAlign: 'right', padding: '8px' }}>
                <label style={{ marginRight: '8px', fontWeight: 'bold' }}>Pazaryeri Seçimi:</label>
                <Dropdown overlay={menu}>
                    <Button style={{ minWidth: '200px' }}>
                        {selectedMarketplace ? selectedMarketplace.marketplace : 'Select...'} <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
            <Row gutter={16}>
                <Col span={2}>
                    <Card title="AYLAR" style={cardStyle}>
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            { // Assuming the months are in an array called months
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
                                                flexDirection: 'column', // Stack children vertically
                                                // Add space between the children
                                                margin: '72px 0',
                                                // Ensure text is centered
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

