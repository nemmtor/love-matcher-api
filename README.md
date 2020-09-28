# Love Matcher API

Api made for Love Matcher app.

Checkout app at [Live](https://love-matcher.netlify.app/result?name1=Kacper&name2=Karolina) or check it's [Repo](https://github.com/nemmtor/love-matcher)

## What's the purpose?

This api has just 1 endpoint - POST @/match.

It calculates "love rating" on 2 names given in body request, responds with  names, rating and message(msg is based on rating):

## Example

Request: 
```json
  "name1": "Bob",
  "name2": "Alice"
```
Respone:
```json
{
  "name1": "Bob",
  "name2": "Alice",
  "rating": 0.73,
  "message": "Definetly worth to give it a try"
}
```

## Tech stack

- TypeScript
- Express
- Jest for testing
