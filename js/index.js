$( document ).ready(function() {

  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".services *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  let owl= $(".owl-carousel"),
        url = null,
        prev = $(".arrowleft"),
        next = $(".arrowright");

    owl.owlCarousel({
        loop: true,
        items: 1,
        center: true,
        touchDrag: true,

        responsive:{
          0:{
            items: 1,
            // stagePadding: 20,
            margin: 0
          },
          640:{
            items: 1,
            margin: 0
          },
          1024:{
            margin: 0,
            items: 1
          }
        }
    });

    next.on("click", function(){
        owl.trigger("next.owl.carousel")
    });
    prev.on("click", function(){
            owl.trigger("prev.owl.carousel")
        });

  let rangeSlider = function(){
    let slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

    slider.each(function(){

      value.each(function(){
        let value = $(this).prev().attr('value');
        $(this).html(value);
      });

      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };

  rangeSlider();


$(".check").click(function(){
  count();
});

$("#range").change(function(){
  count();
});
// $(".roomoption").change(function(){
//   count();
// });
function count(){
  var check = $('.check');
  var total = 0;
  var range = $("#range").val();
  $(".check:checked").each(function() {
      total += parseInt($(this).val());
  });

  if (total == 0) {
      $('#amount').val('');
  } else {
      $('#amount').val(total * range  + "$");
  }
}


// let button = document.getElementById("getTotal");
// button.onclick = function () {
//     let boxes = document.forms["checkboxForm"].getElementsByTagName("input");
//     let range = document.getElementById("range").value;
//     let total = 0;
//     let empty = [].filter.call( boxes, function( a ) {
//        return !a.checked
//     });
//     for (let i = 0; i < boxes.length; i++) {
//         if (boxes[i].checked) {
//             total += parseInt(boxes[i].value);
//         }
//     }
//        if (boxes.length == empty.length) {
//            alert("Пожалуйста заполните пустые поля");
//            return false;
//        }
//     document.getElementById("total").innerHTML = "Общая сумма: $" + total * range;
// };
});
