// On click of the search button the following happens:
$('video').attr('loop','loop');


$(function(){
    setTimeout(function(){
        $('#welcome').removeClass('hidden');
    },600);
});




$('#submitbutton').on('click', function () {

    // 1. Empty the results div so that only 15 gifs appear at any given time
    $('#results').empty();

    // 2. Get the user's query from the form and store it into a variable called userQuery

    var userQuery = $('#userinput').val().trim();

    // Check to make sure query is being stored

    console.log('User Query = ' + '" ' + userQuery + ' "');
    console.log("Now that I have the query it's up up and away to the server!");

    // 3. Now that we have the user's query we are going to run the AJAX call and pass it in

    $.ajax({

        url : "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC",
        data : {

            // Set the limit of how many gifs the user sees at a time

            limit : 84,
            api_key : "dc6zaTOxFJmzC",

            // Pass in the user's query (variable userQuery)
            q : userQuery
        },
        method : 'GET'

        // 4. After the AJAX call is done we want to pass the response (res) into a function so we can do
        // something with it

    }).done(function (res) {

        console.log("Okay cool I'm back!");

        // Check to see what the response looks like so we can refer to the data we want to display

        // console.log(res);

        // 5. Now that we have gotten our response (res) back, for each response (res) we are going to append
        // the url to an <iframe> so the use can see the image

        $.each(res.data, function (key, gif) {

            console.log("Time to show you the goods, go check out the browser!");

            $("#results").append('<iframe height="170px" width="248px" src = " ' +  gif.embed_url +' " />');
            // $("#results").append('<iframe height="300px" width="300px" src = " ' +  gif.embed_url +' " />');

            // Check to see what the rating of each response is (may do something with this later)
            // console.log( gif.rating);

        });

        console.log("Hope you liked what you saw, see ya next time!");

    });

    return false;


});



