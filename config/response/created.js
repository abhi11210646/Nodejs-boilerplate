module.exports = (res, body) => {
    return res.status(201).send({
        'status': true,
        'token': body.token,
        'message': body.info
    });
};
