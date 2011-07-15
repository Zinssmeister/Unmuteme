var loadTweets = function(keyword) {
   
   var url = "http://search.twitter.com/search.json?q=" + keyword + "&callback=?";
         
   $.getJSON(url,function(response) {
   
      $.each(response.results, function(i, post) {
         $("#world-playlist").prepend('<li><a href="http://twitter.com/' + post.username+ '/"><img src="' + post.profile_image_url + '" width="48" height="48" /></a><span class="status-txt">' + post.text + '</span></li>')
      });
      
   });
};