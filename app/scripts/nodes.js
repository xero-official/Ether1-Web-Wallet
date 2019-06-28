'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    XERO: "XERO"
};
nodes.ensNodeTypes = [nodes.nodeTypes.XERO, nodes.nodeTypes.Ropsten];
nodes.ensSubNodeTypes = [nodes.nodeTypes.XERO];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.XERO, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'eth_mew': {
        'name': 'Xerom',
        'blockExplorerTX': 'https://explorer.xerom.org/#/tx/[[txHash]]',
        'blockExplorerAddr': 'https://explorer.xerom.org/addr/[[address]]',
        'type': nodes.nodeTypes.XERO,
        'eip155': true,
        'chainId': 1313500,
        'tokenList': require('./tokens/ethTokens.json'),
        'abiList': require('./abiDefinitions/ethAbi.json'),
        'service': 'rpc.xerom.org',
        'lib': new nodes.customNode('https://rpc.xerom.org', '443')
    },
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
