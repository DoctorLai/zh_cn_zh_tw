var should = require('chai').should(),
    convertor = require('../index'),
    zh_cn = convertor.convertToSimplifiedChinese,
    zh_tw = convertor.convertToTraditionalChinese;

describe('zh_cn', function() {
  it('converts 夢', function() {
    zh_cn('夢').should.equal('梦');
  });
  it('converts 梦', function() {
    zh_cn('梦').should.equal('梦');
  });  
});

describe('zh_tw', function() {
  it('converts 梦', function() {
    zh_tw('梦').should.equal('夢');
  });
  it('converts 夢', function() {
    zh_tw('夢').should.equal('夢');
  });  
});

