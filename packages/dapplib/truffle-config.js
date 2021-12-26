require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain essay inflict drip broken typical'; 
let testAccounts = [
"0x312b27999589968965d63be560ed321bbf8bf900866822f31e24d00e25e5161c",
"0x48d23bace6d3c5d486864cbbc0a354890ebfa7ac2ce0d843f4594a4919456f30",
"0x3187b3e0532953a041526f2d80593cd947a8cc65bf75997255380c13cb77c0fa",
"0x050ac0d590dc681f173c8bb13c038d74066599aa7e73cf30aee586dc997d2649",
"0x7492582a3ea0efc8c5f5f4f4793194aca5caa2fd6273f0a522bb3cc6bcb37722",
"0xba84ae0802609c4568382c008e9747f64a03cb22912947758861be85bcff6723",
"0x488a0b7428200bbb5bcd09abc3ac87b7cfd88bf4fa327f3446daee56e8df624b",
"0x81da6225542ddb7cb8d057526fb99755f7b6cc497fceb6470fd4548623181141",
"0x4db66c305967d4d656736d12cdfd63704ca025c3fc9ba533c437ae8ab30d38e5",
"0x2d9a705668a61b4f0fe6c97e2294b0c606e2544e4159153cd54f83d4636372ec"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


