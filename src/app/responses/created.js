module.exports = (res, body) => {
    return res.status(201).send({
        'status': true,
        'data': body
    });
};
