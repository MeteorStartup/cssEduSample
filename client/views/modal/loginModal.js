Template.loginModal.onRendered(function() {});

Template.loginModal.events({
  'keyup [name=log-password]': function(e, tmpl) {
    if (e.which === 13) {
      return $('[name=btnLogin]').trigger('click');
    }
  },
  'keyup [name=log-password2]': function(e, tmpl) {
    if (e.which === 13) {
      return $('[name=joinLogin]').trigger('click');
    }
  },
  'click [name=btnLogin]': function(e, tmpl) {
    var email, password;
    email = $('[name=log-email]').val();
    password = $('[name=log-password]').val();
    if (email.length <= 0) {
      alert('email을 기입해주세요.');
      return;
    }
    if (password.length <= 0) {
      alert('password를 기입해주세요.');
      return;
    }

    return Meteor.loginWithPassword({
      username: email
    }, password, function(err, rslt) {
      if (err) {
        alert(err);
        return $('[name=loginAttempt]').trigger('click');
      } else {
        $('#loginModal').modal('hide');
        $('[name=log-email]').val('');
        $('[name=log-password]').val('');
        return;
      }
    });


  },
  'click [name=joinAttempt]': function(e, tmpl) {
    $('.join-hidden-field').removeClass('hidden');
    return $('.login-hidden-field').addClass('hidden');
  },
  'click [name=loginAttempt]': function(e, tmpl) {
    $('.login-hidden-field').removeClass('hidden');
    return $('.join-hidden-field').addClass('hidden');
  },
  'click [name=btnJoin]': function(e, tmpl) {
    var email, password, password2;
    email = $('[name=log-email]').val();
    password = $('[name=log-password]').val();
    password2 = $('[name=log-password2]').val();
    if (password !== password2) {
      alert('동일한 비밀번호를 입력해야합니다.');
      $('[name=log-password2]').focus();
      return;
    }

    var options = {};
    options.username = email;
    options.email = email;
    options.password = password;

    return Accounts.createUser(options, function(err, rslt){
      if (err) {
        alert(err);
      }
      else {
        alert('아아디 생성완료 : '+email)
        $('#loginModal').modal('hide');
        $('[name=log-email]').val('');
        $('[name=log-password]').val('');
        $('[name=log-password2]').val('');
        return;
      }
    });
    //return Meteor.call('addUser', options, function(err, rslt){
    //  if (err) {
    //    alert(err);
    //  }
    //  else {
    //    alert(rslt);
    //  }
    //});
  }
});
