
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='T';
a[2]='h';
a[3]='ấ';
a[4]='y';
a[5]=' ';
a[6]='D';
a[7]='i';
a[8]='ệ';
a[9]='n';
a[10]=' ';
a[11]='đ';
a[12]='ẹ';
a[13]='p';
a[14]=' ';
a[15]='t';
a[16]='r';
a[17]='a';
a[18]='i';
a[19]=' ';
a[20]='t';
a[21]='ố';
a[22]='t';
a[23]=' ';
a[24]='m';
a[25]='à';
a[26]=' ';
a[27]='d';
a[28]='ễ';
a[29]=' ';
a[30]='t';
a[31]='h';
a[32]='ư';
a[33]='ơ';
a[34]='n';
a[35]='g';
a[36]=' ';
a[37]='g';
a[38]='h';
a[39]='ê';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==36)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>Ai cũng nói Diện đẹp trai với dễ thương hết á <img src='http://duminhphongadv.com/files/assets/3.png'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p> Diện Crush Nhung lâu lắm mà không biết mở lời hay ib nói chi nơi. <img src='http://duminhphongadv.com/files/assets/4.png'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Nhung xem được cái ni thì có thể ib cho Trọc để mần quen cũng được!! <img src='http://duminhphongadv.com/files/assets/5.png'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				