import { useState } from "react"
import { Select, Space, Typography, Flex, Divider } from "antd";
import { useCrypto } from "../context/crypto-context";


export default function AddAssetForm() {
    const { crypto } = useCrypto()
    const [coin, setCoin] = useState(null)

    if (!coin) {
        return (
            <Select
                style={{ width: '100%' }}
                onSelect={(value) => setCoin(crypto.find(c => c.id === value))}
                placeholder="Select coin"
                options={crypto.map(coin => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon
                }))}
                optionRender={option => (
                    <Space>
                        <img style={{ width: 20 }} src={option.data.icon} alt={option.data.label} /> {option.data.label}
                    </Space>
                )}
            />
        )
    }
    return (
        <form>
            <Flex gap='small'>
                <img src={coin.icon} alt={coin.name} style={{ width: 40 }} />
                <Typography.Title level={2} style={{ margin: 0 }}>
                    {coin.name}
                </Typography.Title>
            </Flex>
            <Divider />
        </form>
    )
}