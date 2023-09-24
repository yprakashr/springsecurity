module.exports = {
  SUCCESS_SUGNUP:
    "A verification email has been sent to your email, Kindly follow the instruction",
  SUCCESS_PASSWORD_CHANGE: "You have sucessfully change password",
  SUCCESS_UPDATE: (str) => `${str} updated successfully`,
  SUCCESS_DELETED: (str) => `${str} deleted successfully`,
  SUCCESS_ADDED: (str) => `${str} added successfully`,
  ACTIVE_INACTIVE: (status) => `User ${status} successfully`,
  BLOCK_UNBLOCK_PRODUCT: (bBlock) =>
    bBlock ? "Product blocked successfully" : "Product Unblocked successfully",
  STATUS_PRODUCT: (status, size) =>
    `${size > 1 ? "Products" : "Product"} ${status}!`,
  SUCCESS_SENT_LINK:
    "Reset password link has been sent to your email, Kindly check.",
  SUCCESS_RESET_PASSWORD: "Password reset successfully",
  SUCCESS_EMAIL_VERIFIED:
    "Your email has been verified. You have been loggedin",
  RETURN_ERROR_MESSAGE:
    "This item already returned. Please check with administration",
  WHOLESALER_INVENTORY_UNIQUE_CHECK:
    "This drug details already exist in our database. Please insert new record",
  SALES_ORDER_ERROR_MESSAGE: "No orders",
  REPORTS_SUCCESS_MESSAGE: "Reports fetched sucessfully",
  SALES_ORDER_DATE:
    "It looks like you've entered a date in the future. Please check your input and try again.",
  WHOLESALER_DASHBOARD: "Fetched all dashboard counts",
  SEARCH_ORDER: "No orders related to this search key",
};
