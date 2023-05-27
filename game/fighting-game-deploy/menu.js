
let soundClick = () => {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'menu.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  }