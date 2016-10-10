Router.route('/boardDetail', {
  templatae: 'boardDetail',
  path: '/boardDetail/:_id'
});

Template.boardDetail.helpers({
  boardInfo: function() {
    return CollectionBoards.findOne({_id: Router.current().params._id});
  },
  ownUser: function() {
    if(this.작성자정보._id == Meteor.userId()) {
      return true;
    } else {
      return false;
    }
  },
  boardComments: function() {
    return CollectionComments.find({boardId: Router.current().params._id}, {sort: {createdAt: -1}});
  },
  '작성일시': function() {
    d = this.createdAt,
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
});

Template.boardDetail.events({
  'click [name=boardDelete]': function(e, tmpl) {
    if(confirm('삭제하시겠습니까?')) {
      CollectionBoards.remove({_id: this._id});
    }
  },
  'click [name=saveComment]': function(e, tmpl) {
    댓글 = $('[name=taComment]').val();
    obj = {
      createdAt: new Date(),
      boardId: Router.current().params._id,
      작성자정보: Meteor.user(),
      댓글: 댓글
    }
    // console.log(obj)
    CollectionComments.insert(obj);
    $('[name=taComment]').val('');
  },
  'click [name=removeComment]': function(e, tmpl) {
    // console.log($(e.target).attr('id'));
    if(confirm('삭제하시겠습니까?')) {
      CollectionComments.remove({_id: $(e.target).attr('id')});
    };
  }
});