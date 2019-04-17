const test = require('tape')
const cors = require('.')

//
// Create a mock request and response method
//

function status (code) {
  this.statusCode = code
  return this
}

function send (obj) {
  const body = { ...this, ...obj }
  return body
}

function set (value) {
  this[value] = value
  return this
}

const res = {
  status,
  send,
  set
}

const testCloudFunction = async (request, response) => {
  const { res, isOptions } = cors(request, response)

  if (isOptions) return res.status(204).send({ data: { res } })
  else return res.status(200).send({ data: { res } })
}

test('sanity', t => {
  t.ok(true)
  t.end()
})

test('pass - cors OPTIONS', async t => {
  const req = {
    method: 'OPTIONS'
  }
  const { err, data, statusCode } = await testCloudFunction(req, res)
  t.ok(!err)
  {
    const { res } = data
    t.equals(res['Access-Control-Allow-Origin'], 'Access-Control-Allow-Origin')
    t.equals(res['Access-Control-Allow-Methods'], 'Access-Control-Allow-Methods')
    t.equals(res['Access-Control-Allow-Headers'], 'Access-Control-Allow-Headers')
    t.equals(res['Access-Control-Max-Age'], 'Access-Control-Max-Age')
    t.ok(!err)
    t.ok(data)
    t.equals(statusCode, 204)
    t.end()
  }
})

test('pass - GET', async t => {
  const req = {
    method: 'GET'
  }
  const { err, data, statusCode } = await testCloudFunction(req, res)
  t.ok(!err)
  {
    const { res } = data
    t.equals(res['Access-Control-Allow-Origin'], 'Access-Control-Allow-Origin')
    t.equals(res['Access-Control-Allow-Methods'], 'Access-Control-Allow-Methods')
    t.equals(res['Access-Control-Allow-Headers'], 'Access-Control-Allow-Headers')
    t.equals(res['Access-Control-Max-Age'], 'Access-Control-Max-Age')
    t.ok(!err)
    t.ok(data)
    t.equals(statusCode, 200)
    t.end()
  }
})

test('pass - POST', async t => {
  const req = {
    method: 'POST'
  }
  const { err, data, statusCode } = await testCloudFunction(req, res)
  t.ok(!err)
  {
    const { res } = data
    t.equals(res['Access-Control-Allow-Origin'], 'Access-Control-Allow-Origin')
    t.equals(res['Access-Control-Allow-Methods'], 'Access-Control-Allow-Methods')
    t.equals(res['Access-Control-Allow-Headers'], 'Access-Control-Allow-Headers')
    t.equals(res['Access-Control-Max-Age'], 'Access-Control-Max-Age')
    t.ok(!err)
    t.ok(data)
    t.equals(statusCode, 200)
    t.end()
  }
})

test('pass - PUT', async t => {
  const req = {
    method: 'GET'
  }
  const { err, data, statusCode } = await testCloudFunction(req, res)
  t.ok(!err)
  {
    const { res } = data
    t.equals(res['Access-Control-Allow-Origin'], 'Access-Control-Allow-Origin')
    t.equals(res['Access-Control-Allow-Methods'], 'Access-Control-Allow-Methods')
    t.equals(res['Access-Control-Allow-Headers'], 'Access-Control-Allow-Headers')
    t.equals(res['Access-Control-Max-Age'], 'Access-Control-Max-Age')
    t.ok(!err)
    t.ok(data)
    t.equals(statusCode, 200)
    t.end()
  }
})

test('pass - DELETE', async t => {
  const req = {
    method: 'DELETE'
  }
  const { err, data, statusCode } = await testCloudFunction(req, res)
  t.ok(!err)
  {
    const { res } = data
    t.equals(res['Access-Control-Allow-Origin'], 'Access-Control-Allow-Origin')
    t.equals(res['Access-Control-Allow-Methods'], 'Access-Control-Allow-Methods')
    t.equals(res['Access-Control-Allow-Headers'], 'Access-Control-Allow-Headers')
    t.equals(res['Access-Control-Max-Age'], 'Access-Control-Max-Age')
    t.ok(!err)
    t.ok(data)
    t.equals(statusCode, 200)
    t.end()
  }
})
