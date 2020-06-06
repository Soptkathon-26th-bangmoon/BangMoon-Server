module.exports = {
    success: (status, data) => {
        return {
            status: status,
            message: "success",
            data: data
        }
    },
    fail: (status, message) => {
        return {
            status: status,
            message: "false"
        }
    },
};
