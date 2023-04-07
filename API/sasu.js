$.ajax({
    url: 'https://randomuser.me/api/?results=5',
    dataType: 'json',
    success: function(data) {
        data.results.forEach((user, index) => {

        $('#name-' + index).html(
       user.name.first + ' ' + user.name.last);

        $('#email-'+index).html(user.email);

        $('#phone-'+index).html(user.phone);

        $('#country-'+index).html( user.location.city + ', ' + user.location.state);
        
        $('#picture-'+index).attr('src', user.picture.large);
    });
}});


  