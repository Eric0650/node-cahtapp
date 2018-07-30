var expect = require('expect');
var {generateMessage} = require('./message');
describe('generateMessage',()=>{
  it('should generate corrct message object',()=>{
    var from = 'eric';
    var text = 'some me';
    var message = generateMessage(from,text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  })
})
