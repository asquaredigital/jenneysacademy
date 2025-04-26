 const apiKey = "AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs"; // Replace with your actual Google Translate API key

  // Store original English text
  const originalTexts = {
    administratortitle: $("#administratortitle").text(),
    admintitle: $("#admintitle").text(),
    admin1name: $("#admin1name").text(),
    admin1subtitle: $("#admin1subtitle").text(),
    admin1desc: $("#admin1desc").text(),
    admin1desc2: $("#admin1desc2").text(),
    admintitle2: $("#admintitle2").text(),
    admin2name: $("#admin2name").text(),
    admin2subtitle: $("#admin2subtitle").text(),
    admin2desc1: $("#admin2desc1").text(),
    admin2desc2: $("#admin2desc2").text(),
    admin2desc3: $("#admin2desc3").text(),
    admintitle3: $("#admintitle3").text(),
    admin3subtitle: $("#admin3subtitle").text(),
    admin3desc1: $("#admin3desc1").text(),
    admin3desc2: $("#admin3desc2").text(),
    admintitle4: $("#admintitle4").text(),
    admin4name: $("#admin4name").text(),
    admin4subtitle: $("#admin4subtitle").text(),
    admin4desc1: $("#admin4desc1").text()
  };

  function translateText(text, targetElementId) {
    $.ajax({
      url: "https://translation.googleapis.com/language/translate/v2",
      type: "POST",
      data: {
        q: text,
        target: "ta", // Tamil
        format: "text",
        key: apiKey
      },
      success: function (response) {
        const translated = response.data.translations[0].translatedText;
        $("#" + targetElementId).html(translated);
      },
      error: function () {
        console.error("Translation failed for " + targetElementId);
      }
    });
  }

  $("#tourenglishLink").click(function (e) {
    e.preventDefault();
    // Set original English back
    for (const id in originalTexts) {
      $("#" + id).text(originalTexts[id]);
    }
    $("#tourenglishLink").addClass("active");
    $("#tourtamilLink").removeClass("active");
  });

  $("#tourtamilLink").click(function (e) {
    e.preventDefault();
    // Translate all
    for (const id in originalTexts) {
      translateText(originalTexts[id], id);
    }
    $("#tourtamilLink").addClass("active");
    $("#tourenglishLink").removeClass("active");
  });
