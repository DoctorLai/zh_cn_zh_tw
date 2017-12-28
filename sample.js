var convertor = require('zh_cn_zh_tw');
var zh_cn = convertor.convertToSimplifiedChinese;
var zh_tw = convertor.convertToTraditionalChinese;
console.log(zh_cn("夢")); // convert to 梦
console.log(zh_tw("梦")); // convert to 夢