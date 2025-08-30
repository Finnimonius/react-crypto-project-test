import { Layout, Typography } from 'antd';
import { useCrypto } from '../../context/crypto-context';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
  padding: '1rem'
};

export default function AppContent() {
  const {crypto} = useCrypto()
    return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{textAlign: 'left', color: '#fff'}}>Portfolio: 12000</Typography.Title>
    </Layout.Content>
  )
}