Router.route('/boardList',{
  template: 'boardList'
});

Template.boardList.helpers({
  '게시판글리스트': function() {
    return CollectionBoards.find();
  }
});

Template.boardItem.helpers({
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

