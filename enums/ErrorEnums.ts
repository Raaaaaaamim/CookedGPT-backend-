export enum ErrorMessages {
  BAD_REQUEST = "Invalid request: The provided data is incomplete or incorrect",
  UNAUTHORIZED = "Authentication required: Please log in to access this resource",
  FORBIDDEN = "Access denied: You don't have permission to perform this action",
  NOT_FOUND = "Resource not found: The requested item doesn't exist",
  SERVER_ERROR = "Server error: Something went wrong on our end, please try again later",
}
export enum StatusCodes {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
  SUCCESS = 200,
}
