/*
Copyright (c) 2011, Rich Atkinson
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of Rich Atkinson nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL RICH ATKINSON BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
$(function(){
    (function( $ ){
        $.fn.showMessage = function(message, options, callback){
            // defaults
            settings = jQuery.extend({
                 id: 'django_message_box',
                 position: 'bottom',
                 size: '60',
                 backgroundColor: 'rgb(45, 45, 45)',
                 color: 'white',
                 delay: 3000,
                 speed: 500,
                 fontSize: '26px'
            }, options);        
        
            var $msgbox = $('#' + settings.id);
            var delayed;
        
            // generate message div if it doesn't exist
            if($msgbox.length == 0){
                $msgbox = $('<div></div>').attr('id', settings.id);
            
                $msgbox.css(
                    {
                        'background-color': settings.backgroundColor,
                        'color': settings.color,
                        'text-align': 'center',
                        'position': 'fixed',
                        'left': '0',
                        'width': '100%',
                        'line-height': settings.size + 'px',
                        'font-size': settings.fontSize
                    });
            
                $('body').append(elem);
            }
        
            $msgbox.html(message);
        
            if(settings.position == 'bottom'){
                $msgbox.css('bottom', '-' + settings.size + 'px');
                $msgbox.animate({bottom:'0'}, settings.speed);
                delayed = function()
                {
                    $("#"+settings.id).animate({bottom:"-"+settings.size+"px"}, settings.speed, callback);
                }
                setTimeout(delayed, settings.delay);
            }
            else if(settings.position == 'top'){
                $msgbox.css('top', '-' + settings.size + 'px');
                $msgbox.animate({top:'0'}, settings.speed);
                delayed = function()
                {
                    $("#"+settings.id).animate({top:"-"+settings.size+"px"}, settings.speed, callback);
                }
                setTimeout(delayed, settings.delay);
            }
        };
        
        jQuery.fn.showMessages = function(messages, options)
        {
            if (messages && messages.length)
            {
                $.showMessage(messages.shift(), options, function()
                {
                    $.showMessages(messages, options);
                });
            }
        }
        
    })(jQuery);
});
