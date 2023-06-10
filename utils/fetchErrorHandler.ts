export const fetchErrorHandler = (error: any) => {
  switch (error.response.status) {
    case 400:
      return "Bad request!";
    case 401:
      return "Unauthorized!";
    case 402:
      return "Payment required!";
    case 403:
      return "Forbidden!";
    case 404:
      return "Not found!";
    case 405:
      return "Method not allowed!";
    case 406:
      return "Not acceptable!";
    case 408:
      return "Request timeout!";
    case 409:
      return "Conflict!";
    case 500:
      return "Internal server error!";
    case 502:
      return "Bad gateway!";
    case 504:
      return "Gateway timeout!";

    default:
      return "Something went wrong!";
  }
};
