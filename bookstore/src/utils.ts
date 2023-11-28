function* getToken (){
   const accessToken = localStorage.getItem('access')
   const refreshToken = localStorage.getItem('refresh')
   const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/verify/', {
      method: 'POST',
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         token: accessToken,
      })
   });
   if (response.status === 200) {
         return accessToken;
   } else {
      const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            refresh: refreshToken,
         })
      });
      const data: {access: string} = yield response.json();
      localStorage.setItem('access', data.access);
      return data.access;
   }
   }

   export {
   getToken
   }