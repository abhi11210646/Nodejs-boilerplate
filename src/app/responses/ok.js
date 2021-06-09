'use script';

module.exports = (res, data) => {
    return res.status(200).send({
        'status': true,
        'data': data
    });
};
