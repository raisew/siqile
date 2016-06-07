$(function() {
				$('input, textarea').placeholder();
			});
			$().ready(function() {
				$(".footer-right ul li").hover(function() {
					$(this).find(".wxshow").slideDown();
				}, function() {
					$(this).find(".wxshow").hide();
				});
			});
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}