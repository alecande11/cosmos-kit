/* babel-plugin-inline-import './logo.png' */
export const shellExtensionInfo = {
  name: 'shell-extension',
  prettyName: 'Shell Wallet',
  logo: logo,
  mode: 'extension',
  mobileDisabled: true,
  rejectMessage: {
    source: 'Request rejected'
  },
  connectEventNamesOnWindow: ['shell_keystorechange'],
  downloads: [{
    device: 'desktop',
    browser: 'chrome',
    link: 'https://chrome.google.com/webstore/detail/shell-wallet/kbdcddcmgoplfockflacnnefaehaiocb'
  }]
};