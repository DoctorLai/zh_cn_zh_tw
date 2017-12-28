# zh_cn_zh_tw
NodeJs Library to convert between Simplified Chinese (zh-cn) and Traditional Chinese (zh-tw)


## Installation
```
npm install zh_cn_zh_tw
```

## Usage
```
var convertor = require('zh_cn_zh_tw');
var zh_cn = convertor.convertToSimplifiedChinese;
var zh_tw = convertor.convertToTraditionalChinese;
console.log(zh_cn("夢")); // convert to 梦
console.log(zh_tw("梦")); // convert to 夢
```

## Tests
```
npm test
```

## Contributing
* [@justyy](https://steemit.com/@justyy), 
    * Blog: [helloacm](https://helloacm.com)
    * Blog: [codingforspeed](https://codingforspeed.com)
    * Blog: [justyy](https://justyy.com)
    * Chrome Extension: [Simplified and Traditional](https://chrome.google.com/webstore/detail/olpihmabpjpllgmahlgiakkgaccigpfo)
    * Others: [weibomiaopai](https://weibomiaopai.com)
    * Others: [rot47](https://rot47.net)
    * Email: dr.zhihua.lai@gmail.com    

## Release Notes
* 1.0.4 Bug Fixes and Updates
* 1.0.0 Initial Release