# Key Scramble

Scramble keys, secrets and tokens.

In case you want to document something which contains e.g. a client id and client secret, you can blur a screenshot or just 'key-scramble' and replace it. In this case the structure of the key is available and the user of your document will be happy.

## Command Line

```sh
./bin/key-scramble key
```

In case your key contains one ore more ! characters, bash will show an error message __event not found__. Turn off history with following command:

```sh
set +H
```