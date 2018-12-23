export function setForm () { 
          // Formulario
          let formContact = document.querySelector( '#frm-contact' )
          let oContact = {}
          
          let optFormSelection = document.querySelector( "#selection" )
          let inputFormPhone = document.querySelector( "#phone" )
          
          let inputTellmemore = document.querySelector( "#tellmemore" )
          let txtWordCount = document.querySelector( "#word-count" )
          let txtMensajeOKFormulario = document.querySelector( "#sms-form-ok" )
          let txtMensajeKOFormulario = document.querySelector("#sms-form-ko")
          
          
          

          // inputFormPhone.setCustomValidity( "Escriba el teléfono con el siguiente formato: XXXXXXXXX (Sólo se admiten números)" )

          formContact.addEventListener( 'submit', enviarFormulario )
          optFormSelection.addEventListener( 'change', validarDesplegableFormulario )
          inputTellmemore.addEventListener( 'keyup', pintarTotalPalabras )
          
          
          function enviarFormulario ( oE ) {
                    oE.preventDefault()
                    oContact.name = document.querySelector( '#name' ).value
                    oContact.email = document.querySelector( '#email' ).value
                    oContact.selection = document.querySelector( '#selection' ).value
                    oContact.others = document.querySelector( '#others' ).value
                    oContact.phone = document.querySelector( '#phone' ).value
                    oContact.tellmemore = document.querySelector( '#tellmemore' ).value
                    
                    if ( contarPalabras( oContact.tellmemore ) > 150 ) {
                              txtMensajeOKFormulario.innerHTML = ""
                              txtMensajeKOFormulario.innerHTML = "Sólo puedes enviarme 150 palabras en el mensaje"
                    } else {
                              console.log( oContact )
                              txtMensajeOKFormulario.innerHTML = "Formulario enviado correctamente"
                              txtMensajeKOFormulario.innerHTML = ""
                    }
          }
          
          function validarDesplegableFormulario ( oE ) {
                    // console.log('Lo he llamado')
                    // console.log( oE )
                    // console.log( oE.target.value )
                    if ( oE.target.value == 'op5' ) {
                              oE.target.nextElementSibling.classList.toggle( 'oculto' )

                              // oE.target.nextelemtsibling.classList.toggle( 'oculto' )

                    } else {
                              oE.target.nextElementSibling.classList.add( 'oculto' )
                    }


          }
          
          function contarPalabras (str) {
                    return str.split( " " ).length
          }
          
          function pintarTotalPalabras ( oE ) {
                    let wordsTellmemore = document.querySelector( "#tellmemore" ).value
                    txtWordCount.innerHTML = contarPalabras( wordsTellmemore )
                    
          }
}