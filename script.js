var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()


var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

recognition.onstart = () => {
    instructions.text("Voice Recognition is on")
    };

    recognition.onspeechend = () => {
        instructions.text("No Activity")
    };

    recognition.onerror = () => {
        instructions.text("Try Again")
    }

    recognition.onresult = (event) => {
       var current = event.resultIndex;

       var transcript = event.results[current][0].transcript

       content += transcript

       textbox.val(content)
    }
$("#start-btn").click(function(event) {
    if(content.length) {
        content += ''

    }
    recognition.start()
})