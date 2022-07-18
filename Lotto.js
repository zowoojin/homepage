
var p = [0,0,0,0,0,0]



while(true){
    p[0] = prompt ("첫번째 번호를 입력해주세요.")
    if(p[0] >= 46){
        alert("45이하로 입력해주세요.");
        break;
    }
}

p[1] = prompt ("두번째 번호를 입력해주세요.")
p[2] = prompt ("세번째 번호를 입력해주세요.")
p[3] = prompt ("네번째 번호를 입력해주세요.")
p[4] = prompt ("다섯번째 번호를 입력해주세요.")
p[5] = prompt ("여섯번째 번호를 입력해주세요.")


 

var r = [0,0,0,0,0,0]

r[0] = 1;
r[1] = 2;
r[2] = 3;
r[3] = 4;
r[4] = 5;
r[5] = 6;

//랜덤번호 추첨
document.write ( "computer : ")

    r[0] = Math.floor(Math.random() * 45) + 1;
    document.write(r[0] + ", ")

   

while(true){

    r[1] = Math.floor(Math.random() * 45) + 1;

    if ( r[1] != r[0] ){
        document.write(r[1] + ", ");
        break;
    }

}



while(true){
    
    r[2] = Math.floor(Math.random() * 45) + 1;

    if( r[2] != r[0] && r[2] != r[1] ){
        document.write(r[2] + ", ");
        break;
    }
}
while(true){
    
    r[3] = Math.floor(Math.random() * 45) + 1;

    if( r[3] != r[0] && r[3] != r[1] && r[3] != r[2] ){
        document.write(r[3] + ", ");
        break;
    }
}
while(true){
    
    r[4] = Math.floor(Math.random() * 45) + 1;

    if( r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3] ){
        document.write(r[4] + ", ");
        break;
    }
}
while(true){
    
    r[5] = Math.floor(Math.random() * 45) + 1;

    if( r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4] ){
        document.write(r[5] + " + ");
        break;
    }
}

////    보너스번호

var b = 0;

while(true){
    b = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(b != r[0] && b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5]){
        document.write(b);
        break;
    }
}



var win = 0;

////1번째 번호////
if(p[0] == r[0]){
    win = win + 1;
}
if(p[0] == r[1]){
    win = win + 1;
}
if(p[0] == r[2]){
    win = win + 1;
}
if(p[0] == r[3]){
    win = win + 1;
}
if(p[0] == r[4]){
    win = win + 1;
}
if(p[0] == r[5]){
    win = win + 1;
}

////2번째 번호////
if(p[1] == r[0]){
    win = win + 1;
}
if(p[1] == r[1]){
    win = win + 1;
}
if(p[1] == r[2]){
    win = win + 1;
}
if(p[1] == r[3]){
    win = win + 1;
}
if(p[1] == r[4]){
    win = win + 1;
}
if(p[1] == r[5]){
    win = win + 1;
}

////3번째 번호////
if(p[2] == r[0]){
    win = win + 1;
}
if(p[2] == r[1]){
    win = win + 1;
}
if(p[2] == r[2]){
    win = win + 1;
}
if(p[2] == r[3]){
    win = win + 1;
}
if(p[2] == r[4]){
    win = win + 1;
}
if(p[2] == r[5]){
    win = win + 1;
}

////4번째 번호////
if(p[3] == r[0]){
    win = win + 1;
}
if(p[3] == r[1]){
    win = win + 1;
}
if(p[3] == r[2]){
    win = win + 1;
}
if(p[3] == r[3]){
    win = win + 1;
}
if(p[3] == r[4]){
    win = win + 1;
}
if(p[3] == r[5]){
    win = win + 1;
}

////5번째 번호////
if(p[4] == r[0]){
    win = win + 1;
}
if(p[4] == r[1]){
    win = win + 1;
}
if(p[4] == r[2]){
    win = win + 1;
}
if(p[4] == r[3]){
    win = win + 1;
}
if(p[4] == r[4]){
    win = win + 1;
}
if(p[4] == r[5]){
    win = win + 1;
}

////6번째 번호////
if(p[5] == r[0]){
    win = win + 1;
}
if(p[5] == r[1]){
    win = win + 1;
}
if(p[5] == r[2]){
    win = win + 1;
}
if(p[5] == r[3]){
    win = win + 1;
}
if(p[5] == r[4]){
    win = win + 1;
}
if(p[5] == r[5]){
    win = win + 1;
}


//로또 당첨여부//
document.write ("<br> 중첩수 : " + win );
document.write ("<br> 당첨여부 : "  );

if (win <= 2){
    document.write("꽝입니다.");
}
if (win == 3){
    document.write("5등입니다.");
}
if (win == 4){
    document.write("4등입니다.");
}
if (win == 5){
    document.write("3등입니다.");
}
if ( win == 5 && p[1] == b ){
    document.write("2등입니다.");
}
if ( win == 5 && p[2] == b ){
    document.write("2등입니다.");
}
if ( win == 5 && p[3] == b ){
    document.write("2등입니다.");
}
if ( win == 5 && p[4] == b ){
    document.write("2등입니다.");
}
if ( win == 5 && p[5] == b ){
    document.write("2등입니다.");
}
if ( win == 5 && p[6] == b ){
    document.write("2등입니다.");
}
if (win == 6){
    document.write("1등입니다.");
}