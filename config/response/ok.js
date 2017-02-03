'use script';

module.exports = (res, data) => {
    return res.status(200).send({
            'message': "success",
            'data':data
    });
};