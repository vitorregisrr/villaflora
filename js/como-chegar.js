(function () {
    'use strict';

    if ($('#como-chegar-map').length > 0) {
        $('#como-chegar-error').hide();

        // Setta os limites do Brasil
        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(41.242, 29.215),
            new google.maps.LatLng(40.518, 30.370));

        // Inicia o auto complete para o INPUT
        var input = document.getElementById('como-chegar-adress');
        var options = {
            componentRestrictions: {
                country: "br"
            }
        };

        var autocomplete = new google.maps.places.Autocomplete(input, options);

        // Instancia os elementos necessários para o map
        var map;
        var directionsService = new google.maps.DirectionsService();
        var info = new google.maps.InfoWindow({
            maxWidth: 200
        });

        // Cria os dois marcadores para ambas portarias
        var portaria1 = new google.maps.Marker({
            title: 'Portaria 1',
            icon: '../images/ico/portaria-1.png',
            position: new google.maps.LatLng('-23.5540864', '-47.4861891')
        });

        var portaria2 = new google.maps.Marker({
            title: 'Portaria 2',
            icon: '../images/ico/portaria-2.png',
            position: new google.maps.LatLng('-23.5601756', '-47.4777235')
        });

        // Inicia o mapa quando a página é carregada
        function initialize() {
            var options = {
                center: portaria1.position,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            map = new google.maps.Map($('#como-chegar-map')[0], options);

            portaria1.setMap(map);
            portaria2.setMap(map);

            google.maps.event.addListener(portaria1, 'click', function () {
                info.setContent('Portaria 1:');
                info.open(map, portaria1);
            });

            google.maps.event.addListener(portaria2, 'click', function () {
                info.setContent('Portaria 2:');
                info.open(map, portaria2);
            });
        }
        initialize();

        // Muda a rota dinamicamente quando o formulário é enviado
        $('#como-chegar-form').submit(function (e) {
            e.preventDefault();
            info.close();
            portaria1.setMap(null);
            portaria2.setMap(null);

            var directionsDisplay = new google.maps.DirectionsRenderer();
            var request;

            // Cria a request dinamicamente de acordo com a portaria selecionada
            if ($('input[name=radioPortaria]:checked').val() === "1") {
                request = {
                    origin: $("#como-chegar-adress").val(),
                    destination: portaria1.position,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

            } else if ($('input[name=radioPortaria]:checked').val() === "2") {
                request = {
                    origin: $("#como-chegar-adress").val(),
                    destination: portaria2.position,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };
            }

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setMap(map);
                    $('#como-chegar-error').fadeOut();

                    $("html, body").animate({
                        scrollTop: $('#como-chegar-map').offset().top - 50
                    }, 700);

                } else {
                    $('#como-chegar-error').fadeIn();
                }
            });

            return false;
        });
    }
})();