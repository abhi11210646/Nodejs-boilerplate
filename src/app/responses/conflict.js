module.exports = (res) => {
    return res.status(409).send({
        'status': false
    });
};
