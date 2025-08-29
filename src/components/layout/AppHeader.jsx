import { Layout, Select, Space, Button } from 'antd';
import { useCrypto } from '../../context/crypto-context';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  paddingInline: 48,
  padding: '1rem',
  display: 'flex',
  background: 'white',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];

export default function AppHeader() {
  const { crypto } = useCrypto()
  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{ width: 250 }}
        value="press / to open"
        optionLabelProp='label'
        options={options}
        optionRender={option => (
          <Space>
            <img src="" alt="" /> bitcoin
          </Space>
        )}
      />
      <Button type="primary">Add Asset</Button>
    </Layout.Header>)
}