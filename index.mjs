import { ethers } from "ethers";
import fs from "fs";

const wallet = new ethers.Wallet.createRandom();
const json = await wallet.encrypt("test");

fs.writeFileSync(`${wallet.address}.json`, json);
