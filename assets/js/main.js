$(function() {

  //Pour tester les input text
  var stringRegex = /^[a-zA-ZéèîïÉÈÎÏ '-][a-zéèêàçîï '-]+([-'\s][a-zA-ZéèîïÉÈÎÏ '-][a-zéèêàçîï '<-></->]+)?$/;
  //Pour tester l'input date
  var dateReg = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  //Fonction vérifiquation de formulaire
  $('form').submit(function(event) {
    var test = true;
    //Pour les input de type text
      $('input[type = "text"]').each(function() {

          let input = $(this).val();
          //Si le champ est vide
          if (input == '') {
            //Alerter
              alert('Ce champ est requis');
              test = false;
              //Cependant si le champ ne passe pas le regex
          } else if (!stringRegex.test(input)) {
            //Alerter
              alert('Saisie incorrect');
              test = false;
          }
      });
      //Pour les input de type date
      var date = $('input[type = "date"]').val()
      //Si le champ n'est pas une date
      if (!date) {
        alert('Date requise');
        test = false;
      //Cependant si le champ ne passe pas le regex
      }else if (!dateReg.test(date)) {
        alert('Saisie incorrect')
        test = false;
      }
      if(!test){
        event.preventDefault();
      }else {
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var dateOfBirth = $('#dateOfBirth').val();
        var placeOfBirth = $('#placeOfBirth').val();
        var job = $('#job').val();
        var society = $('#society').val();
        alert(firstName + ' ' + lastName + ', née le ' + dateOfBirth + ' à ' + placeOfBirth + ', actualement ' + job + ' chez ' + society );
      }
    });
  });
