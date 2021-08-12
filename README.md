# freeFacts

A REST API for facts

Exclusivly built this for [Bink Chrome Extension](https://github.com/AmitGujar/Bink-Chrome-Extension) project and decided to publish for others to use as well. The database currently includes more than 5000 facts all around the world.

## Install NPM package

```
npm install freefactsdk
```

[Documentation for NPM package](https://github.com/Amit/freeFactsNPM)

## Table of Contents

- [Get a random fact](#get-a-random-fact).
- [Get all facts](#get-all-facts)

## API Documentation

### Get a random fact

Returns a single random fact from the server.

#### Request

` https://freefacts.herokuapp.com/facts/random`

#### Params

```
name: string (required)

```

#### Response

```javascript
[
  {
    id: "601cf8cb3a683514a0200c9d",
    message: "Peanuts aren’t technically nuts",
  },
];
```

### Get all facts

Returns all facts.

#### Request

`https://freefacts.herokuapp.com/facts/`

#### Params

```
name: string (required)

```

#### Response

```javascript
{
    "count": "5700",
    "All_facts: {
        "facts" : [
            "_id": "601cf11396e9c813e0e46c61",
            "name": "The first oranges weren’t orange"
        ]
    }
}
```

## Get featured

If you are using my API in your application, get featured here.
Make an issue with your application.

- [Bink Chrome Extension](https://chrome.google.com/webstore/detail/hobnhcjgdhdcmgcjlidgcladgdlbpgba) by [AmitGujar](https://github.com/AmitGujar)

## Contributing

All feedback and contributions are welcome!
