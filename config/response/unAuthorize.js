'use script';

module.exports = (res, info) => {
    return res.status(401).send({
        'status': false,
        'message': info.message
    });
};
