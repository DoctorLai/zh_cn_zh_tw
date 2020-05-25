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
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D
