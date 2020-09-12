var books = [
	{
		title :"[Z会進学教室]長野正毅先生の子育て応援メッセージ 励ます力" , 
		isbn : "4391146088"
	},
	{
		title :"猫を抱いて象と泳ぐ" , 
		isbn : "4167557037"
	}
]
var list='', n=4 , l = books.length;
while (n-- > 0) {
	var i = Math.random() * l | 0;
	list += '<a href="http://amazon.co.jp/gp/product/'+books[i].isbn+'/○○-22/ref=nosim"><img src="http://images.amazon.com/images/P/'+books[i].isbn+'.09._OU09_SCTZZZZZZZ_.jpg" alt="'+books[i].title+'" /></a><br /><a href="http://amazon.co.jp/gp/product/+books[i].isbn+/○○-22/ref=nosim">'+books[i].title+'</a><br /><br />';
	books.splice(i, 1);
	--l;
}
document.write(list)

