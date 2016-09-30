Template.main.helpers({
    '회원정보': function(evt, tmpl) {
        return database.find().fetch();
    }
});

Template.main.events({
   'click [name=저장]': function() {
       var 작성자 = $('[name=작성자]').val();
       var 제목 = $('[name=제목]').val();
       var 본문 = $('[name=본문]').val();
       console.log('저장버튼이 눌렸습니다.');
       console.log(작성자);
       console.log(제목);
       console.log(본문);

       var obj = {
           작성일시: new Date(),
           작성자: 작성자,
           나이: 제목,
           주소: 본문
       }
       console.log(obj);


       var result = database.insert(obj);
       console.log(result);
   }
});









