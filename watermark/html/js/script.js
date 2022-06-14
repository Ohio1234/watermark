window.addEventListener('message', function(event) {
  moment.locale('da-DK');
  if (event.data.playerCount <= 32) {
    document.getElementById('horario').innerHTML = `<h3>${moment().format(`DD/MM/YYYY - HH:mm:ss`)}<hr style='margin: 0; padding: 0; border: none;'> <span style=' color: #eee;'>${event.data.playerCount}</span> i Byen - ID: ${event.data.userId}</h3>`;
  } else if(event.data.playerCount <= 48) {
    document.getElementById('horario').innerHTML = `<h3>${moment().format(`DD/MM/YYYY - HH:mm:ss`)}<hr style='margin: 0; padding: 0; border: none;'> <span style=' color: #fcba03;'>${event.data.playerCount}</span> i Byen - ID: ${event.data.userId}</h3>`;
  } else {
    document.getElementById('horario').innerHTML = `<h3>${moment().format(`DD/MM/YYYY - HH:mm:ss`)}<hr style='margin: 0; padding: 0; border: none;'> <span style=' color: #f5141f;'>${event.data.playerCount}</span> i Byen - ID: ${event.data.userId}</h3>`;
  }
});