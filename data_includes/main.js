PennController.ResetPrefix(null) // Shorten command names (keep this line here)
//AddHost("http://sabotin.ung.si/~astepanov/SLO_COMP_audio/")
AddHost("http://sabotin.ung.si/~astepanov/ru_wh_pictures/")


var progressBarText = "прогресс"

Sequence(  "intro", "intro1",  "demo", sepWith("sendAsync", randomize("experiment")), "sendAsync", SendResults(), "bye") 

InitiateRecorder("https://vecjezicnost.ung.si/media_rec/mediarec.php", "Пожалуйста, отрегулируйте настройки вашего браузера, чтобы разрешить доступ к микрофону, затем кликните на ссылку ниже.")
    .label("intro")

UploadRecordings("sendAsync", "noblock")


    let replaceConsentMic = ()=>{
            let consentLink = $(".PennController-PennController a.Message-continue-link");
            if (consentLink.length > 0 && consentLink[0].innerHTML.match(/^By clicking this link I understand that I grant this experiment's script access to my recording device/))
                consentLink.html("Давам съгласието си за използване на микрофона в този експеримент.");
            else
                window.requestAnimationFrame( replaceConsentMic );
    };
    window.requestAnimationFrame( replaceConsentMic );



newTrial("intro1", 

	newText("Здравейте! Това изследване е посветено на някои особености на множественото число в българския език и се провежда в рамките на изследователски проект в Университета в Нова Горица, Словения и Университета в Женева, Швейцария. Това е първото от  серия от проучвания върху множествееното число върху български и руски език.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	newText("Експериментът отнема около 20 минути. Предоставените от Вас данни ще бъдат използвани само за целите на това научно изследване и няма да бъдат разпространявани неправомерно.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,
        
	newText("Вашата задача е да изслушате незавършени изречения, след това да ги повторите, като ги довършите. Докато произнасяте изреченията, ще трябва да запишете гласа си, като използвате микрофона на компютъра си. За да запишете гласа си, кликнете върху бутона „Запис“. За да спрете записа, кликнете върху бутона „Стоп“.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	newText("В ходе эксперимента Вам будут представлены краткие тексты, описывающие ту или иную бытовую ситуацию. После каждого текста мы попросим Вас устно задать вопрос или произнести утверждение в связи с данным контекстом, и записать его, используя микрофон Вашего компьютера.  Чтобы записать вопрос, кликните на кнопку 'Record'. Чтобы остановить запись, кликните на 'Stop'. ")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	newText("Пример:
Вие чувате: Мартин / беше / построил / красиви / пясъчни
зададена дума: пясък
Вие произнасяте: Мартин / беше / построил / красиви / пясъчни / замъци")
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,
      
	newText("За да можете да запишете гласа си, ще ви е нужен работещ микрофон. Преди да продължите по-нататък с експеримента, моля пробвайте да изслушате своя глас, за да се уверите, че всичко работи както трябва.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,
      
       newMediaRecorder("recorder0", "audio")
          .center()
          .print()  
    	,
	
	newText("Моля, използвайте формите, които звучат най-добре за Вас, когато завършвате изреченията. Следвайте интуициите си без да обмисляте отговора си при изпълнението на задачата. Не използвайте помощ от други източници.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	newText("Ще започнем с две примерни изречения, за да добиете представа за задачата. След тях започва настоящият експеримент. Моля, попълнете данните в анкетата за участие и натиснете връзката, за да продължите.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	
    
    newText("")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

    
    newButton("continue0", "Все нормально, продолжаем")
       .css("line-height","1.4")
       .center()
       .print()
       .wait()
          

   ).setOption("hideProgressBar",true),
      

newTrial("demo", 

    newHtml("demographics", "ru_wh_demo.html")
    .css("padding-top","10%")
    .css("line-height","1.4")
    .checkboxWarning("Моля, изберите една от възможностите.")
    .inputWarning("Моля, попълнете това поле.")
    .radioWarning("Моля, изберете една от възможностите.")
            .settings.log()
            .print()
 ,
  newButton("continue2", "Начало на експеримента")
       .center()
       .print()
       .wait( 
           getHtml("demographics").test.complete()
              .failure( getHtml("demographics").warn() )
           )
       ).setOption("hideProgressBar",true)



Template("design_final.csv",
      variable => newTrial("experiment",

    fullscreen()
        ,
    
    newTimer(500)
        .start()
        .wait()
    ,


    newAudio("target", variable.TargetImageFile)
         .play()
    ,

    
//    newImage("target", variable.TargetImageFile)
//         .size("25vw","25vw * getElementById('target').height/getElementById('target').width")
//         .print()
//    ,

  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-долу в подходящата форма. Също така запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  
      newMediaRecorder("recorder", "audio")
          .print()
           .log()
          .center()
          .once()
          .wait()
      ,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      
      newButton("continue", "Продължете със следващия пример")
          .print()
          .center()
          .wait()
          .log()
  
  
  ).setOption("hideProgressBar",false)
  )
 
,
  


   newTrial( "bye" ,
   exitFullscreen()
   ,
   newText("Това е краят на екперимента. Благодарим Ви за участието! Вы можете закрыть вкладку. Ако, имате въпроси относно експеримента, може да се обърнете към професор Артур Степанов по електронна поща 'arthur.stepanov@ung.si', професор Пенка Статева по електронна поща 'penka.stateva@ung.si' или Данил Христов по електронна поща 'danil.khristov@ung.si'.

")       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()
  //  ,  
  // newButton()
      .wait()  // Wait for a click on a non-displayed button = wait here forever
           ).setOption("hideProgressBar",true)


DebugOff()
//.setOption("showProgressBar ",false)
//.setOption( "countsForProgressBar" , false )
// Make sure the progress bar is full upon reaching this last (non-)trial