'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('API server' ,  ()=>{
  it('Home page',async ()=>{
      const res = await request.get('/')
      expect(res.status).toEqual(200);
    expect(res.text).toEqual('Hello World')
  })
  it('square page',async ()=>{
    const res = await request.get('/square?num=5')
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('{ num : 25 }')
  })
  
})