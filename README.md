## Post Page
* Post List를 보여줄 Index Page
* 북마크? 
* Post 페이지 접속시 redux (User) isLogin = false 이면 로그인 페이지로 이동하기 추가 

## User
* 1. 서버로부터 로그인 성공과, token 정보를 받으면 쿠키에 id, username, token 보냄, 
* 2. 쿠키에 3가지 정보 저장, userSlice에 (redux) 에 isLogin = true로 변경 
* 3. Header에서 Logout 버튼 누르면 Redux ( dispatch ) 로 isLogin = false, token 지워줌 

### 로그인
* 1. 메인 페이지 "/" 접속시 쿠키에 token이 있으면 redux isLogin - true, 
* 2. 아니면 로그아웃 함수 실행

## Redux 
* 1. dispatch들은 actions 디렉토리에서 관리, 


### 추가
* 1. 서버 http status 수정 201, 200, 400, 401

* 1. post 메인 페이지 페이징 처리, query page= 1

* 1. Post 생성시 res.status가 201이 아니면 에러 발생 추가

* 1. 로그인 상태가 아닐 때 new post등 이동시 로그인 페이지로 이동 구현

* 1. 작성자가 Post 수정 - 삭제 가능하게 구현

* 1. Category 삭제 버튼 구현 

