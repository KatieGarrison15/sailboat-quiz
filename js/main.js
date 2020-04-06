$(function () {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBm7KVE8ZpDPNTmlVBCc1wbdmNwkONfRb0",
    authDomain: "sailboat-klg.firebaseapp.com",
    databaseURL: "https://sailboat-klg.firebaseio.com",
    projectId: "sailboat-klg",
    storageBucket: "sailboat-klg.appspot.com",
    messagingSenderId: "876694739760",
    appId: "1:876694739760:web:89f0b97db96b5783be86f5"
  };

    // Initialize firebase application with
    // config object above
    firebase.initializeApp(firebaseConfig)

    // Firebase API - get reference to songs collection in Firestore
    const dbParts = firebase.firestore().collection('parts')
    //console.log(dbParts)

    let termsList = {}
    //Firebase API - listen
    dbParts.onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
      //console.log(doc.data())
      const term = doc.data().term
      termsList[term]=doc.data()
    })
    //console.log(termsList)
  })

  // ####### Mouseover events - Image and buttons #########
  $('.A-mainsheet').on("mouseover", (event) => {
    colorImage('#A-mainsheet-svg','fill','nofill')
    colorButtonOn('#btn-A-mainsheet','btn-primary')
    define('Mainsail',true)
  })
  $('.B-mast').on("mouseover", (event) => {
    colorImage('#B-mast-svg','fill','nofill')
    colorButtonOn('#btn-B-mast','btn-primary')
    define('Mast',true)
  })
  $('.C-jibsheet').on("mouseover", (event) => {
    colorImage('#C-jibsheet-svg','fill','nofill')
    colorButtonOn('#btn-C-jibsheet','btn-primary')
    define('Jib',true)
  })
  $('.D-rudder').on("mouseover", (event) => {
    colorImage('#D-rudder-svg','fill','nofill')
    colorButtonOn('#btn-D-rudder','btn-primary')
    define('Rudder',true)
  })
  $('.E-body').on("mouseover", (event) => {
    colorImage('#E-body-svg','fill','nofill')
    colorButtonOn('#btn-E-body','btn-primary')
    define('Hull',true)
  })
  $('.F-keel').on("mouseover", (event) => {
    colorImage('#F-keel-svg','fill','nofill')
    colorButtonOn('#btn-F-keel','btn-primary')
    define('Keel',true)
  })
  $('.G-boom').on("mouseover", (event) => {
    colorImage('#G-boom-svg','fill','nofill')
    colorButtonOn('#btn-G-boom','btn-primary')
    define('Boom',true)
  })
  $('.H-tiller').on("mouseover", (event) => {
    colorImage('#H-tiller-svg','fill','nofill')
    colorButtonOn('#btn-H-tiller','btn-primary')
    define('Tiller',true)
  })

  // ####### Mouseleave events - Image and buttons #########
  $('.A-mainsheet').on("mouseleave", (event) => {
    colorImage('#A-mainsheet-svg','nofill','fill')
    colorButtonOff('#btn-A-mainsheet','btn-primary')
    define('Mainsail',false)
  })
  $('.B-mast').on("mouseleave", (event) => {
    colorImage('#B-mast-svg','nofill','fill')
    colorButtonOff('#btn-B-mast','btn-primary')
    define('Mast',false)
  })
  $('.C-jibsheet').on("mouseleave", (event) => {
    colorImage('#C-jibsheet-svg','nofill','fill')
    colorButtonOff('#btn-C-jibsheet','btn-primary')
    define('Jib',false)
  })
  $('.D-rudder').on("mouseleave", (event) => {
    colorImage('#D-rudder-svg','nofill','fill')
    colorButtonOff('#btn-D-rudder','btn-primary')
    define('Rudder',false)
  })
  $('.E-body').on("mouseleave", (event) => {
    colorImage('#E-body-svg','nofill','fill')
    colorButtonOff('#btn-E-body','btn-primary')
    define('Hull',false)
  })
  $('.F-keel').on("mouseleave", (event) => {
    colorImage('#F-keel-svg','nofill','fill')
    colorButtonOff('#btn-F-keel','btn-primary')
    define('Keel',false)
  })
  $('.G-boom').on("mouseleave", (event) => {
    colorImage('#G-boom-svg','nofill','fill')
    colorButtonOff('#btn-G-boom','btn-primary')
    define('Boom',false)
  })
  $('.H-tiller').on("mouseleave", (event) => {
    colorImage('#H-tiller-svg','nofill','fill')
    colorButtonOff('#btn-H-tiller','btn-primary')
    define('Tiller',false)
  })

  function colorImage(elem,classOn,classOff){
    $(elem).toggleClass(classOn,true)
    $(elem).toggleClass(classOff,false)
  }

  function colorButtonOn(elem,classOn){
    $(elem).toggleClass(classOn,true)
  }

  function colorButtonOff(elem,classOff){
    $(elem).toggleClass(classOff,false)
  }

  function define(term, ifShow){
    if (ifShow) {
      //console.log('show')
      const definition = termsList[term]['definition']
      //console.log(definition)
      $('#definition-list').append(
        `
        <dl id="definitions-text">
          <dt>${term}</dt>
          <dd>${definition}</dd>
        </dl>
        `)
    }

    else if (!ifShow) {
      //console.log("don't show")
      $('#definition-list').empty()
    }
  }

})


/*
<dl>
  <dt>Mast</dt>
  <dd>This is a mast which is a mast</dd>
</dl>
*/
