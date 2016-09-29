Template.main.helpers({
    '회원정보': function(evt, tmpl) {
        return database.find().fetch();
    }
});











