/*! hubpi v1.0.1 | (c) Copyright 2014 - Jose Pino, @jofpin | MIT | Date: 27/04/2014 | https://github.com/jofpin/hubpi */
$(function() {
  
  "use-strict";

  /* data hubpers with url of json posts */

  var attrData  = $('[data-hp-post]');

    if (typeof $.hubpi === "undefined") { 
      $.hubpi = {};
    } 
  
    // $.hubpi = {};

      $.hubpi.get = {
      noDATA: function() {
        if (attrData) {
          this.ajaxHP();
        } 
        else {
          attrData.html("There is no data :(");
        }
      },

      ajaxHP: function() { /* data get json and ajax not cache :) */
        var self = this;
        $.ajaxSetup({
          cache: false
        });

      // loader of data content
      attrData.html(
                  '<div class="' + "loader" + '"></div>'
                  );
      
      $.getJSON(attrData.data('hp-post'),function(data) {
        
        var hp = self.topcontent(); 
        
        $.each(data,function(_,_item) {  
          hp += self.templatePOST(_item);
        });

        attrData.html(hp);
        
      }).error(function(j,t,e) { // error load dataJSON :´(
        attrData.html('<span class="' + "error-json" + '">' + "Error" + " " + e + '</span>');
        console.error('Error : ' + e);
      });
    },
    
    // your div here here :)
    topcontent: function() {
      html = ('');
      return html;
    },

    templatePOST: function(data) { 
      var content = data.content;
      var title = data.title;
      var date = data.date;

      html = '<div class="postsito">' +
             '<div class="top-head"></div>' +
             '<article class="post-preview">' +
             '<h2 class="title-post" title="' + title + '">' + title + '</h2>' +
             '<h2 class="my-info-post">' +
             '<img class="avatar" src="' + $avatar + '" alt="' + $username + '"/> By <a href="https://github.com/' + $github + '">' + $username + '</a> in wrote on <time>' + date + '</time>' +
             '</h2>' 
             + content +
             '</article>' +
             '</div>' +
             '</div>';
             console.log('Title post : ' + title + ' | Date :' + date);
      return html;
    }
  };


    $(document).ready(function() {
      $.hubpi.get.noDATA();
    });

});
