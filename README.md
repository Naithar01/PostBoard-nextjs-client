## Post Page
* Post List를 보여줄 Index Page
* 북마크? 

## User
* 1. 서버로부터 로그인 성공과, token 정보를 받으면 Redux로 id, username, token 보냄, 
* 2. 쿠키에 3가지 정보 저장, userSlice에 (redux) 에 isLogin = true로 변경 
* 3. Header에서 Logout 버튼 누르면 Redux ( dispatch ) 로 isLogin = false, token 지워줌 
