
const apiKey = "AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs"; // Replace with your actual Google Translate API key



  // Collect all original English texts
  const englishTexts = [
    $("#bannersubtitletxt").text(),
    $("#bannerbuttontxt").text(),
    $("#tourText2a").text(),
    $("#tourText2b").text(),

    $("#highlight1h3").text(),
    $("#highlight1p").text(),
    $("#highlight1a").text(),

    $("#highlight2h3").text(),
    $("#highlight2p").text(),
    $("#highlight2a").text(),

    $("#highlight3h3").text(),
    $("#highlight3p").text(),
    $("#highlight3a").text(),

    $("#highlight4h3").text(),
    $("#highlight4p").text(),
    $("#highlight4a").text(),

    $("#highlight5h3").text(),
    $("#highlight5p").text(),
    $("#highlight5a").text(),

    $("#highlight6h3").text(),
    $("#highlight6p").text(),
    $("#highlight6a").text(),

    $("#eventheader").text(),
    $("#event1").text(),
    $("#event2").text(),
    $("#event3").text(),
    $("#event4").text(),

    $("#highlight7h5").text(),
    $("#highlight7p").text(),
    $("#highlight7a").text(),

    $("#highlight8h5").text(),
    $("#highlight8p").text(),
    $("#highlight8a").text(),

    $("#highlight9h5").text(),
    $("#highlight9p").text(),
    $("#highlight9a").text(),

    $("#highlight10h5").text(),
    $("#highlight10p").text(),
    $("#highlight10pa").text(),

    $("#whyheading").text(),
    $("#why1").text(),
    $("#why2").text(),
    $("#why3").text(),
    $("#why4").text(),
    $("#why5").text(),
    $("#why6").text(),
    $("#why7").text(),

    $("#faqheadinghome").text(),
    $("#homefaq1").text(),
    $("#homefaq2").text(),
    $("#homefaq3").text(),

    $("#viewanswer1").text(),
    $("#viewanswer2").text(),
    $("#viewanswer3").text()
  ];

  // Corresponding IDs in the same order
  const elementIds = [
    "bannersubtitletxt",
    "bannerbuttontxt",
    "tourText2a",
    "tourText2b",

    "highlight1h3",
    "highlight1p",
    "highlight1a",

    "highlight2h3",
    "highlight2p",
    "highlight2a",

    "highlight3h3",
    "highlight3p",
    "highlight3a",

    "highlight4h3",
    "highlight4p",
    "highlight4a",

    "highlight5h3",
    "highlight5p",
    "highlight5a",

    "highlight6h3",
    "highlight6p",
    "highlight6a",

    "eventheader",
    "event1",
    "event2",
    "event3",
    "event4",

    "highlight7h5",
    "highlight7p",
    "highlight7a",

    "highlight8h5",
    "highlight8p",
    "highlight8a",

    "highlight9h5",
    "highlight9p",
    "highlight9a",

    "highlight10h5",
    "highlight10p",
    "highlight10pa",

    "whyheading",
    "why1",
    "why2",
    "why3",
    "why4",
    "why5",
    "why6",
    "why7",

    "faqheadinghome",
    "homefaq1",
    "homefaq2",
    "homefaq3",

    "viewanswer1",
    "viewanswer2",
    "viewanswer3"
  ];

  function translateAllTourTexts() {
    $.ajax({
      url: "https://translation.googleapis.com/language/translate/v2",
      type: "POST",
      data: {
        q: englishTexts,
        target: "ta",
        format: "text",
        key: apiKey
      },
      traditional: true, // Important for array sending
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
    translateAllTourTexts();
    $("#tourtamilLink").addClass("active");
    $("#tourenglishLink").removeClass("active");
  });
