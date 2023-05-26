const database = require("../utils/database");
const checkExistId = async (req, res, next) => {
    try {
      const {id} = req.params; // Lấy ID từ tham số trong yêu cầu
  
      // Thực hiện truy vấn để kiểm tra ID tồn tại
      let data = await database.execute(`SELECT * FROM note_hackathon_2.tbl_note WHERE Note_id=${id}`);
      let [findNote] = data;
      console.log("findNote",findNote);
      if (findNote.length>0) {
        next();
      } else {
        // Nếu ID không tồn tại, trả về lỗi
        return res.status(404).json({ error: "ID not found" });

      }
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: "An error occurred while checking ID" });
    }
  };

module.exports = checkExistId;