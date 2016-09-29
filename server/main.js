console.log('서버 입니다.!');

var database = new Mongo.Collection('database');

var title = "제목입니다.";
var body = "본문입니다. 이것은 조금 길겠죠..";

var obj = {
    작성일시: new Date(),
    작성자: '진정원',
    제목: title,
    본문: body,
    댓글: []
};



console.log(database.find().fetch());


