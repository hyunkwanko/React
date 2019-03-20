#React!!

create-react-app 설치

우선 npm 최신버전이 설치되어있어야 한다.프로젝트 폴더를 생성하고자 하는 폴더로 가서 아래와 같이 명령어를 입력하자.
npx는 npm 패키지를 로컬에 글로벌로 설치하지 않고 바로 일회성으로 실행할 수 있게 해주는 도구이다. npm 5.2.0 버전 이후부터 기본으로 제공된다.

npx create-react-app react-todo

npx가 실행이 안되는 구버전이라면 아래와 같이 해야한다.

npm install -g create-react-app
create-react-app react-todo

설치가 완료되면 하위에 react-todo 라는 폴더가 생성되어 있다. 폴더 이동 후 프로젝트를 로컬에서 실행해볼 수 있다.

cd react-todo
npm start

실행을 하면 브라우저가 실행되면서 localhost:3000포트에 프로젝트가 떠 있는 것을 확인해볼 수 있다.
(3000번 포트를 이미 사용 중이라면 3001, 3002, …와 같이 증가된 포트에 뜬다.)
