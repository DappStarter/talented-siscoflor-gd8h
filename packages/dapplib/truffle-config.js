require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind honey inflict bread sunset submit'; 
let testAccounts = [
"0xc5603ef7844c214b4d8d19a172dc6919d60f75324c07911ac3ad09d20de81b20",
"0x55acf5c1796a41b52f46a95ff5d526e867ff3d779227994e5ebf329b225ecc49",
"0x3a0443ad5ab74368e9cbc410e7fa2a8c38c0f51668b994542de32f7d4da30404",
"0x2903929f6cf8cd5c0f3ac4b79d07c4138b00ac809b0019bc7be7ad0f36ebab92",
"0x160bc7dda8d989bd9f5b3a33f33f05777a8549d742226e5cc0a38f193eb40df8",
"0xcd9e6e20fe705d01d5aae8c2ca024e25900f6ca74ce22ee4bd6887acdee1f121",
"0xbd5931838f83b278242771ab3bb8ed525aa47c0d3d56902587fa18e4a53c412e",
"0x03db707c92f90b5c3213d1d55e1001b3b19292451c9a3fe8265fe07d67aa7f73",
"0xc77bbbc4229662d7f9aab703d456c20915ced4bb79c7cfc83401c30ea5b51e7e",
"0x4720a4158d48f78f7ea297d23ba52b4ddeaacfeec5f3b107a44eb36b9ccc1e66"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

