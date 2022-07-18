var player = prompt (" 가위,바위,보 중 한가지를 입력해주세요. ");
var a = 0;


    if(player == "가위"){
    document.write("플레이어는 가위를 냈다.");
    a = 1;
    }
    else if(player == "바위"){
    document.write("플레이어는 바위를 냈다.");
    a = 2;
    }
    else if (player == "보"){
    document.write("플레이어는 보를 냈다.");
    a = 3;
    }
    else{
        alert("잘못 입력하셧습니다")
    }


var c = Math.floor(Math.random() * 3) + 1;
    if( a == 0){
        c = 0;
    }
    if( c == 1){
        c = 1;
        document.write("<br>상대방은 가위를 냈다.");
}
    if( c == 2){
        c = 2;
        document.write("<br>상대방은 바위를 냈다.");
}
    if( c == 3 ){
        c = 3;
        document.write("<br>상대방은 보를 냈다.");
}

  

    if( a==1 && c==1 || a==2 && c==2 || a==3 && c==3 ){
        document.write("<br><br>비겼습니다.")
    }
    if( a==1 && c==3 || a==2 && c==1 || a==3 && c==2 ){
        document.write("<br><br>플레이어가 이겼습니다.")
    }
    if( a==1 && c==2 || a==2 && c==3 || a==3 && c==1 ){
        document.write("<br><br>상대방이 이겼습니다.")
    }

