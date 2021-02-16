PennController.ResetPrefix(null) // Shorten command names (keep this line here)
//AddHost("http://sabotin.ung.si/~astepanov/SLO_COMP_audio/")
//AddHost("http://sabotin.ung.si/~astepanov/ru_wh_pictures/")

AddHost("http://sabotin.ung.si/~dk0035/")


var progressBarText = "прогрес"


Sequence("intro", "intro1",  "demo", "trials",  "demo1",  "demo2", "expbegin", sepWith("sendAsync", randomize("experiment")), "sendAsync", SendResults(), "bye")

////Sequence("intro", "intro1", "intro2", "trials")
////("intro", "trials")

////Sequence("intro", "intro1", "demo",  "trials", "demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")) ok 
////Sequence("intro", "intro1", "trials","demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")))

/////////InitiateRecorder("https://vecjezicnost.ung.si/media_rec/mediarec.php", "")
InitiateRecorder("https://vecjezicnost.ung.si/BGexp1/mediarec.php", "Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
///InitiateRecorder("http://sabotin.ung.si/~dk0035/tests", "")
    .label("intro")

UploadRecordings("sendAsync", "noblock")


    let replaceConsentMic = ()=>{
            let consentLink = $(".PennController-PennController a.Message-continue-link");
            if (consentLink.length > 0 && consentLink[0].innerHTML.match(/^By clicking this link I understand that I grant this experiment's script access to my recording device/))
                consentLink.html("Давам съгласието си за използване на микрофона и за записване на гласа ми в този експеримент. ");
            else
                window.requestAnimationFrame( replaceConsentMic );
    };
    window.requestAnimationFrame( replaceConsentMic );





newTrial("intro1",

	newText("Здравейте! В рамките на изследователски проект в Университета в Нова Горица, Словения и Университета в Женева, Швейцария изследваме как носителите на езика устно обработват изречения с различна дължина и сложност.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()

	,

	newText("Експериментът отнема около 25 минути. Предоставените от Вас данни ще бъдат използвани само за целите на това научно изследване и няма да бъдат разпространявани неправомерно.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,
        
	
	newText("Вашата задача е да изслушате незавършени изречения, след това да ги довършите, като произнесете само последната дума.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,


	
	newText(`<i>Пример</i>:<br>
Вие чувате: Мартин беше построил красиви пясъчни<br>
Зададена дума: <i>замък</i><br>
Вие произнасяте: <i>замъци</i>`)
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()

	,
      
	newText("Моля, използвайте формите, които звучат най-добре за Вас, когато завършвате изреченията. Следвайте интуицията си, без да обмисляте отговора си при изпълнението на задачата и без да използвате помощ от други източници.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,
      
     
	
	newText("Докато произнасяте последната дума, ще трябва да запишете гласа си, като използвате микрофона на компютъра си. За да запишете отговора си, натиснете върху бутон „Запис“. За да спрете записа, натиснете върху бутона „Стоп“.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	newText("За да можете да запишете гласа си, ще Ви е нужен работещ микрофон. Преди да продължите по-нататък с експеримента, моля, пробвайте да запишете и изслушате своя глас, за да се уверите, че всичко работи, както трябва.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

  newMediaRecorder("test0", "audio")
          .center()
          .print()
          
    ,
 
	  newButton("continuets", "Продължете нататък")
       .center()
       .print()
        .wait()
        .log()
	
 
   
  ).setOption("hideProgressBar",true)
  //.log(getMediaRecorder("test0"))

,

    
newTrial("demo", 

    newText("Моля, попълнете следната анкета и натиснете бутона най-долу, за да започнете експеримента.")
	    .css("width","40em")
	    .css("line-height","1.4")
	    //.css("padding-top","40px")
	    .css("padding-bottom","20px")
	    .print()

    ,

    newHtml("demographics", "ru_wh_demo.html")
    .css("padding-top","10%")
    .css("line-height","1.4")
    .checkboxWarning("Моля, изберете една от възможностите.")
    .inputWarning("Моля, попълнете това поле.")
    .radioWarning("Моля, изберете една от възможностите.")
            .settings.log()
            .print()
            
            

    ,
        newButton("continue1", "Продължете нататък")
       .center()
       .print()
       .wait( 
           getHtml("demographics").test.complete()
              .failure( getHtml("demographics").warn() )
           )
       ).setOption("hideProgressBar",true)
    ,
    
  

         
        

newTrial ("trials",
	


	newText("Ще започнем с две примерни изречения, за да добиете представа за задачата. След тях започва настоящият експеримент.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

	
  newButton("continue", "Продължете с пример 1")
          .print()
          .center()
          .wait()
          .log()
          
          ).setOption("hideProgressBar",true)
,



newTrial ("demo1", 

 newText("Пример 1:")
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
    
    ,
    newButton("continuetest1", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    ,



    newAudio("test1_audio", "Training/mono/STE-001_mono.wav")
         .play()
         .wait()
    ,
    
    newTimer("wait", 500)
    .start()
    .wait()
    ,

    newText("")
    .print()
    ,
    
    newText("<p style=\"font-size:18pt\">кон</p>")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .center()
    .print()
    ,
    

    

//  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
//          .print()
//          .center()
//          .css("padding-bottom","20px")
//          .css("padding-top","20px")


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
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
  
      newMediaRecorder("test1", "audio")
          //.print()
          .log()
          .center()
          .once()
         
          
         ,
      
    newButton("Запис")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder("test1")
        .record()
        
    ,

    newButton("Стоп")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder("test1")
        .stop()
        
    ,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
     
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
).setOption("hideProgressBar",true)
//.log(getMediaRecorder("test1"))
,

newTrial("demo2", 

 newText("Пример 2:")
 	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
    ,
    
    newButton("continue1", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    ,


    newAudio("test2_audio", "Training/mono/STE-002_mono.wav")
         .play()
         .wait()
    ,
    newTimer("wait", 500)
    .start()
    .wait()
    ,


    newText("")
    .print()
    ,
    

    newText("<p style=\"font-size:18pt\">крава</p>")
    .css("line-height","1.4")
    .center()
    .css("padding-top","5%")
    .print()
    ,


//  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
//          .print()
//          .center()
//          .css("padding-bottom","20px")
//          .css("padding-top","20px")


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
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
  
      newMediaRecorder("test2", "audio")
          //.print()
          .log()
          .center()
          .once()
      ,
      
     newButton("Запис")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder("test2")
        .record()
        
    ,

    newButton("Стоп")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder("test2")
        .stop()
        
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

).setOption("hideProgressBar",true)
//.log(getMediaRecorder("test2"))
,

newTrial ("expbegin",
	
      newText("Сега сме готови да започнем с основния експеримент.")
	.css("width","40em")
	.css("line-height","1.4")
	//.css("padding-top","40px")
	.css("padding-bottom","20px")
	.print()
	,

      newButton("continue", "Започнете експеримента")
          .print()
          .center()
          .wait()
          .log()
).setOption("hideProgressBar",true)
,

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


    newAudio("target", variable.PathOfAudioFile)
         .play()
         .wait()
    ,
    newTimer("wait", 500)
    .start()
    .wait()
    ,


    newText("")
    .print()
    ,
    
    newText("<p style=\"font-size:18pt\">"+variable.BaseFormOfTargetNoun+"</p>")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .center()
    .print()
    ,

    


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
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
  

          
        newMediaRecorder(variable.OutputAudioFile, "audio")
          //.print()
          .log()
          .center()
          .once()
      ,
      
     newButton("Запис")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder(variable.OutputAudioFile)
        .record()
        
    ,

    newButton("Стоп")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder(variable.OutputAudioFile)
        .stop()
        
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
  .log("Condition Label",variable.ConditionLabel)
  .log("Numeral",variable.Numeral)
  .log("Target Noun",variable.BaseFormOfTargetNoun)
  .log("Final Sentence",variable.FinalSentence)
  .log("Target Noun",variable.BaseFormOfTargetNoun)
  .log("Group",variable.Group)
  .log("Audio File",variable.TargetAudioFile)
  //.log("Output Audio File",getMediaRecorder(variable.OutputAudioFile))

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


DebugOff();
//.setOption("showProgressBar ",false)
//.setOption( "countsForProgressBar" , false )
// Make sure the progress bar is full upon reaching this last (non-)trial

