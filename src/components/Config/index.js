import receipt1 from '../img/receipt10.avif';
import receipt2 from '../img/receipt11.avif';
import receipt3 from '../img/receipt12.avif';
import receipt4 from '../img/receipt13.avif';
import img1 from '../img/img1.avif';
import img2 from '../img/img2.avif';
import img3 from '../img/img3.avif';
import img4 from '../img/img4.avif';
import img5 from '../img/img5.avif';

import gratitude from '../img/gratitude.mp4'

export const ALL_COLLECTIONS = {
  // ПАКЕТ №1: Volkswagen T4
  t4_repair: {
    config: {
      accentColor: "#e67e22ff", // ПОМАРАНЧЕВИЙ
      // accentColor: "#ffc107", // ЗОЛОТИЙ
      targetAmount: 25000,
      currentAmount: 25000.00,
      donationLink: "https://send.monobank.ua/jar/7XZ8RWV88L",
      driveLink: "https://drive.google.com/drive/folders/1eL9yknp9pf1DlaUmMGwEXNXsFoK2WaXI?usp=sharing",
    },
    content: {
      title: "Збір на ремонт VW T4",
      gratitudeTitle: "Подяка",
      gratitudeText: "Збір закрито! Дякуємо кожному, хто долучився!",
    },
    // Список запчастин для відображення в таблиці AboutSection
    parts: [
      { n: "Захисний кожух ГРМ", q: "1 шт." },
      { n: "Комплект ГРМ", q: "1 к-кт" },
      { n: "Датчик тиску масла", q: "1 шт." },
      { n: "Фільтр масляний", q: "1 шт." },
      { n: "Фільтр повітряний", q: "1 шт." },
      { n: "Масло", q: "-" },
      { n: "Антифриз", q: "-" },
      { n: "Задні амортизатори", q: "2 шт." },
      { n: "Задні гальмівні циліндри", q: "-" },
      { n: "Троси ручника", q: "1 к-кт" },
      { n: "Задні колодки", q: "1 к-кт" },
      { n: "Передні амортизатори", q: "2 шт." },
      { n: "Сайлентблоки верхніх важелів", q: "1 к-кт (л+п)" },
      { n: "Сайлентблоки нижніх важелів", q: "1 к-кт (л+п)" },
      { n: "Тяги рульові", q: "1 к-кт (л+п)" },
      { n: "Втулки стабілізатора передні", q: "2 шт." },
      { n: "Тяжки стабілізатора", q: "2 шт." },
      { n: "Направляючі супорта переднього", q: "1 к-кт (л+п)" },
      { n: "Ремкомплект переднього супорта", q: "Поршень + манжети" },
      { n: "Колодки передні", q: "1 к-кт" },
      { n: "Рульові наконечники", q: "2 шт. (л+п)" },
      { n: "Запасне колесо (R15 195x65)", q: "1 шт." },
      { n: "Розширювальний бачок", q: "1 шт." },
      { n: "Датчик рівня палива", q: "1 шт." },
      { n: "Передні фари", q: "2 шт." },
      { n: "Правий передній поворот", q: "1 шт." },
      { n: "Задні протитуманні стопи", q: "2 шт." },
      { n: "Задні стопи (ліхтарі)", q: "2 шт." },
      { n: "Ліве дзеркало заднього виду", q: "1 шт." },
      { n: "Підшипники задніх ступиць", q: "2 шт." },
      { n: "Вихлопна система", q: "1 шт." }
    ],
    receipts: {
        receipt1: receipt1,
        receipt2: receipt2,
        receipt3: receipt3,
        receipt4: receipt4,
    },
    images: {
        image1: img1,
        image2: img2,
        image3: img3,
        image4: img4,
        image5: img5,
    },
    videos: {
        video1: gratitude,
    }
  },

  // ПАКЕТ №2: Новий збір 
  drones_collection: {
    config: {
      accentColor: "#2ecc71", 
      targetAmount: 100000,
      currentAmount: 15000,
      donationLink: "https://send.monobank.ua/jar/drones_link",
    },
    content: {
      title: "Збір на FPV-дрони",
      gratitudeText: "Допоможемо хлопцям бачити ворога!",
      videoSrc: "/path/to/another_video.mp4",
    },
    parts: [
      { n: "Рама 7 дюймів", q: "10 шт." },
      { n: "Стек (Польотник + ESC)", q: "10 шт." },
    ],
    receipts: {},
    faq: [
      { q: "Куди підуть дрони?", a: "В 152-гу бригаду." }
    ]
  }
};







// Deep Charcoal	#28282b	Основний фон (Background)
// Amber Gold	#ffc107	Заголовки, лінії, важливі акценти
// Vibrant Orange	#e67e22	Кнопки донату, критичні дії (Hover)
// Soft White	#f8f9fa	Основний текст (читабельність)
// Muted Slate	#4a4a4e	Картки, другорядні блоки