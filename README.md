PlayServer Api for Javascript
==========

Install
-------

```bash
npm install playserver-js
```

Examples
--------

```javascript
const PlayServer = require('playserver-js');
async function main() {
  let checksum = await PlayServer.get.checksum(url); // url ex : RoFreedom-15505
  let saveimg = await PlayServer.save.checksum('img', checksum); //folderpath, checksum
  let sendanswer = await PlayServer.send.checksum(url, '15505', answer, 'sctnightcore', checksum); // url, serverid, answer, gameid, checksum
}
```

Donation
--------
paypal.me/sctnightcore