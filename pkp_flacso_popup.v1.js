var PROBABILITY_SHOWING = 1, // 1/1,000
    PROBABILITY_SHOWING_AGAIN = 1, // 1/10,000
    POPUP_ABSOLUTE_FILE_PATH='/popupsurveys',
    DELAY_BEFORE_SHOWING=1000,
    NUM_QUESTIONS_AVAILABLE = 7,
    q_number = pick_question(),
    q_text,
    q_inputs;

// get CSS
$("head").append('<link rel="stylesheet" href="' + POPUP_ABSOLUTE_FILE_PATH + '/alertify.css" />');

function pick_question() {
    var n = 9999;
    while (true) {
        n =  Math.floor(Math.random()*10);
        if (n < NUM_QUESTIONS_AVAILABLE) break;
    }
    return n;
}

function cookie_exists(cookie_name) {
    return RegExp('(^|; )'+cookie_name+'=([^;]*)').exec(document.cookie)
}

switch (q_number) {
    case 0:
		q_text = 'Nos apoyarías contestando una breve encuesta (<5 minutos)?';
		q_inputs = '<input type="hidden" name="entry.374236471" id="entry_374236471" value="' + window.location.href + '"/>';
		break;		
    case 1:
        q_text = '¿Para qué está consultando este artículo?';
        q_inputs = '<ul><li><input type="radio" name="entry.1240186763" value="Para mi trabajo en la universidad" id="group_1240186763_1"> Para mi trabajo en la universidad</label></li><li><input type="radio" name="entry.1240186763" value="Para fundamentar una investigación" id="group_1240186763_2"> Para fundamentar una investigación</label></li><li><input type="radio" name="entry.1240186763" value="Por interés personal" id="group_1240186763_3"> Por interés personal</label></li><li><input type="radio" name="entry.1240186763" value="__other_option__" id="group_1240186763_4"> Por otras razones:</label> <input type="text" name="entry.1240186763.other_option_response" value="" id="entry_1240186763_other_option_response"></li></ul>';
        break;
    case 2:
        q_text = '¿Desde dónde estás accediendo a este artículo?';
        q_inputs = '<ul><li><input type="radio" name="entry.1821438395" value="una universidad" id="group_1821438395_1"> una universidad</label></li><li><input type="radio" name="entry.1821438395" value="un centro de investigación" id="group_1821438395_2"> un centro de investigación</label></li><li><input type="radio" name="entry.1821438395" value="mi residencia" id="group_1821438395_3"> mi residencia</label></li><li><input type="radio" name="entry.1821438395" value="la empresa donde trabajo" id="group_1821438395_4"> la empresa donde trabajo</label></li><li><input type="radio" name="entry.1821438395" value="una ONG" id="group_1821438395_5"> una ONG (organización no gubernamental)</label></li><li><input type="radio" name="entry.1821438395" value="__other_option__" id="group_1821438395_6"> otro:</label> <input type="text" name="entry.1821438395.other_option_response" value="" id="entry_1821438395_other_option_response"></li></ul>';
        break;
    case 3:
        q_text = '¿Compartes artículos científicos en las redes sociales?';
        q_inputs = '<li><input type="checkbox" name="entry.1122481392" value="No" id="group_1122481392_1"> No, nunca</label></li><li><input type="checkbox" name="entry.1122481392" value="Facebook" id="group_1122481392_2"> Sí, en Facebook</label></li><li><input type="checkbox" name="entry.1122481392" value="Twitter" id="group_1122481392_3"> Sí, en Twitter</label></li><li><input type="checkbox" name="entry.1122481392" value="Mendeley" id="group_1122481392_4"> Sí, en Mendeley</label></li><li><input type="checkbox" name="entry.1122481392" value="blogs" id="group_1122481392_5"> Sí, en blogs</label></li><li><input type="checkbox" name="entry.1122481392" value="__other_option__" id="group_1122481392_6"> Sí, en otras redes:</label> <input type="text" name="entry.1122481392.other_option_response" value="" id="entry_1122481392_other_option_response"></li></ul>';
        break;
    case 4:
        q_text = '¿Cuantas días accedes a este portal en un MES?';
        q_inputs = '<table border="0" cellpadding="5" cellspacing="0" id="entry_1706731007"><tr aria-hidden=""><td></td><td><label for="group_1706731007_1">1</label></td><td><label for="group_1706731007_2">2</label></td><td><label for="group_1706731007_3">3</label></td><td><label for="group_1706731007_4">4</label></td><td><label for="group_1706731007_5">5</label></td><td><label for="group_1706731007_6">6</label></td><td><label for="group_1706731007_7">7</label></td><td><label for="group_1706731007_8">8</label></td><td><label for="group_1706731007_9">9</label></td><td><label for="group_1706731007_10">10</label></td><td></td></tr><tr><td>Es mi única<br />vez este mes</td><td><input type="radio" name="entry.1706731007" value="1" id="group_1706731007_1"></td><td><input type="radio" name="entry.1706731007" value="2" id="group_1706731007_2"></td><td><input type="radio" name="entry.1706731007" value="3" id="group_1706731007_3"></td><td><input type="radio" name="entry.1706731007" value="4" id="group_1706731007_4"></td><td><input type="radio" name="entry.1706731007" value="5" id="group_1706731007_5"></td><td><input type="radio" name="entry.1706731007" value="6" id="group_1706731007_6"></td><td><input type="radio" name="entry.1706731007" value="7" id="group_1706731007_7"></td><td><input type="radio" name="entry.1706731007" value="8" id="group_1706731007_8"></td><td><input type="radio" name="entry.1706731007" value="9" id="group_1706731007_9"></td><td><input type="radio" name="entry.1706731007" value="10" id="group_1706731007_10"></td><td aria-hidden="">más de 10</td></tr></table>';
        break;
    case 5:
        q_text = 'Trabajo en:';
        q_inputs = '<ul><li><input type="radio" name="entry.323705361" value="una universidad" id="group_323705361_1"> una universidad</label></li><li><input type="radio" name="entry.323705361" value="sector privado" id="group_323705361_2"> sector privado</label></li><li><input type="radio" name="entry.323705361" value="el gobierno" id="group_323705361_3"> el gobierno</label></li><li><input type="radio" name="entry.323705361" value="una ONG" id="group_323705361_4"> una ONG</label></li><li><input type="radio" name="entry.323705361" value="soy estudiante" id="group_323705361_5"> soy estudiante</label></li><li><input type="radio" name="entry.323705361" value="__other_option__" id="group_323705361_6"> otro:</label> <input type="text" name="entry.323705361.other_option_response" value="" id="entry_323705361_other_option_response"></li></ul>';
        break;
	case 6:
        q_text = 'Me interesa este artículo para:';
        q_inputs = '<ul><li><input type="radio" name="entry.1433285430" value="Mi trabajo en una universidad" id="group_1433285430_1"> Mi trabajo en una universidad</li><li><input type="radio" name="entry.1433285430" value="Mi trabajo en un centro de investigación" id="group_1433285430_2"> Mi trabajo en un centro de investigación</li><li><input type="radio" name="entry.1433285430" value="Mi trabajo en el sector privado" id="group_1433285430_3"> Mi trabajo en el sector privado</li><li><input type="radio" name="entry.1433285430" value="Mi trabajo en una ONG" id="group_1433285430_4"> Mi trabajo en una ONG</li><li><input type="radio" name="entry.1433285430" value="Para una clase (soy estudiante)" id="group_1433285430_5"> Mi vida personal</li><li><input type="radio" name="entry.1433285430" value="Mi vida personal" id="group_1433285430_6"> Mi vida personal</li><li><input type="radio" name="entry.1433285430" value="__other_option__" id="group_1433285430_7"> Por otra razón:</label> <input type="text" name="entry.1433285430.other_option_response" value="" id="entry_1433285430_other_option_response"></li></ul>';
        break;		
}

var formUrl = 'https://docs.google.com/a/alperin.ca/forms/d/1dzlZ1wD_Ro5gdR9FSddjGysiivJ4ECvn9ULep8SetNQ/formResponse',
    pollIDprefix = 'flacso_IDRC',
    pollID = pollIDprefix + '_q' + q_number;

// load jQuery and then alertify.js
$.getScript(POPUP_ABSOLUTE_FILE_PATH + '/alertify.min.js', function() {
    loadPoll();
});

function reset () {
	alertify.set({
		labels : {
			ok     : "Contestar!",
			cancel : "Hoy no"
		},
		delay : 5000,
		buttonReverse : false,
		buttonFocus   : "ok"
	});
}

function loadPoll() {
    var userIP = $('#userIP').text();
    // Check if the cookie exists, courtesy of
    // http://stackoverflow.com/questions/5639346/shortest-function-for-reading-a-cookie-in-javascript
    if ( (!cookie_exists(pollIDprefix) && Math.floor(Math.random()*PROBABILITY_SHOWING) == 0)
        || (cookie_exists(pollIDprefix) && !cookie_exists(pollID) && Math.floor(Math.random()*PROBABILITY_SHOWING_AGAIN) == 0) ) {

        var visitID = Math.random().toString(36).slice(2);  // random alphanumeric string

        // set the cookie so we don't bother this user again
        document.cookie = pollIDprefix + '=1';
        document.cookie = pollID + '=1';

        setTimeout(function() {
			reset();
			alertify.confirm("", function (e) {
				if (e) {
					// override if the q_number is 0, as q0 is a redirect to a form	
					if (q_number == 0) {
						window.open('http://alperin.ca/flacsopkp.php', '_blank');
						alertify.success("Gracias!");
					} else {
	                    $.ajax({
	                          type: "POST",
	                          url: formUrl,
	                          data: $("#flacso_idrc_poll_form").serialize()
	                    });

	        			alertify.set({
	        				labels : {
	        					ok     : "Quiero ayudar!",
	        					cancel : "Hoy no"
	        				}
	                    });

	        			alertify.prompt("¿Le interesaría ayudarnos más en nuestra investigación? <br /> ¿Cual es su correo?", function (e, str) {
	        				if (str) {
	                            $.ajax({
	                                type: "POST",
	                                url: formUrl,
	                                data: {'entry.427127675': str, 'entry.1516328499': visitID, 'entry.1119711452': window.location.href, 'entry.1828203823': userIP}
	                            })
	        				}
	                        alertify.success("Gracias!");
	                    });
						$('.alertify-inner').after('<div class="pkp-survey-info">Su correo no será compartido con nadie. Solo será utilizado para contactarle para solicitar más información y compartir los resultados de este <a href="http://flacso.org.br/oa/" target="_blank">projecto de investigación</a> entre FLACSO, PKP, RedALyC, SciELO, y Latindex.</div>');					
					}
			} else {
            // alertify.alert("Successful AJAX after Cancel");
			}
		});
            var formHTML = '<form id="flacso_idrc_poll_form" name="flacso_idrc_poll_form">';
            formHTML += q_inputs;

            // we have a question that is for the URL of the page being viewed
            formHTML += '<input type="hidden" name="entry.1119711452" id="entry_1119711452" value="' + window.location.href + '"/>';

            formHTML += '<input type="hidden" name="entry.1516328499" id="entry_1516328499" value="' + visitID + '"/>';
            formHTML += '<input type="hidden" name="entry.1828203823" id="entry_1828203823" value="' + userIP + '"/>';
            formHTML += '</form>';

            $('.alertify-message').text(q_text)

            $('.alertify-message').after(formHTML);
			
			$('.alertify-inner').after('<div class="pkp-survey-info">Esta encuesta es parte de un <a href="http://flacso.org.br/oa/" target="_blank">projecto de investigación</a> entre FLACSO, PKP, RedALyC, SciELO, y Latindex.</div>');
        }, DELAY_BEFORE_SHOWING);
    }
}