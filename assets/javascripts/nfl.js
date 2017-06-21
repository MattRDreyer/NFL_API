(function() {

    $(function() {

        //call to sails api to obtain data
        $.get(("http://localhost:1337/user"), function(data) {
            //     console.log(data);
            $.each(data, function(index, data) {
                var id = data.id;
                //setting "tbody" within HTML table to receive data elements from template literal data
                $("tbody").append(`<tr><td>${data.first_name}</td><td>${data.last_name}</td><td>${data.team}</td><td>${data.college}</td><td>${data.position}</td><td><button class="btnDelete" data="${data.id}">Delete</button></td>`);

                });
                });

                //allows for deletion of "closest" row of data
                $("tbody").on('click', '.btnDelete', function() {
                  $(this).closest('tr').remove();
                  var remove= $(this).attr("data")//set var remove to target specific id being deleted
                  var url = "http://localhost:1337/user" + "/" + remove;
                  console.log(url);
                  // console.log(id);
                  $.ajax({type: "DELETE",
                     url: url


                });


        });

})
})();
