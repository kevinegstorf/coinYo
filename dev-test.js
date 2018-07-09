const Block = require("./block");

const block = new Block("just", "testing", "block", "object");

const fooBlock = Block.mineBlock(Block.genesis(), "foo");
console.log(fooBlock.toString());
