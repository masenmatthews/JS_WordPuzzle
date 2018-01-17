$(document).ready(function() {
  var phrase = "";
  $("form#phrase_form").submit(function(event) {
    event.preventDefault();
    phrase = $("input#phrase").val();
    var phraseArray = phrase.split("");
    for (var index = 0; index < phraseArray.length; index += 1) {
      phraseArray[index].toLowerCase();
      if(phraseArray[index] === "a" || phraseArray[index] === "e" || phraseArray[index] === "i" || phraseArray[index] === "o" || phraseArray[index] === "u" || phraseArray[index] === "y") {
        phraseArray[index] = "-";
      }
    };
    var newString = phraseArray.join('');
    $("#original_phrase").text(newString);
  });
  $("form#phrase_check_form").submit(function(event) {
    event.preventDefault();
    var checkPhrase = $("#check_phrase").val();
    if(checkPhrase === phrase) {
      alert("correct");
    }
    else {
      alert("incorrect");
    }

});
});
