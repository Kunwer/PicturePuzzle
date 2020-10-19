var posarray = [];

function randompos(){
  while(posarray.length < 8){
    p = Math.floor(Math.random()*8)+1;
    if(posarray.includes(p.toString()) != true){
      posarray.push(p.toString());
    };
  };
  return posarray;
}


var pos = randompos();
for(let i=0;i<pos.length;i++){
    var box = document.createElement('div');
    box.setAttribute('class','smallbox');
    box.setAttribute('id',pos[i]);
    //var img = document.createElement('img');
    //img.setAttribute('src','./css/oreki.jpg');
    box.onclick = function (){
        var empty_index = pos.indexOf('0');
        var clickedbox = this.id;
        var clicked_box = pos.indexOf(clickedbox);
        if(empty_index - parseInt(clicked_box) == 3){
            movedown();
        }else if(empty_index - parseInt(clicked_box) == -3){
            moveup();
        }else if(empty_index - parseInt(clicked_box) == 1){
            moveright();
        }else if(empty_index - parseInt(clicked_box) == -1){
            moveleft();
        }
    };
    box.innerText = pos[i]
    box.style.left=`${(i%3)*33.33}%`;
    box.style.top=`${(parseInt(i/3))*33.33}%`;
    box.style.backgroundColor = `#a2f${i+1}${i+1}${i+1}`;
    //img.style.transform = `translate(${((pos[i]-1)%3)*(-33.33)}%, ${(parseInt((pos[i]-1)/3))*(-33.33)}%)`;
    document.getElementById('main').appendChild(box);
    //box.appendChild(img);
    }

pos.push("0");

$(document).keyup(function() {
  let e = window.event.keyCode;
    if(e==37){
        moveleft();
    }else if(e==39){
        moveright();
    }else if(e==38){
        moveup();
    }else if(e==40){
        movedown();
    }
});

var boxes = document.querySelector('img');
for(let j=0;j<boxes.length;j++){
    boxes[i].style.left
}

function move(){
    var empty_index = pos.indexOf('0');
    var clickedbox = this.id;
    clicked_box = pos.indexOf(clickedbox);
    console.log(clicked_box);
    if(empty_index - parseInt(clicked_box) == 3){
        movedown();
    }else if(empty_index - parseInt(clicked_box) == -3){
        moveup();
    }else if(empty_index - parseInt(clicked_box) == 1){
        moveright();
    }else if(empty_index - parseInt(clicked_box) == -1){
        moveleft();
    }
}

function win_check(){
    let B = ['1','2','3','4','5','6','7','8','0']
    for(let i =0;i<B.length;i++){
        if(pos[i]==B[i]){
            continue
        }else{
            return
        }
    }
    alert("you won!")

}

function moveleft(){
	var empty_index = pos.indexOf('0');
    if(empty_index %3 != 2){
        var movable_box_index = empty_index+1;
		var movable_box_value = pos[movable_box_index]
        document.getElementById(`${pos[movable_box_index]}`).style.left = `${(empty_index%3)*33.33}%`;
        pos[movable_box_index]= '0';
        pos[empty_index] = movable_box_value;
        win_check()
	}
}

function moveright(){
	var empty_index = pos.indexOf('0');
    if(empty_index %3 != 0){
        var movable_box_index = empty_index-1;
        var movable_box_value = pos[movable_box_index]
        document.getElementById(`${pos[movable_box_index]}`).style.left = `${(empty_index%3)*33.33}%`;
        pos[movable_box_index]= '0';
        pos[empty_index] = movable_box_value;
        win_check()
	}
}

function moveup(){
    var empty_index = pos.indexOf('0');
    if(empty_index<=5){
        var movable_box_index = empty_index+3;
        var movable_box_value = pos[movable_box_index]
        document.getElementById(`${pos[movable_box_index]}`).style.top = `${(parseInt(empty_index/3))*33.33}%`;
        pos[movable_box_index]= '0';
        pos[empty_index] = movable_box_value;
        win_check()
	}
}
function movedown(){   
	var empty_index = pos.indexOf('0');
    if(empty_index>=3){
        var movable_box_index = empty_index-3;
        var movable_box_value = pos[movable_box_index]
        document.getElementById(`${pos[movable_box_index]}`).style.top = `${(parseInt(empty_index/3))*33.33}%`;
        pos[movable_box_index]= '0';
        pos[empty_index] = movable_box_value;
        win_check()
	}
}