import { NextResponse } from "next/server";

const CONTRACT = "0x67b2E81276a44E573315644Eb1AB26FFD0995e57";

export async function POST() {
  const calldata =
    "0x1249c58b"; // mint() selector for simple ERC721C mintPublic

  return NextResponse.json({
    chainId: "eip155:8453", // Base mainnet
    method: "eth_sendTransaction",
    params: {
      to: CONTRACT,
      data: calldata,
      value: "0x5af3107a4000" // 0.0001 ETH (in hex)
    }
  });
}
