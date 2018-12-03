
$(document).ready(function(){

var monthNames = ["janv", "févr", "mars", "avr", "mai", "juin",
  "juil", "août", "sept", "oct", "nov", "déc"
];

var date = new Date();

$("#week thead>tr>th:first-child").text(date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate());

//$("thead>tr>th:not(:first-child)").append(' '+monthNames[date.getMonth()]);
var nbday =date.getDate();
for (i = 2; i <=7 ; i++) {
  $("#week thead>tr>th:nth-child("+i+")").append('<span class="date">'+' '+nbday+' '+monthNames[date.getMonth()]+'</span>');
  nbday++;
}

var divider;
  $("#submit").click(function(){

   divider = Number($("#divider").val());
   var from = Number($("#from").val());
   var to   = Number($("#to").val());
    // var from = 12;
   //var to = 20;
  //var divider = 15;
  var wdm = divider;
       /*@@@@@@@@@@@@@@@@@@@@@@@@@=========Start==========@@@@@@@@@@@@@@@@@@@@@@@@*/
                        $("#week tbody").append(
                              '<tr style="border-bottom: 4px double #ddd" class="allday">'

                              +'<td>'
                              +'All Day'
                              +'</td>'


                              +'<td id="allday">'
                              +'</td>'

                              +'<td id="allday">'
                              +'</td>'

                              +'<td id="allday">'
                              +'</td>'

                              +'<td id="allday">'
                              +'</td>'

                              +'<td id="allday">'
                              +'</td>'

                              +'<td  id="allday">'
                              +'</td>'

                              +'</tr>'
                              );
       /*@@@@@@@@@@@@@@@@@@@@@@=======End========@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

 console.log(from +':' + '0')
                        $("#week tbody").append(
                              '<tr>'

                              +'<td >'
                              +from +':' + '00'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              + '</tr>');
  
 console.log(from +':' + wdm)
             $("#week tbody").append(
                              '<tr>'

                              +'<td>'
                              +from +':' + wdm
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              + '</tr>');

 while(from<to){
     wdm += divider; 

     if (wdm == 60) {

           wdm = wdm/60;

           from = from + wdm;
     
           wdm=0;

            console.log(from +':' + wdm)
            /*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**star**@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
            $("#week tbody").append(
                              '<tr>'

                              +'<td class="brd-btm">'
                              +from +':' + '00'
                              +'</td>'

                              +'<td class="brd-btm" id="myBtn">'
                              +'</td>'

                              +'<td class="brd-btm" id="myBtn">'
                              +'</td>'

                              +'<td class="brd-btm" id="myBtn">'
                              +'</td>'

                              +'<td class="brd-btm" id="myBtn">'
                              +'</td>'

                              +'<td class="brd-btm" id="myBtn">'
                              +'</td>'

                              +'<td class="brd-btm" id="myBtn">'
                              +'</td>'

                              + '</tr>');
            /*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@******End******@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
  
      }else if(wdm<60){

           console.log(from +':' + wdm)
           $("#week tbody").append(
                              '<tr>'
                              +'<td>'
                              +from +':' + wdm
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              +'<td id="myBtn">'
                              +'</td>'

                              + '</tr>');
  

      }//End Else

}//End While


var nb_div = divider
var option_minu_select = 60/nb_div;

//filled the select option minutes
$("#option_minu_select").append('<option value="00">00min</option>');
for(i=1;i<option_minu_select;i++){
  
  $("#option_minu_select").append(
    '<option value="'+nb_div+'">'+nb_div+'min</option>');
  nb_div+=divider;
}

//filled the select option hours
var option_hour_select =  Number($("#from").val());
$("#option_hour_select").append('<option value="'+option_hour_select+'">'+option_hour_select+'h</option>');
while(option_hour_select<to){
option_hour_select+=1;
  $("#option_hour_select").append(
    '<option value="'+option_hour_select+'">'+option_hour_select+'h</option>');
}



  });//End Event #submit


var $this;
var cellIndex ;
$(document).on("click","#week tbody>tr>td#myBtn",function(){

  
   $("#fname").val('');
   $("#lname").val('');
   $("#nbphone").val('');
   $("#email").val('');


 // cache $(this);
   $this = $(this);

  // First, get the index of the td.
   cellIndex = $this.index();

  //get timer of current selected td
  var selected_time = $($this).siblings(":first-child").text();

   //get number of hour from selected time
 var selected_time_Hour = selected_time.substr(0, selected_time.indexOf(':')); 

 //get number of Minu from selected time
  var selected_time_minu = selected_time.substr(selected_time.indexOf(":") + 1)

   
   //from
   $("#from-select-option_hour option").val(selected_time_Hour).text(selected_time_Hour+"h")
   $("#from-select-option_minu option").val(selected_time_minu).text(selected_time_minu+"min")
   //To
   $("#option_hour_select option[value="+selected_time_Hour+"]").attr('selected', 'selected');
   $("#option_minu_select option[value="+selected_time_minu+"]").next().attr('selected', 'selected');


   /****Start event show Modal****/
    $("#myModal").show(); 

  
   /****En Event Modal Show****/
  

});//End event click td

$(document).on("click","#fa-reservation",function(){

   $("#myModal").show(); 
   $("#fname").val($(this).parent().data("test").fname);
   $("#lname").val($(this).parent().data("test").lname);
   $("#nbphone").val($(this).parent().data("test").nbphone);
   $("#email").val($(this).parent().data("test").email);
   $("#type_of_reservation_selected option:contains("+$(this).parent().data("test").type_reservation+")").prop('selected', true);
  // $("#option_hour_select option:contains("+$(this).parent().data("test").to_hour_select+")").prop('selected', true);
  var to_hour_value = $(this).parent().data("test").to_hour_select
   $("#option_hour_select option:contains("+to_hour_value +")").each(function(){
     if ($(this).text() == to_hour_value ) {
        $(this).prop('selected', true);
         return false;
    }
     return true;
   });

   $("#option_minu_select option:contains("+$(this).parent().data("test").to_minu_select+")").prop('selected', true);

  //get timer of current selected td
  var selected_time = $(this).parent().siblings(":first-child").text();

   //get number of hour from selected time
 var selected_time_Hour = selected_time.substr(0, selected_time.indexOf(':')); 

 //get number of Minu from selected time
  var selected_time_minu = selected_time.substr(selected_time.indexOf(":") + 1)

   
   //from
   $("#from-select-option_hour option").val(selected_time_Hour).text(selected_time_Hour+"h")
   $("#from-select-option_minu option").val(selected_time_minu).text(selected_time_minu+"min")


});//End fa reservation

$("span.close").click(function(){

    $("#myModal").hide(); 
})


var type_of_reservation_selected;
var tom;
var toh;
var next_selected;
var type;

$("#set").click(function(){

  /**diplay modal none**/
   $("#myModal").hide();

 $this.data("test",
  {
    fname:$("#fname").val(),
    lname:$("#lname").val(),
    nbphone:$("#nbphone").val(),
    email:$("#email").val(),
    type_reservation:$("#type_of_reservation_selected option:selected").text(),
    to_hour_select:$("#option_hour_select option:selected").text(),
    to_minu_select:$("#option_minu_select option:selected").text()
  }
 );
 



  type_of_reservation_selected = $("#type_of_reservation_selected").val();
  type = $("#type_of_reservation_selected option:selected").text();
  toh = $("#option_hour_select").val();
  tom = $("#option_minu_select").val();

  //get timer of current selected td
  var selected_time = $($this).siblings(":first-child").text();

 //get number of hour from selected time
  var selected_time_Hour = selected_time.substr(0, selected_time.indexOf(':')); 

//get number of Minu from selected time
  var selected_time_minu = selected_time.substr(selected_time.indexOf(":") + 1)

   //alert(myString + streetaddress);
   

  var nb_hour_loop =(toh-selected_time_Hour)*(60/divider);
    //alert("nb_hour_loop :" + nb_hour_loop)


  var  nb_minu_loop = (tom-selected_time_minu)/divider;
   //alert("nb_minu_loop :" + nb_minu_loop)

  next_selected = nb_hour_loop+nb_minu_loop;
    //alert("next_selected:" + next_selected)

$this.css({
   "background-color":type_of_reservation_selected,
   "border-bottom":'1px solid transparent'
}).attr('id','none').html("<span class='type-reservation'>"+type+"</span>").append('<i class="fa fa-address-card" aria-hidden="true" id="fa-reservation"></i>');

if (next_selected==2) {

 for(i=0;i<next_selected-1;i++){

    // next, get the cell in the next row that has
  // the same index.
   $this = $this.closest('tr').next().children().eq(cellIndex).css({
   "background-color":type_of_reservation_selected,
   "border-bottom":'1px solid transparent'
  }).attr('id','none');

}//End For


}else{

   for(i=0;i<next_selected-2;i++){

    // next, get the cell in the next row that has
  // the same index.
   $this = $this.closest('tr').next().children().eq(cellIndex).css({
   "background-color":type_of_reservation_selected,
   "border-bottom":'1px solid transparent'
  }).attr('id','none');

   $this.closest('tr').next().children().eq(cellIndex).css({
   "background-color":type_of_reservation_selected,
   "border-bottom":'1px solid transparent'
  }).attr('id','none');

}//End For

}//End else


});//End set event


/****************************
start event test @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
**************************/

  $("#btn-mnt").click(function(){
     $("#week").css("display","none")
     $("#list").css("display","none")
     $("#day").css("display","none")
     $("#month").css("display","block")
  });

    $("#btn-dy").click(function(){
     $("#week").css("display","none")
     $("#list").css("display","none")
     $("#day").css("display","block")
     $("#month").css("display","none")
  });

  $("#btn-wk").click(function(){
     $("#week").css("display","block")
     $("#list").css("display","none")
     $("#day").css("display","none")
     $("#month").css("display","none")
  });
    $("#btn-lst").click(function(){
     $("#week").css("display","none")
     $("#list").css("display","block")
     $("#day").css("display","none")
     $("#month").css("display","none")
  });
/*************@@@@@@@@@@@@@@@@@@@@@@@@End demo test@@@@@@@@@@@@@@@@@@***************/


/************@@@@@@@@@@@@@@@@@@@@@@@@==strat drag and drop event==@@@@@@@@@@@@@@@@@@@@@@@@@@@@**************/
//nb_child=0;

//$('#month > table.table-bordered > tbody > tr > td ').append(' <div id="drop-here">Add RDV</div> ');
var count=1;
$(document).on("drop" , "#month > table.table-bordered > tbody > tr > td " , function(){
  //nb_child+=1;
 // $(".drag-c:nth-child(3)",this).css("background-color","green");
// $("a#a-more").show();
// $("#drop-here").hide();

  $(" div.drag-c:nth-of-type(4)",this).attr("class","last-one");

  //count=$("div.last-one",this).length;
  
  if ($(" div.last-one",this).length) {

      if ($("a#a-more",this).length <= 0) {
        //count++;
         $('div:last',this).after('<a style="color:#1197C1;" id="a-more">+1 more..</a>');
       //$(this).append('<div id="drop-here">Add RDV</div>');
       }else{
        count++;
        $("a#a-more",this).text('+'+count+' more..')
      
       }
  

      $("div.drag-c:last-child",this).attr("class","last-one");
   

     //alert($("div.last-one").length)
       
  }else{
    
            $(this).attr({
               ondrop:'drop(event)',
               allowDrop:'allowDrop(event)'
           });

          $("#a-more",this).remove();
  }




});//End Event drop;

$(document).on("dragstart" , "#month > table.table-bordered > tbody > tr > td " , function(){
 

  if ($("#a-more",this).length) {
     

     mcount=$("div.last-one",this).length;
     mcount=mcount-1;


    if ($(" div.last-one:nth-of-type(4)",this).length) {
           
            $("div.last-one:nth-of-type(4)",this).attr('class','drag-c')
            $("a#a-more",this).remove()
            $('div:last',this).after('<a style="color:#1197C1;" id="a-more">+'+mcount+' more..</a>')
           console.log('4 ex')
    
    }//EndIf

    if (mcount == 0){
        $("a#a-more",this).remove()
      
    }//EndIf


  }//EndIf


});//End Event drag;


$(document).on("resize","div.drag-c",function(){
alert('hi')

});

$("div.drag-c").resize(function(){
alert('hp')
});

/*
$(document).on("drag" , "div.drag-c", function(){
  $("a#a-more").hide();
  //$("#drop-here").show();
 
});*/


/*
// Getter
var distance = $( "drag-c" ).resizable( "option", "distance" );
 
// Setter
$( "drag-c" ).resizable( "option", "distance", 30 );

 $( "drag-c" ).resizable({
  distance: 30
});


$("drag-c").resize(function(){

alert('hi')
});

*/
/************@@@@@@@@@@@@@@@@@@@@@@@@==stop drag and drop event==@@@@@@@@@@@@@@@@@@@@@@@@@@@@*************/

});//End document


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    //getElementById("a-more").style.color = 'red'
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

/*
function dragEnd(event) {

    document.getElementById("demo").innerHTML = count;
}*/

/*

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/