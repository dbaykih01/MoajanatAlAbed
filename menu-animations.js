document.addEventListener('DOMContentLoaded', function () {
  const menuData = {
    manakish: {
      title: '١. منقوش',
      items: [
        { name: 'زعتر', sizes: { small: '30,000 ل.ل', large: '50,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'زعتر مشروحة', sizes: { large: '70,000 ل.ل' }, image: 'images/zaatar-meshroha.jpg' },
        { name: 'جبنة و زعتر', sizes: { small: '50,000 ل.ل', large: '100,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'جبنة', sizes: { small: '50,000 ل.ل', large: '100,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'جبنة مشروحة', sizes: { large: '200,000 ل.ل' }, image: 'images/cheese-meshroha.jpg' },
        { name: 'جبنة خضره', sizes: { small: '100,000 ل.ل', large: '200,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'جبنة و ذرة', sizes: { small: '100,000 ل.ل', large: '200,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'جبنة سجق', sizes: { small: '100,000 ل.ل', large: '200,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'جبنة مرتديل', sizes: { small: '100,000 ل.ل', large: '200,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'لبنة خضرة', sizes: { small: '100,000 ل.ل', large: '200,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'لبنة خضرة و مرتديل', sizes: { large: '300,000 ل.ل' }, image: 'images/labneh.jpg' },
        { name: 'اريش', sizes: { small: '50,000 ل.ل', large: '100,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'اريش مع جبنة', sizes: { small: '100,000 ل.ل', large: '200,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'تركية', sizes: { small: '50,000 ل.ل', large: '100,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'كشك', sizes: { small: '100,000 ل.ل', large: '150,000 ل.ل' }, image: 'images/abedlogo.jpeg' },
        { name: 'فاهيتا مع جبنة', sizes: { large: '300,000 ل.ل' }, image: 'images/fahita.jpg' },
        { name: 'طاوق مع جبنة', sizes: { large: '300,000 ل.ل' }, image: 'images/taouq.jpg' }
      ]
    },
    soiree: {
      title: '٢. سواريه',
      items: [
        { name: 'سندويش دجاج', price: '12,000 ل.ل' },
        { name: 'سندويش لحم', price: '13,000 ل.ل' }
      ]
    },
    kaak: {
      title: '٣. كعك',
      items: [
        { name: 'كعك عادي', price: '100,000 ل.ل' },
        { name: 'كعك اكسترا', price: '150,000 ل.ل' },
        { name: 'كعك سجق', price: '200,000 ل.ل' },
        { name: 'كعك مرتديل', price: '200,000 ل.ل' },
        { name: 'كعك ذرة', price: '150,000 ل.ل' },
        { name: 'كعك خضرة', price: '200,000 ل.ل' }
      ]
    },
    pizza: {
      title: '٤. بيتزا',
      items: [
        { name: 'ييتزا صغيرة', price: '150,000 ل.ل' },
        { name: 'ييتزا وسط', price: '300,000 ل.ل' },
        { name: 'ييتزا لارج', price: '600,000 ل.ل' },
        { name: 'ييتزا عائلية', price: '900,000 ل.ل' }
      ]
    },
    juices: {
      title: '٥. عصائر',
      items: [
        { name: 'برتقال', price: '4,000 ل.ل' },
        { name: 'ليمون', price: '4,000 ل.ل' },
        
      ]
    }
  };

  const menuContainer = document.getElementById('menu-container');

  for (const categoryKey in menuData) {
    const category = menuData[categoryKey];

    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'menu-category';

    const title = document.createElement('div');
    title.className = 'category-title';
    title.innerHTML = `<span>${category.title}</span><span class="toggle-icon">►</span>`;
    categoryDiv.appendChild(title);

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'menu-items hidden';
    itemsDiv.style.maxHeight = '0px';

    category.items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'menu-item';

      let imageHTML = '';
      if (item.image) {
        imageHTML = `<img src="${item.image}" alt="${item.name}" class="item-image">`;
      }

      const textHTML = `
        <div class="item-text">
          <strong>${item.name}</strong>
          ${item.sizes?.small ? `<div>صغير: ${item.sizes.small}</div>` : ''}
          ${item.sizes?.large ? `<div>كبير: ${item.sizes.large}</div>` : ''}
          ${item.price ? `<div>السعر: ${item.price}</div>` : ''}
        </div>
      `;

      itemDiv.innerHTML = imageHTML + textHTML;
      itemsDiv.appendChild(itemDiv);
    });

    categoryDiv.appendChild(itemsDiv);
    menuContainer.appendChild(categoryDiv);

    // Toggle with animation
    title.addEventListener('click', () => {
      const icon = title.querySelector('.toggle-icon');

      if (itemsDiv.classList.contains('hidden')) {
        itemsDiv.classList.remove('hidden');
        itemsDiv.style.maxHeight = itemsDiv.scrollHeight + "px";
        icon.textContent = '▼';
      } else {
        itemsDiv.style.maxHeight = itemsDiv.scrollHeight + "px";
        requestAnimationFrame(() => {
          itemsDiv.style.maxHeight = "0px";
          itemsDiv.addEventListener("transitionend", () => {
            itemsDiv.classList.add('hidden');
          }, { once: true });
        });
        icon.textContent = '►';
      }
    });
  }
});
