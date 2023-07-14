const functions = require('firebase-functions')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


// TODO:
// 1.post 함수를 작성해서 request 받기
// 2. node mailer 통해서 받은 정보들 보내기
// 3. pdf 만드는 함수 복사해서 가져오기

exports.helloWorld = functions.https.onCall((data, context) => {
  console.log(data)
  console.log(data.jobs.experience.education)
})
