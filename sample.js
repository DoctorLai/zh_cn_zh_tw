var convertor = require('zh_cn_zh_tw');
var zh_cn = converter.convertToSimplifiedChinese;
var zh_tw = converter.convertToTraditionalChinese;
console.log(zh_cn("��")); // convert to ��
console.log(zh_tw("��")); // convert to ��