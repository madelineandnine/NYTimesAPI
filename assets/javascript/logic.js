

var who;
var pages;
var pageNum;
var startYear;
var endYear;
var queryURL;

$('#subbutt').on('click', function (event) {
    who = $('#searchterm').val();
    pages = $('#records').val()
    pageNum = parseInt(pages);
    startYear = $('#startyear').val();
    endYear = $('#endyear').val();
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+who+"&page="+pages+"&begin_date="+startYear+"0101&end_date="+endYear+"1231&api-key=4008f2ed5e7246f48b62e64357046e32";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        $('#top-articles').empty();
        for (var i = 0; i < pageNum; i++) {
            console.log(response.response.docs[i].headline.main);
            $('#top-articles')
                .append($('<a>')
                    .text(response.response.docs[i].headline.main)
                    .attr("href", response.response.docs[i].web_url)
                    .attr("target", "_blank")
                    .addClass("articles"))   // for styling
                .append($('<br>'));
        }
    });

    event.preventDefault();
});





