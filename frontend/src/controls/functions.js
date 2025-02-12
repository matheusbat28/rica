export function handleErrors(responseBody) {
  const errorFields = [
    'non_field_errors',
    'detail',
    'username',
    'password',
    'email',
    'name',
    'description',
    'file',
  ];

  for (const field of errorFields) {
    if (responseBody[field]) {
      return responseBody[field];
    }
  }
}