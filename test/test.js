var assert = require('assert');
var api = require('../server/api.js');

describe('Api', () => {
    describe('#getTasks()', () => {
        it('Should return tasks', (done) => {
            try {
                api.getTasks().then(function (err, data) {
                    done();
                })
            } catch (err) {
                done(err);
            }
        })
    })
})