Meteor.methods({
  addUser: function(options) {
    var rslt;
    rslt = Accounts.createUser(options);
    if (!rslt) {
      throw new Meteor.Error('사용자 생성 실패');
    } else {
      return '사용자 생성 완료';
    }
  }
});