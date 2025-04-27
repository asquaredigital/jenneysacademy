 const apiKey = "AIzaSyBs0UZDa5lcoPvQ3xzIMqhDNO56iGSIQVs"; // Replace with your actual Google Translate API key


  // Store original English texts individually
  const administratortitleText = $("#administratortitle").text();
  const admintitleText = $("#admintitle").text();
  const admin1nameText = $("#admin1name").text();
  const admin1subtitleText = $("#admin1subtitle").text();
  const admin1descText = $("#admin1desc").text();
  const admin1desc2Text = $("#admin1desc2").text();
  const admintitle2Text = $("#admintitle2").text();
  const admin2nameText = $("#admin2name").text();
  const admin2subtitleText = $("#admin2subtitle").text();
  const admin2desc1Text = $("#admin2desc1").text();
  const admin2desc2Text = $("#admin2desc2").text();
  const admin2desc3Text = $("#admin2desc3").text();
  const admintitle3Text = $("#admintitle3").text();
  const admin3nameText = $("#admin3name").text();
  const admin3subtitleText = $("#admin3subtitle").text();
  const admin3desc1Text = $("#admin3desc1").text();
  const admin3desc2Text = $("#admin3desc2").text();
  const admintitle4Text = $("#admintitle4").text();
  const admin4nameText = $("#admin4name").text();
  const admin4subtitleText = $("#admin4subtitle").text();
  const admin4desc1Text = $("#admin4desc1").text();

  // Collect all texts in the order of IDs
  const englishTexts = [
    administratortitleText,
    admintitleText,
    admin1nameText,
    admin1subtitleText,
    admin1descText,
    admin1desc2Text,
    admintitle2Text,
    admin2nameText,
    admin2subtitleText,
    admin2desc1Text,
    admin2desc2Text,
    admin2desc3Text,
    admintitle3Text,
    admin3nameText,
    admin3subtitleText,
    admin3desc1Text,
    admin3desc2Text,
    admintitle4Text,
    admin4nameText,
    admin4subtitleText,
    admin4desc1Text
  ];

  // Corresponding IDs in the same order
  const elementIds = [
    "administratortitle",
    "admintitle",
    "admin1name",
    "admin1subtitle",
    "admin1desc",
    "admin1desc2",
    "admintitle2",
    "admin2name",
    "admin2subtitle",
    "admin2desc1",
    "admin2desc2",
    "admin2desc3",
    "admintitle3",
    "admin3name",
    "admin3subtitle",
    "admin3desc1",
    "admin3desc2",
    "admintitle4",
    "admin4name",
    "admin4subtitle",
    "admin4desc1"
  ];

  function translateAllTexts() {
    $.ajax({
      url: "https://translation.googleapis.com/language/translate/v2",
      type: "POST",
      data: {
        q: englishTexts, // Sending all 22 texts together
        target: "ta",
        format: "text",
        key: apiKey
      },
      traditional: true, // Important when sending arrays in jQuery POST
      success: function (response) {
        const translations = response.data.translations;
        // Apply translated text to corresponding elements
        for (let i = 0; i < translations.length; i++) {
          $("#" + elementIds[i]).html(translations[i].translatedText);
        }
      },
      error: function () {
        alert("Translation failed.");
      }
    });
  }

  $("#englishLink").click(function (e) {
    e.preventDefault();
    // Switch back to original English text manually
    $("#" + elementIds[0]).text(administratortitleText);
    $("#" + elementIds[1]).text(admintitleText);
    $("#" + elementIds[2]).text(admin1nameText);
    $("#" + elementIds[3]).text(admin1subtitleText);
    $("#" + elementIds[4]).text(admin1descText);
    $("#" + elementIds[5]).text(admin1desc2Text);
    $("#" + elementIds[6]).text(admintitle2Text);
    $("#" + elementIds[7]).text(admin2nameText);
    $("#" + elementIds[8]).text(admin2subtitleText);
    $("#" + elementIds[9]).text(admin2desc1Text);
    $("#" + elementIds[10]).text(admin2desc2Text);
    $("#" + elementIds[11]).text(admin2desc3Text);
    $("#" + elementIds[12]).text(admintitle3Text);
    $("#" + elementIds[13]).text(admin3nameText);
    $("#" + elementIds[14]).text(admin3subtitleText);
    $("#" + elementIds[15]).text(admin3desc1Text);
    $("#" + elementIds[16]).text(admin3desc2Text);
    $("#" + elementIds[17]).text(admintitle4Text);
    $("#" + elementIds[18]).text(admin4nameText);
    $("#" + elementIds[19]).text(admin4subtitleText);
    $("#" + elementIds[20]).text(admin4desc1Text);

    $("#englishLink").addClass("active");
    $("#tamilLink").removeClass("active");
  });

  $("#tamilLink").click(function (e) {
    e.preventDefault();
    translateAllTexts();
    $("#tamilLink").addClass("active");
    $("#englishLink").removeClass("active");
  });
