//Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no console do seu navegador.

//1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
function filterCountry(array) {

  let hoteisBrasil = []

  for (i = 0; i < data.length; i++) {
    hotel = data[i].country
    if (hotel == 'Brasil') {
      hoteisBrasil.push(data[i].name)
    }
  }
  console.log('os hoteis localizados no brasil são,', hoteisBrasil.join(', '))

}
filterCountry()

// 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.
function filterPrice(array) {

  let precoHoteis = []

  for (i = 0; i < data.length; i++) {
    let preco = data[i].price
    if (preco >= 200) {
      precoHoteis.push(data[i].name)
    }
  }

  console.log('os hoteis com preço maior ou igual a R$200,00 são,', precoHoteis.join(', '))

}
filterPrice()

//3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
function filterIsOpen(array) {

  let hoteisAbertos = []

  for (i = 0; i < data.length; i++) {
    let funcionando = data[i].isOpen
    if (funcionando == true) {
      hoteisAbertos.push(data[i].name)
    }
  }

  console.log('Os hoteis que estão abertos são,', hoteisAbertos.join(', '))

}
filterIsOpen()


//DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).
function filterHotelName(array) {

  let hotel = []
  for (i = 0; i < data.length; i++) {
    let nomeHotel = data[i].name
    if (nomeHotel == 'Copacabana Palace') {
      hotel.push(nomeHotel)
    }
  }
  return hotel.join('')
}
filterHotelName()

function filterToBook() {
  const hotel = filterHotelName(data);
  let datas = []

  for (i - 0; i < data[hotel].length; i++) {
    if (hotel[i].toBook.isAvaliable == true){
      datas.push(hotehotel[i].toBook.date)
    }
  }
  console.log('As datas disponíveis no hotel,', hotel, ' são: ', datas.join(', ') )
}
filterToBook()
