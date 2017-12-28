var convertor = require('zh_cn_zh_tw');
var zh_cn = converter.convertToSimplifiedChinese;
var zh_tw = converter.convertToTraditionalChinese;
console.log(zh_cn("‰ô")); // convert to ÃÎ
console.log(zh_tw("ÃÎ")); // convert to ‰ô