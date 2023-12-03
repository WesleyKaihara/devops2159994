const AllocationsDAO = require("../data/allocations-dao").AllocationsDAO;
const {
    environmentalScripts
} = require("../../config/config");

function AllocationsHandler(db) {
    "use strict";

    const allocationsDAO = new AllocationsDAO(db);

    this.displayAllocations = (req, res, next) => {
        const {
            userId
        } = req.session;

        allocationsDAO.getByUserId(userId, (err, allocations) => {
            if (err) return next(err);
            return res.render("allocations", {
                userId,
                allocations
            });
        });
    };
}

module.exports = AllocationsHandler;
