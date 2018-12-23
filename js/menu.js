export function setMenu () {
          // nav
          let oBotonAbrirMenu = document.querySelector( "#btn-abrir-menu" )
          let oBotonCerrarMenu = document.querySelector( "#btn-cerrar-menu" )
          let oMenuMobile = document.querySelector( "#menu-mobile" )

          let oBtnHome = document.querySelector( "#btn-home" )
          let oBtnWhoIAm = document.querySelector( "#btn-whoiam" )
          let oBtnStudies = document.querySelector( "#btn-studies" )
          let oBtnExperience = document.querySelector( "#btn-experience" )
          let oBtnAboutMe = document.querySelector( "#btn-aboutme" )
          let oBtnContact = document.querySelector( "#btn-contact" )
          
        

          let aMenuItems = document.querySelectorAll( "nav.tablet > ul > li" )
          let aSections = document.querySelectorAll( "body>header#home, section" )
          let oOffSets = [];


          // Activo lso manejadores de evento
          window.addEventListener( 'scroll', changeScrollMenuStyle )
          window.addEventListener( 'resize', prepararNavegacion )


          oBotonAbrirMenu.addEventListener( 'click', toggleMenu )
          oBotonCerrarMenu.addEventListener( 'click', toggleMenu )

          // Manejadores para los enlace del Menu

          oBtnHome.addEventListener( "click", ejecutarEnlaceMenu )
          oBtnWhoIAm.addEventListener( 'click', ejecutarEnlaceMenu )
          oBtnStudies.addEventListener( "click", ejecutarEnlaceMenu )
          oBtnExperience.addEventListener( "click", ejecutarEnlaceMenu )
          oBtnAboutMe.addEventListener( "click", ejecutarEnlaceMenu )
          oBtnContact.addEventListener( "click", ejecutarEnlaceMenu )
          

          // Obtengo los nodos de las secciones
          prepararNavegacion()

          function prepararNavegacion () {
                    aSections.forEach( item => ( oOffSets[ "#" + item.id ] = item.offsetTop ) )
          }


          function changeScrollMenuStyle () {
                    let pageOffset = window.pageYOffset

                    
                    // Le asigno una posición en función de la zona del scroll en la que se encuentre
                    let menuItem = 0
                    if ( pageOffset >= oOffSets[ "#home" ] && pageOffset < oOffSets[ "#whoiam" ] ) {
                              menuItem = 0
                    } else if ( pageOffset >= oOffSets[ "#whoiam" ] && pageOffset < oOffSets[ "#studies" ] ) {
                              menuItem = 1
                    } else if ( pageOffset >= oOffSets[ "#studies" ] && pageOffset < oOffSets[ "#experience" ] ) {
                              menuItem = 2
                    } else if ( pageOffset  >= oOffSets[ "#experience" ] && pageOffset < oOffSets[ "#aboutme" ] ) {
                              menuItem = 3
                    } else if ( pageOffset >= oOffSets[ "#aboutme" ] && pageOffset < oOffSets[ "#contact" ] ) {
                              menuItem = 4
                    } else {
                              menuItem = 5
                    }

                    // Le quito a todos la clase activo
                    aMenuItems.forEach(
                              item =>
                                        item.classList.remove(
                                                  "active"
                                        )
                    )

                    // Al elemento del array de enlaces que le corresponde le añado la clase activa
                    aMenuItems[ menuItem ].classList.add( "active" )
          }

          function toggleMenu ( oE ) {

                    oE.preventDefault()

                    oMenuMobile.classList.toggle( 'hide' )
                    oBotonAbrirMenu.classList.toggle( 'hide' )
                    oBotonCerrarMenu.classList.toggle( 'hide' )

          }
          
          function ejecutarEnlaceMenu ( oE ) {
                    // oE.preventDefault()
                    
                    // Le quito a todos la clase activo
                    aMenuItems.forEach(
                              item =>
                                        item.classList.remove(
                                                  "active"
                                        )
                    )

                    switch ( oE.target.id ) {
                              case "item-menu-home":
                                        aMenuItems[ 0 ].classList.add( "active" )
                                        location.href = "#home"
                                        break
                              case "item-menu-whoiam":
                                        aMenuItems[ 1 ].classList.add( "active" )
                                        location.href = "#whoiam"
                                        break
                              case "item-menu-studies":
                                        aMenuItems[ 2 ].classList.add( "active" )
                                        location.href = "#studies"
                                        break
                              case "item-menu-experience":
                                        aMenuItems[ 3 ].classList.add( "active" )
                                        location.href = "#experience"
                                        break
                              case "item-menu-aboutme":
                                        aMenuItems[ 4 ].classList.add( "active" )
                                        location.href = "#aboutme"
                                        break
                              case "item-menu-contact":
                                        aMenuItems[ 5 ].classList.add( "active" )
                                        location.href = "#contact"
                                        break
                              default:
                                        location.href = "#"
                    }
                    
                    
                    
          }
}
