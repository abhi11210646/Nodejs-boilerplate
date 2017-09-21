'use script';

module.exports = (res, data) => {
    return res.status(200).send({
        'status': "success",
        'body': data
    });
};
