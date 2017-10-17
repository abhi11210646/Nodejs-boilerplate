'use strict';

const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    video: {
        type: String,
        trim: true,
        default: 'https://www.youtube.com/embed/epZ0t0ewIC4'
    },
    title: {
        type: String,
        trim: true,
        default: 'JULIAN SMITH - Car Phone!'
    },
    description: {
        type: String,
        trim: true,
        default: "Inani vocent feugait cu eam, his et impetus indoctum, mea euismod salutandi. Mel consequat moderatius intellegeb at an, appareat pertinacia no pro, noster aperiam blandit vim. Ne mei illud quidam labitur, eu adhuc clita quo."
    },
    type: {
        type: String,
        enum: ['TOP', 'FEATURED', 'CURRENT'],
        default: 'TOP'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Video', videoSchema);
