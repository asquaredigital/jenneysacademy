
  const abouttitle = $("#abouttitle").text();
  const aboutcontent1 = $("#aboutcontent1").text();
  const aboutcontent2 = $("#aboutcontent2").text();
  const aboutcontent3 = $("#aboutcontent3").text();
  const whytitle1 = $("#whytitle1").text();
  const why1 = $("#why1").text();
  const why2 = $("#why2").text();
  const why3 = $("#why3").text();
  const why4 = $("#why4").text();
  const highlightstitle = $("#highlightstitle").text();
  const highlight1 = $("#highlight1").text();
  const highlight2 = $("#highlight2").text(); 
  const highlight3 = $("#highlight3").text();
  const highlight4 = $("#highlight4").text();

  
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
   

    $("#abouttitle").text(abouttitle);
    $("#aboutcontent1").text(aboutcontent1);
    $("#aboutcontent2").text(aboutcontent2);
    $("#aboutcontent3").text(aboutcontent3);
    $("#whytitle1").text(whytitle1);
    $("#why1").text(why1);
    $("#why2").text(why2);
    $("#why3").text(why3);
    $("#why4").text(why4);
    $("#highlightstitle").text(highlightstitle);
    $("#highlight1").text(highlight1);

    $("#highlight2").text(highlight2);
    $("#highlight3").text(highlight3);

    $("#highlight4").text(highlight4);

      
    $("#tourenglishLink").addClass("active");
    $("#tourtamilLink").removeClass("active");
  });

  $("#tourtamilLink").click(function (e) {
    e.preventDefault();
    

    translateTextToTamil(abouttitle, "abouttitle");
    translateTextToTamil(aboutcontent1, "aboutcontent1");
    translateTextToTamil(aboutcontent2, "aboutcontent2");
    translateTextToTamil(aboutcontent3, "aboutcontent3");
    translateTextToTamil(whytitle1, "whytitle1");
    translateTextToTamil(why1, "why1");

    translateTextToTamil(why2, "why2");
    translateTextToTamil(why3, "why3");
    translateTextToTamil(why4, "why4");
    translateTextToTamil(highlightstitle, "highlightstitle");
    translateTextToTamil(highlight1, "highlight1");
    translateTextToTamil(highlight2, "highlight2");
    translateTextToTamil(highlight3, "highlight3");   
    translateTextToTamil(highlight4, "highlight4");


    $("#tourtamilLink").addClass("active");
    $("#tourenglishLink").removeClass("active");
  });

  
