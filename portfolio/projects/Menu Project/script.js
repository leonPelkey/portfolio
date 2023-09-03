const menuItems = [
  {
    id: 1,
    name: "Quesadillas",
    category: "appetizer",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "I am a cheer heavily tire and I like scorchs because of kangaroos eating rudely"
  },

  {
    id: 2,
    name: "Burger Sliders",
    category: "appetizer",
    image: "https://images.unsplash.com/photo-1521791853374-e56df02d24e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80",
    description: "Because of doubtfully suck birthday, dads can't salamander, I paddle what the accessibility would be like if apples could instruct righteously."
  },
  
  {
    id: 3,
    name: "Fish and Chips",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    description: "Duck tease income remain puppy is train punctually so pigeon shame chimpanzee wobble tender stew is awesome carelessly wormy apple fact talk oceanic quicker dog is awesome approve gopher."
  },

  {
    id: 4,
    name: "Hot Fudge Sundae",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1670275153200-d7c05040318b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Soap mortally degree breakfast puppy is eating you fierce wad chop tenderly reach dimly ram is hog flap viciously instantly summer helplessly rhinoceros zebra."
  },

  {
    id: 5,
    name: "Pizza",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    description: "Snail hypnotic houses delight bananna is wink potentially scribble board gorilla bored travel bananna is abnormal cat stomach."
  },

  {
    id: 6,
    name: "Chicken Tacos",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1570461226513-e08b58a52c53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    description: "Because of seriously order light, clocks can't waste bleakly, I miss what the coconut would be like if butterflies could twist jubilantly."
  },

  {
    id: 7,
    name: "BBQ Ribs",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1623174078579-594416790e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Because of loudly check heat, captions can't mine sun, I sip what the parsley would be like if giraffes could frighten scarily."
  },

  {
    id: 8,
    name: "Philly Cheese Steak",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1604467707321-70d5ac45adda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    description: "Tapir admire mysteriously cat is a hotdog close wild carpenter lemur club boar frog is a hotdog friendly ad ashamed curvy thoughtfully owl kangaroo is confused buffalo."
  },

  {
    id: 9,
    name: "Potato Skins",
    category: "appetizer",
    image: "https://images.unsplash.com/photo-1595955545772-0d06367c140d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Hesitant hourly actually fasten a is ad lowly cat vegetable beaver terrify indelible pig is weird likely ad silver fox cat sandy yearningly jellyfish."
  },

  {
    id: 10,
    name: "Nachos",
    category: "appetizer",
    image: "https://images.unsplash.com/photo-1598726465740-455ad9c05fbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80",
    description: "Obster gladly ram offbeat pig is a hotdog harsh mountain goat examine partially gratefully melt turtle is a hotdog."
  },

  {
    id: 11,
    name: "Chocolate Lava Cake",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    description: "Talented tree jam scarcely convincing pretend home is confused melt reflect equally flap edible bull playfully jellyfish is blot energetically."
  },

  {
    id: 12,
    name: "Apple Pie",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "I am a clock, highly chameleon and I like mans because of zebras eating eel."
  },

  {
    id: 13,
    name: "Chicken Wings",
    category: "appetizer",
    image: "https://plus.unsplash.com/premium_photo-1683657860186-6afce5df3c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    description: "Because of yieldingly enjoy selection, armys can't flow highly, I applaud what the china would be like if apples could ski fully."
  },

  {
    id: 14,
    name: "Reuben Sandwich",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1614746526977-fac370353ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "Because of tensely surprise cats, sides can't notice ornament, I grease what the knocking would be like if puppies could spray mostly."
  },
];

const menuDisplay = document.querySelector('.js-menu-container');
const filterBtns = document.querySelectorAll('.js-btn');

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItems(menuItems);
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (value) => {
    const category = value.currentTarget.dataset.id;
    const menuCategory = menuItems.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === 'all') {
      displayMenuItems(menuItems);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

const displayMenuItems = (menuItems) => {
  let menu = menuItems.map((item) => {
    return `
      <div class="menu-card">
        <div class="img-container">
          <img src=${item.image}>
        </div>
        <div class="info-container">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `
  });
  menu = menu.join("");
  menuDisplay.innerHTML = menu;
}