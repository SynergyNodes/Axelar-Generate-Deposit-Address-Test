import express from 'express';
import { AxelarAssetTransfer } from '@axelar-network/axelarjs-sdk';

const app = express()

app.get('/', async (req, res) => {
  const sdk = new AxelarAssetTransfer({
    environment: "testnet",
    auth: "local",
  });
  const result = await sdk.getDepositAddress(
    "avalanche", // source chain
    "axelar", // destination chain
    "axelar1w7qfdlg6jxjmz3pgm2fhhddkwsyknkme8ep99e", // destination address
    "wavax-wei" // asset to transfer
  );
  return res.send(result);
})

app.listen(3000, () => console.log('Start listening'))
