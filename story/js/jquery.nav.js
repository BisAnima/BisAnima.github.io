$(function(){
$("a[href^='#']").click(function() {
// #で始まるアンカーをクリックした場合に処理
var speed = 400; // ミリ秒
// スクロールスピード
var href= $(this).attr("href");
// アンカーの値を取得
var target = $(href == "#" || href == "" ? 'html' : href);
// 移動先取得
var position = target.offset().top;
// 移動先を数値で取得
$('body,html').animate({scrollTop:position}, speed, 'swing');
// スムーススクロール実行
return false;
});
});


$(function() {
 var showFlag = false;
 var topBtn = $('#pagetop'); 
 topBtn.css('bottom', '-100px');
 var showFlag = false;
 //スクロールが100に達したらボタン表示
 $(window).scroll(function () {
 if ($(this).scrollTop() > 100) {
 if (showFlag == false) {
 showFlag = true;
 topBtn.stop().animate({'bottom' : '20px'}, 200); 
 }
 } else {
 if (showFlag) {
 showFlag = false;
 topBtn.stop().animate({'bottom' : '-100px'}, 200); 
 }
 }
 });
 //スクロールしてトップ
 topBtn.click(function () {
 $('body,html').animate({
 scrollTop: 0
 }, 500);
 return false;
 });
});