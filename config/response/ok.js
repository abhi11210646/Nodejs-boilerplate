'use script';

module.exports = (res, body) => {
    return res.status(200).send({
        'status': true,
        'token': body.token,
        'message': body.info
    });
};
