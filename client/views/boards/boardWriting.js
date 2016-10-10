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
    제목 = $('#제목').val();
    내용 = $('#내용').val();
    console.log(제목);
    console.log(내용);
    if(제목.length <= 0) {
      alert('제목을 입력하세요.');
      $('#제목').focus();
      return;
    }
    if(Router.current().route.getName() == 'boardWriting') {
      var obj = {
        createdAt: new Date(),
        제목: 제목,
        내용: 내용,
        작성자정보: Meteor.user()
      };
      console.log(obj);
      CollectionBoards.insert(obj);

    } else {
      CollectionBoards.update({_id: Router.current().params._id}, {
        $set : {
          제목: 제목,
          내용: 내용
        }
      })
    }
  }
});