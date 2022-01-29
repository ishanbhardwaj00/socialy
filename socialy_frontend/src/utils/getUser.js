export const getUserInfo = () => {
  const userInfo = localStorage.getItem('user');
  if(userInfo) 
    return JSON.parse(userInfo);

  return localStorage.clear();
  
}