

import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { base } from "wagmi/chains";

const WALLETCONNECT_PROJECT_ID = "f9d9fcc0ded1575dd5e922afd9cf3ed8";
const BASE_SCAN_ID = "vpEAMGP_rB7ZhU43ybQC6agpdVToaV5S";

const config = createConfig(
    getDefaultConfig({
        alchemyId: "TbRNk1aJ5NKX1YKyxd9nQuT4h49hPd2W",
        walletConnectProjectId: WALLETCONNECT_PROJECT_ID,
        chains: [base],
    })
);


const MyProvider = ({ children }) => {
    return (
        <WagmiConfig config={config}>
            <ConnectKitProvider>
             {children}
            </ConnectKitProvider>
        </WagmiConfig>
    );
};

export default MyProvider;
