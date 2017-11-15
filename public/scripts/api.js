/**
 * API
 */
(function (APPTODO) {
    'use strict';

    function _Api(){};

    /**
     * @param undefined
     * @return Promise
     */
    _Api.prototype.getTasks = function () {
        return $.get("api/tasks");
    };

    /**
     * @param String name of the task
     * @return Promise
     */
    _Api.prototype.postTask = function (name) {
        if (name === "")
            throw new Error("No name specified");

        return $.post("api/task", { name: name });
    };

    /**
     * @param String id of the task
     * @param Boolean status of the task
     * @return Promise
     */
    _Api.prototype.editTask = function (id, done) {
        return $.ajax("api/task", {
            method: "PUT",
            data: {
                id: id,
                done: done
            }
        });
    };

    APPTODO.Api = _Api;

})(APPTODO);