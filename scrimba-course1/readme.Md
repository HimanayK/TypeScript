# Introduction of TypeScript: Bob Ziroll
### Topics covered: 
- **Basic, literal and custom types**
- **Optional properties**
- **Unions**: How you can combine multiple different types into a single type which naturally led us to learn about TYPE NARROWING
- **Type Narrowing**: we can narrow down which of those union types we are using inside of our code 
- **Utility Types**: give us some extra functionality in generics which allow us to have additional felxibility inside of our TypeScript code.



### How to use typeScript ⬇️
1. npm install typescript --save-dev   
2. npx tsc
3. npx tsc --init

```js
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "./build"
  }
}

```

>You can open the file in an editor to add those options. This will configure the TypeScript compiler to transpile TypeScript files located in the ***src***/ directory of your project, into JavaScript files in the ***build***/ directory.


>Note:
>
>> In the Terminal first write:
 tsc OR tsc fileName.ts   
 node fileName.js
