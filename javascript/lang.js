
  const tourText2a = $("#tourText2a").text();
  const tourText2b = $("#tourText2b").text();
  const apiKey = "AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs"; // Replace with your actual Google Translate API key

  function translateTextToTamil(text, targetElementId) {
    $.ajax({
      url: "https://translation.googleapis.com/language/translate/v2",
      type: "POST",
      data: {
        q: text,
        target: "ta",
        format: "text",
        key: apiKey
      },
      success: function (response) {
        const translated = response.data.translations[0].translatedText;
        $("#" + targetElementId).html(translated);
      },
      error: function () {
        alert("Translation failed.");
      }
    });
  }

  $("#tourenglishLink").click(function (e) {
    e.preventDefault();
    $("#tourText2a").text(tourText2a);
    $("#tourText2b").text(tourText2a);
    $("#tourenglishLink").addClass("active");
    $("#tourtamilLink").removeClass("active");
  });

  $("#tourtamilLink").click(function (e) {
    e.preventDefault();
    translateTextToTamil(tourText2a, "tourText2a");
    translateTextToTamil(tourText2b, "tourText2b");
    $("#tourtamilLink").addClass("active");
    $("#tourenglishLink").removeClass("active");
  });

