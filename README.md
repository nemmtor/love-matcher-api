# Love Matcher API

Api made for love matcher app

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
