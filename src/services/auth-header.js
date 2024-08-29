export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    console.log('test: ', user.accessToken);
    return { authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}