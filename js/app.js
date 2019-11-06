$(function(){
     
    function getBackground(){
        $.ajax({
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?date=2019-10-30&api_key=Vm37Maeyqu2rfYCWial5T2ePLbvGUCKz4Ma4ugS4"
        }).done(function(response){
            console.log(response);
            $(".title").css('background-image', `url(${response.hdurl})`);
            $(".title-img").append(`Title: ${response.title}`);
            $(".copyright").append(`Copyright: ${response.copyright}`);
            $(".explanation").append(`About photo: ${response.explanation}`);
        }).fail(function(error){
            console.log(error);
        })
    }

    getBackground()

    function getMarsPhotos(){
        $.ajax({
            method: "GET",
            url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Vm37Maeyqu2rfYCWial5T2ePLbvGUCKz4Ma4ugS4"
        }).done(function(response){
            (response.photos).forEach(function(response){
                $('.loadMore').append(
                    `<li><img src="${response.img_src}" class="item" /></li>`
                );
                var list = $(".item");
                console.log(list);
                var sizeList = $("li").length;
                console.log(sizeList);
                var x=10;
                $(".item").slice(0, 2).show() //shows 10 first photos from gallery
                $('#gallery li:lt('+x+')').show();
                $('#loadMore').click(function () {
                    x = (x+5 <= sizeList) ? x+5 : sizeList; // click - shows 5 more images
                    $('#gallery li:lt('+x+')').show();
                });

            })
        }).fail(function(error){
            console.log(error);
        });
    };

    getMarsPhotos();
});