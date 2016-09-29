// console.log('서버 입니다.!');
//
// var database = new Mongo.Collection('database');
//
// var title = "제목입니다.";
// var body = "본문입니다. 이것은 조금 길겠죠..";
//
// var obj = {
//     작성일시: new Date(),
//     작성자: '진정원',
//     제목: title,
//     본문: body,
//     댓글: []
// };
// //TEST
// database.update({'작성자': '진정원99'}, {$set: {'제목': '$set으로 수정 제목입니다.'}});
//
// // var users = database.find({'작성자': '진정원99'}).fetch();
// // var user = users[0];
// // user.제목 = 'find로 수정 한 제목입니다.';
// // database.update({_id: user._id}, user);
//
// console.log(database.find().fetch());
//
//
