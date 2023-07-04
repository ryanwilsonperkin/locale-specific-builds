Example of a webpack project configured to perform locale-specific builds.

When it finds an import to a `./translations` directory, it will replace it
with an import to the locale-specific json file within that directory.

Build:

```sh
yarn build

# Alternatively
yarn build:en
yarn build:fr
```

Run:

```sh
node dist/en/main.js
node dist/fr/main.js
```
