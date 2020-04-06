$(function () {

  // ####### Mouseover events #########
  $('#A-mainsheet').on("mouseover", (event) => {
    //console.log('A-mainsheet')
    color('#A-mainsheet','fill','nofill')
  })
  $('#B-mast').on("mouseover", (event) => {
    //console.log('B-mast')
    color('#B-mast','fill','nofill')
  })
  $('#C-jibsheet').on("mouseover", (event) => {
    //console.log('C-jibsheet')
    color('#C-jibsheet','fill','nofill')
  })
  $('#D-rudder').on("mouseover", (event) => {
    //console.log('D-rudder')
    color('#D-rudder','fill','nofill')
  })
  $('#E-body').on("mouseover", (event) => {
    //console.log('E-body')
    color('#E-body','fill','nofill')
  })
  $('#F-keel').on("mouseover", (event) => {
    //console.log('F-keel')
    color('#F-keel','fill','nofill')
  })
  $('#G-boom').on("mouseover", (event) => {
    //console.log('G-boom')
    color('#G-boom','fill','nofill')
  })
  $('#H-tiller').on("mouseover", (event) => {
    //console.log('H-tiller')
    color('#H-tiller','fill','nofill')
  })


  // ####### Mouseleave events #########
  $('#A-mainsheet').on("mouseleave", (event) => {
    //console.log('A-mainsheet')
    color('#A-mainsheet','nofill','fill')
  })
  $('#B-mast').on("mouseleave", (event) => {
    //console.log('B-mast')
    color('#B-mast','nofill','fill')
  })
  $('#C-jibsheet').on("mouseleave", (event) => {
    //console.log('C-jibsheet')
    color('#C-jibsheet','nofill','fill')
  })
  $('#D-rudder').on("mouseleave", (event) => {
    //console.log('D-rudder')
    color('#D-rudder','nofill','fill')
  })
  $('#E-body').on("mouseleave", (event) => {
    //console.log('E-body')
    color('#E-body','nofill','fill')
  })
  $('#F-keel').on("mouseleave", (event) => {
    //console.log('F-keel')
    color('#F-keel','nofill','fill')
  })
  $('#G-boom').on("mouseleave", (event) => {
    //console.log('G-boom')
    color('#G-boom','nofill','fill')
  })
  $('#H-tiller').on("mouseleave", (event) => {
    //console.log('H-tiller')
    color('#H-tiller','nofill','fill')
  })



  function color(elem,classOn,classOff){
    $(elem).toggleClass(classOn,true)
    $(elem).toggleClass(classOff,false)
  }

})
