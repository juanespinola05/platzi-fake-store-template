// ? Platzi Fake Store API Documentation: https://fakeapi.platzi.com/doc/introduction

const url = '/api'

fetch('/api/v1/products')
  .then(res => res.json())
  .then(console.log)
