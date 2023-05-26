const checkIsEmpty = (field) => {
    if (field === undefined || field === null || field === "") return true;
    else return false;
}


const validateData = (req, res, next) => {
    const { Content } = req.body;
    if (checkIsEmpty(Content)) {
        return res.status(404).json({
            message: "Input blank"
        })
    }
    if (Content.length<10) {
        return res.status(404).json({
            message: "Content at least 10 characters"
        })
    }
    next();
}

module.exports = validateData;