PennController.ResetPrefix(null) // Shorten command names (keep this line here)
//AddHost("http://sabotin.ung.si/~astepanov/SLO_COMP_audio/")
//AddHost("http://sabotin.ung.si/~astepanov/ru_wh_pictures/")

AddHost("http://sabotin.ung.si/~dk0035/")


var progressBarText = "прогрес"


Sequence(  "intro", "intro1",  "demo", sepWith("sendAsync", randomize("experiment")), "sendAsync", SendResults(), "bye") 

//InitiateRecorder("https://vecjezicnost.ung.si/media_rec/mediarec.php", "Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
InitiateRecorder("https://vecjezicnost.ung.si/BGexp1/mediarec.php", "Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
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

	newText("Здравейте! Това изследване е посветено на някои особености на множественото число в българския език и се провежда в рамките на изследователски проект в Университета в Нова Горица, Словения и Университета в Женева, Швейцария. Това е първото от  серия от проучвания върху множественото число в български и руски език.")
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
        
	newText("Вашата задача е да изслушате незавършени изречения, след това да ги повторите, като ги довършите. Докато произнасяте изреченията, ще трябва да запишете гласа си, като използвате микрофона на компютъра си. За да запишете отговора си, кликнете върху бутон „Record“ (Запис). За да спрете записа, натиснете върху бутона „Stop“ (Стоп).")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	//newText("В ходе эксперимента Вам будут представлены краткие тексты, описывающие ту или иную бытовую ситуацию. После каждого текста мы попросим Вас устно задать вопрос или произнести утверждение в связи с данным контекстом, и записать его, используя микрофон Вашего компьютера.  Чтобы записать вопрос, кликните на кнопку 'Record'. Чтобы остановить запись, кликните на 'Stop'. ")
	//.css("width","40em")
	//.css("line-height","1.4")
	//.css("padding-top","40px")
	//.css("padding-bottom","20px")
	//.print()
	//,

	newText(`<i>Пример</i>:<br>
Вие чувате: Мартин / беше / построил / красиви / пясъчни<br>
Зададена дума: замък<br>
Вие произнасяте: Мартин / беше / построил / красиви / пясъчни / замъци`)
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,
      
	newText("За да можете да запишете гласа си, ще ви е нужен работещ микрофон. Преди да продължите по-нататък с експеримента, моля, пробвайте да изслушате своя глас, за да се уверите, че всичко работи, както трябва.")
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
	
	newText("Моля, използвайте формите, които звучат най-добре за Вас, когато завършвате изреченията. Следвайте интуицията си, без да обмисляте отговора си при изпълнението на задачата и без да използвате помощ от други източници.")
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

    
    newButton("continue0", "Продължи")
       .css("line-height","1.4")
       .center()
       .print()
       .wait()
          

   ).setOption("hideProgressBar",true),
      

newTrial("demo", 

    newHtml("demographics", "ru_wh_demo.html")
    .css("padding-top","10%")
    .css("line-height","1.4")
    .checkboxWarning("Моля, изберете една от възможностите.")
    .inputWarning("Моля, попълнете това поле.")
    .radioWarning("Моля, изберете една от възможностите.")
            .settings.log()
            .print()
            
            
    
 ,
 


  newButton("continue1", "Продължете с пример 1")
       .center()
       .print()
       .wait( 
           getHtml("demographics").test.complete()
              .failure( getHtml("demographics").warn() )
           )
       ).setOption("hideProgressBar",true)


 newText("Това е пример 1")
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
    
    
    newButton("continuetest1", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    ,



    newAudio("target", "Test\mono\test1_mono.wav")
         .play()
    ,

    newText("")
    .print()
    ,
    
    newText("кон")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .print()
    ,

    

  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-долу в подходящата форма. Също така запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//	newAudio("myAudio", "http://myserver/audio.mp3")
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
      
      newButton("continuetest2", "Продължете с пример 2")
          .print()
          .center()
          .wait()
          .log()


 newText("Това е пример 2")
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
    
    
    newButton("continue1", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    ,


    newAudio("target", "Test\mono\test2_mono.wav")
         .play()
    ,

    newText("")
    .print()
    ,
    
    newText("крава")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .print()
    ,


  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-долу в подходящата форма. Също така запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//	newAudio("myAudio", "http://myserver/audio.mp3")
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
      
      newButton("continue", "Продължете с експеримента")
          .print()
          .center()
          .wait()
          .log()



Template("design_final.csv",
      variable => newTrial("experiment",

    fullscreen()
        ,
    
    newTimer(500)
        .start()
        .wait()
    ,


    newButton("continue1", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    ,


    newAudio("target", variable.PathOfAaudioFile)
         .play()
    ,

    newText("")
    .print()
    ,
    
    newText(variable.BaseFormOfTargetNoun)
    .css("line-height","1.4")
    .css("padding-top","5%")
    .print()
    ,

    

  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-долу в подходящата форма. Също така запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//	newAudio("myAudio", "http://myserver/audio.mp3")
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
  .log("Type",variable.Type)
  .log("ConditionLabel",variable.ConditionLabel)
  .log("Numeral",variable.Numeral)
  .log("Target Noun",variable.BaseFormOfTargetNoun)
  .log("Final Sentence",variable.FinalSentence)
  .log("Target Noun",variable.BaseFormOfTargetNoun)
  .log("Group",variable.Group)
  .log("Audio File",variable.TargetAudioFile)

  )
 
,
  
   newTrial( "bye" ,
   exitFullscreen()
   ,
   newText("Това е краят на екперимента. Благодарим Ви за участието! Ако имате въпроси относно експеримента, може да се обърнете по електронна поща към професор Артур Степанов 'arthur.stepanov@ung.si', професор Пенка Статева 'penka.stateva@ung.si' или Данил Христов 'danil.khristov@ung.si'.")
       .css("width","40em")
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

