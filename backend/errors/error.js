const serverError = (req, res, next) => {
    res.status(500).send("")
}
export default serverError