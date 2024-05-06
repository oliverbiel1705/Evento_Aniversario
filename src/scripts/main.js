AOS.init();

const contadorDeTempo = setInterval(function() {
    var dataAtual = moment();
    var dataEvento = moment('2024-03-20 18:00:00');
    var tempoAnos = dataEvento.clone().diff(dataAtual, 'years');
    var tempoMeses =  dataEvento.clone().diff(dataAtual.clone().add(tempoAnos, 'years'), 'months');
    var tempoDias =  dataEvento.clone().diff(dataAtual.clone().add(tempoAnos, 'years').add(tempoMeses, 'months'), 'days');
    var tempoHoras =  dataEvento.clone().diff(dataAtual.clone().add(tempoAnos, 'years').add(tempoMeses, 'months').add(tempoDias, 'days'), 'hours');
    var tempoMinutos =  dataEvento.clone().diff(dataAtual.clone().add(tempoAnos, 'years').add(tempoMeses, 'months').add(tempoDias, 'days').add(tempoHoras, 'hours'), 'minutes');
    var tempoSegundos =  dataEvento.clone().diff(dataAtual.clone().add(tempoAnos, 'years').add(tempoMeses, 'months').add(tempoDias, 'days').add(tempoHoras, 'hours').add(tempoMinutos, 'minutes'), 'seconds');

    if (dataEvento.clone().diff(dataAtual.clone()) > 0) {
        document.getElementById('texto-evento').innerHTML = String(`Faltam ${tempoAnos} anos, ${tempoMeses} meses, ${tempoDias} dias, ${tempoHoras} horas, ${tempoMinutos} minutos e ${tempoSegundos} segundos!`);
    }
    else {
        clearInterval(contadorDeTempo);
        document.getElementById('texto-evento').innerHTML = String(`A festa já passou!`);
    }
}, 1000);