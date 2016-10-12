Router.route('/boardWriting', {
  template: 'boardWriting'
});

Router.route('/boardEditing', {
  template: 'boardWriting',
  path: '/boardEditing/:_id'
});

Template.boardWriting.helpers({
  boardInfo: function() {
    if(Router.current().route.getName() == 'boardEditing') {
      return CollectionBoards.findOne({_id: Router.current().params._id});
    } else {
      return {};
    }
  }
});

Template.boardWriting.events({
  'click [name=btnCancle]': function(){
    return history.go(-1);
  },
  'click [name=btnSave]': function(){
    var 제목 = $('#제목').val();
    var 내용 = $('#내용').val();
    console.log(제목);
    console.log(내용);
    if(제목.length <= 0) {
      alert('제목을 입력하세요.');
      $('#제목').focus();
      return;
    }
    var 글번호;
    if(CollectionBoards.find().count() > 0 ) {
      글번호 = ((CollectionBoards.findOne({}, {sort: {createdAt: -1}}).글번호) || 0) + 1;
    } else {
      글번호 = 1;
    }
    if(Router.current().route.getName() == 'boardWriting') {
      var obj = {
        createdAt: new Date(),
        글번호: 글번호,
        제목: 제목,
        내용: 내용,
        작성자정보: Meteor.user()
      };
      console.log(obj);
      CollectionBoards.insert(obj);
      Router.go('boardList');

    } else {
      CollectionBoards.update({_id: Router.current().params._id}, {
        $set : {
          제목: 제목,
          내용: 내용
        }
      });
      Router.go('boardList');

    }
  }
});