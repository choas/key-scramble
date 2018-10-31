# Key Scramble

Scramble keys, secrets and tokens.

In case you want to document something which contains e.g. a client id and client secret, you can blur a screenshot or just 'key-scramble' and replace it. In this case the structure of the key is available and the user of your document will be happy.

## Example

```javascript
let keyScramble = require('./key-scramble.js');
console.log("secretKey123456", keyScramble("secretKey123456"));
console.log("userId_20181031", keyScramble("userId_20181031", true));
```

## Command Line

```sh
./bin/key-scramble key [--resetNumber]
```

With the resetNumber parameter all numbers will be changed to '9' and other characters aren't touched.

In case your key contains one ore more ! characters, bash will show an error message __event not found__. Turn off history with following command:

```sh
set +H
```