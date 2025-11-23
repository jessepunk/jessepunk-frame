import { NextResponse } from "next/server";
import { ethers } from "ethers";

export async function GET() {
  const NFT_CONTRACT =
    process.env.NFT_CONTRACT ||
    "0x67b2E81276a44E573315644Eb1AB26FFD0995e57";

  const SEA_DROP =
    process.env.SEA_DROP_ADDRESS ||
    "0x3ceC776A2717Ae4E4eE42231F2ce5f4e8c57A6ef";

  const FEE_RECIPIENT =
    process.env.FEE_RECIPIENT ||
    "0xb0fFF812F80a1d58d121bC463BEACa52d2306597";

  const PRICE_ETH = process.env.PRICE_ETH || "0.0001";

  // SeaDrop mintPublic function
  const iface = new ethers.utils.Interface([
    "function mintPublic(address nftContract, address feeRecipient, address minterIfNotPayer, uint256 quantity) payable",
  ]);

  const ZERO = "0x0000000000000000000000000000000000000000";

  // Build calldata for 1 mint
  const data = iface.encodeFunctionData("mintPublic", [
    NFT_CONTRACT,
    FEE_RECIPIENT,
    ZERO,
    1,
  ]);

  const value = ethers.utils.parseEther(PRICE_ETH).toHexString();

  return NextResponse.json({
    chainId: "eip155:8453", // Base Mainnet
    method: "eth_sendTransaction",
    params: {
      to: SEA_DROP, // SeaDrop contract
      data,
      value,
    },
  });
}
