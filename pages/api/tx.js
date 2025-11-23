import { ethers } from 'ethers';

export default async function handler(req, res) {
  const NFT_CONTRACT = process.env.NFT_CONTRACT;
  const SEA_DROP_ADDRESS = process.env.SEA_DROP_ADDRESS;
  const FEE_RECIPIENT = process.env.FEE_RECIPIENT;
  const PRICE_ETH = process.env.PRICE_ETH || "0.0001";

  const iface = new ethers.utils.Interface([
    "function mintPublic(address nftContract, address feeRecipient, address minterIfNotPayer, uint256 quantity) payable"
  ]);

  const ZERO = "0x0000000000000000000000000000000000000000";

  const calldata = iface.encodeFunctionData(
    "mintPublic",
    [NFT_CONTRACT, FEE_RECIPIENT, ZERO, 1]
  );

  const value = ethers.utils.parseEther(PRICE_ETH).toHexString();

  res.status(200).json({
    chainId: "eip155:8453",
    method: "eth_sendTransaction",
    params: {
      to: SEA_DROP_ADDRESS,
      data: calldata,
      value: value
    }
  });
}
