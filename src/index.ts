/**
 * a very basic file to illustrate what's happening when the decoders `package.json` does not have a `typings`/`types` field.
 */

// working/compromise solution:
// works in Typescript >= 4.1
import { boolean as dboolean } from "decoders/index"

// target/preferred:
// works in Typescript >= 4.2
// maybe due to: https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/#d-ts-extensions-cannot-be-used-in-import-paths
// import { boolean as dboolean } from "decoders"

const b = dboolean
const b_ = b.verify(true)

console.log("what is b:", b_)
