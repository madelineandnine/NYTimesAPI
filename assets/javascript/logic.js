

var who = $('#searchterm').val();
var pageNum = $('#records').val();
var startYear = $('#startyear').val();
var endYear = $('#endyear').val();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+who+"&page=+"+pageNum+"&begin-date="+startYear+"end-date="+endYear+"&api-key=4008f2ed5e7246f48b62e64357046e32";

$('#subbutt').on('click', function (event) {
    who = $('#searchterm').val();
    pageNum = $('#records').val();
    startYear = $('#startyear').val();
    endYear = $('#endyear').val();
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+who+"&page=+"+pageNum+"&begin-date="+startYear+"end-date="+endYear+"&api-key=4008f2ed5e7246f48b62e64357046e32";
    console.log(who);
    console.log('meow');
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

    event.preventDefault();
});





