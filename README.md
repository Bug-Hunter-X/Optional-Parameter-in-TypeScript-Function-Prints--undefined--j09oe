# TypeScript Optional Parameter Bug

This repository demonstrates a common issue encountered when using optional parameters in TypeScript functions.  When an optional parameter is not provided, the function prints 'undefined' instead of nothing.

## Bug Description
The `printName` function takes an optional string parameter `name`.  If the function is called without providing a value for `name`, the output is 'undefined' instead of an empty line or no output at all. 

## Reproduction
1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler: `tsc bug.ts`
3. Run the compiled JavaScript file: `node bug.js`

You will see 'undefined' printed to the console.