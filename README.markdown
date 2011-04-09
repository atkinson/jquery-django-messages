# jQuery Message Slider Plugin
This plugin provides a cool way to temporarily display messages to the user.

# Requires
jQuery

# License
BSD

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
    

