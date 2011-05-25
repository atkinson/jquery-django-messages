# Credit
Firstly, this plugin is built upon the work of  Henrik Joreteg, which can be found here: http://projects.joreteg.com/jquery-sliding-message/

# What is it?
A jQuery plugin which provides a cool way to temporarily display messages to the user. Messages slide in vertically, and slide out again after a few seconds.

I made these changes so that it can be used as a display mechanism for django.contrib.messages, but it does not depend on Django in any way.

# Requires
jQuery

# License
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

# Examples

# 1. Very basic usage, single message

    <script type="text/javascript"> 
    $(function() 
    {
        var message = 'Your changes have been saved!';
        $.showMessage(message);
    });
    </script>
    
# 2. Very basic usage, multiple messages

    <script type="text/javascript"> 
    $(function()
    {
        var messages = ['Your changes have been saved!', 'This message follows the first'];
        $.showMessages(messages);      
    });
    </script>

# 3. Django - display contrib.messages

    <script type="text/javascript"> 
    $(function()
    {
        {% if messages %}
            var messages = ['{{ messages|safeseq|join:"','" }}'];
            $.showMessages(messages);
        {% endif %}
    });
    </script>
    
# 4. showMessage supports callbacks (but showMessages does not)

    <script type="text/javascript"> 
    $(function()
    {
        $.showMessage('Your changes have been saved!', {}, function()
        {
            console.log('Callback called after the message display has finished')
        });
    });
    </script>

# 5. These are all the options, showing their defaults.

    <script type="text/javascript"> 
    $(function()
    {
        $.showMessage('Your changes have been saved!',
        {
             id: 'sliding_message_box',
             position: 'bottom',
             size: '60',
             backgroundColor: 'rgb(45, 45, 45)',
             color: 'white',
             delay: 3000,
             speed: 500,
             fontSize: '26px'
        }, callback);
    });
    </script>
    

