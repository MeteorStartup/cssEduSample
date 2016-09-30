console.log('서버 입니다.!');

// var database = new Mongo.Collection('database');

var title = "제목입니다.";
var body = "본문입니다. 이것은 조금 길겠죠..";

var obj = {
    작성일시: new Date(),
    작성자: '진정원',
    제목: title,
    본문: body,
    댓글: []
};

var obj2 = {
    주문자: '명지운',
    메뉴: '자장면',
    주소: '남부여성발전센터 202호'
}

//insert
// database.insert(obj);

//update
// database.update({_id: 'yTjwsjgM6vaoaaJsv'}, {$set: {제목: '제목목목목'}})
// database.update({_id: 'u3aoqqkENNo9fYci3'}, obj);

// database.update({'작성자': '진정원99'}, {$set: {'제목': '$set으로 수정 제목입니다.'}});

//find
// console.log(database.find({작성자: '홍길동', 제목:'제목목목목'}).fetch());

// var users = database.find({'작성자': '진정원99'}).fetch();
// var user = users[0];
// user.제목 = 'find로 수정 한 제목입니다.';
// database.update({_id: user._id}, user);

//remove
// database.remove({_id:'u3aoqqkENNo9fYci3'})



console.log(database.find().fetch());


