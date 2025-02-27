export function repsonse(statusCode, body) {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  };
}
