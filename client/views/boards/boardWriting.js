Router.route('/boardWriting', {
  template: 'boardWriting'
});

Template.boardWriting.events({
  'click [name=btnCancle]': function(){
    return Router.go('boardList');
  },
  'click [name=btnSave]': function(){
    제목 = $('#제목').val();
    내용 = $('#내용').val();
    console.log(제목);
    console.log(내용);
    if(제목.length <= 0) {
      alert('제목을 입력하세요.');
      $('#제목').focus();
      return;
    }
    var obj = {
      createdAt: new Date(),
      제목: 제목,
      내용: 내용,
      작성자정보: Meteor.user()
    };
    console.log(obj);
    CollectionBoards.insert(obj);
  }
});