const { number: numberValidate } = require("../validators");
const { model: modelError } = require("../errors");
const { Message: MessageModel } = require("../models");
const { messageMany: messageManyResponse } = require("../responses");

module.exports = async (req, res) => {
  let { page } = req.params;
  let { dialogId } = req.params;
  let limit = 10; // number of records per page
  let offset = 0;
  //   let page = req.params.page; // page number
  offset = limit * (page - 1);

  MessageModel.findAll({
    where: {
      dialogId,
    },
    limit: limit,
    offset: offset,
  }).then(async (result) => {
    return res.status(200).json(messageManyResponse(result));
  });
  //   res.json(messageManyResponse(items));
  //   console.log("WORKS", req);

  // res.json(modelError(err));
};
