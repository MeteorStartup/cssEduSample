//사용자에게 최초로 전달 할 템플릿을 설정.
Router.configure({
    layoutTemplate: "layout"
});

//최초로 보여지는 템플릿 내부의 최초 컨텐츠.
Router.route('/', 'content');
Router.route('/content2', 'content2');
Router.route('/content3', 'content3');