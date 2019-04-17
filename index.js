module.exports = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')

  let isOptions = false

  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    isOptions = true
  } else {
    res.set('Access-Control-Allow-Origin', '*')
  }

  return { req, res, isOptions }
}
