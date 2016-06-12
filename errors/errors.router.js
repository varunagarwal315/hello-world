
function notFound (req, res) {
  res.status(404).sendFile(__dirname+'/not-found.htm')
}
module.exports = notFound
