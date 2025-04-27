
const apiKey = "AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs"; // Replace with your actual Google Translate API key

const englishTexts = [
  $("#abouttitle").text(),
  $("#aboutcontent1").text(),
  $("#aboutcontent2").text(),
  $("#aboutcontent3").text(),
  $("#whytitle1").text(),
  $("#why1").text(),
  $("#why2").text(),
  $("#why3").text(),
  $("#why4").text(),
  $("#highlightstitle").text(),
  $("#highlight1").text(),
  $("#highlight2").text(),
  $("#highlight3").text(),
  $("#highlight4").text()
];

// Corresponding IDs in same order
const elementIds = [
  "abouttitle",
  "aboutcontent1",
  "aboutcontent2",
  "aboutcontent3",
  "whytitle1",
  "why1",
  "why2",
  "why3",
  "why4",
  "highlightstitle",
  "highlight1",
  "highlight2",
  "highlight3",
  "highlight4"
];

function translateAboutTexts() {
  $.ajax({
    url: "https://translation.googleapis.com/language/translate/v2",
    type: "POST",
    data: {
      q: englishTexts,
      target: "ta",
      format: "text",
      key: apiKey
    },
    traditional: true, // Important for sending arrays in POST
    success: function (response) {
      const translations = response.data.translations;
      for (let i = 0; i < translations.length; i++) {
        $("#" + elementIds[i]).html(translations[i].translatedText);
      }
    },
    error: function () {
      alert("Translation failed.");
    }
  });
}

$("#tourenglishLink").click(function (e) {
  e.preventDefault();
  for (let i = 0; i < englishTexts.length; i++) {
    $("#" + elementIds[i]).text(englishTexts[i]);
  }
  $("#tourenglishLink").addClass("active");
  $("#tourtamilLink").removeClass("active");
});

$("#tourtamilLink").click(function (e) {
  e.preventDefault();
  translateAboutTexts();
  $("#tourtamilLink").addClass("active");
  $("#tourenglishLink").removeClass("active");
});