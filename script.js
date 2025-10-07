// Utilidades
const formatCOP = (value) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);
  
  // Datos del catálogo: categorías, subsecciones y 4 productos por cada una
  const catalogData = {
    "Frutas": {
      "Ácidas": [
        { id: "fr-ac-1", name: "Limón Tahití", img: "images/limontahiti.jpg", desc: "Limón fresco ideal para jugos y adobos.", unit: "por libra", price: 3200 },
        { id: "fr-ac-2", name: "Maracuyá", img: "images/maracuya.jpg", desc: "Pulpa aromática y tropical, perfecta para postres.", unit: "por libra", price: 5800 },
        { id: "fr-ac-3", name: "Piña Oro", img: "images/pinagolden.jpg", desc: "Piña dulce y jugosa, seleccionada.", unit: "por unidad", price: 7200 },
        { id: "fr-ac-4", name: "Mora de castilla", img: "images/moracastilla.jpg", desc: "Rica en antioxidantes, ideal para batidos.", unit: "por libra", price: 6900 }
      ],
      "Semiácidas": [
        { id: "fr-sa-1", name: "Manzana Roja", img: "images/manzanaroja.jpg", desc: "Crujiente y equilibrada, perfecta para snacks.", unit: "por libra", price: 7900 },
        { id: "fr-sa-2", name: "Uva Isabella", img: "images/uvaisabella.jpg", desc: "Aromática y dulce, para mesa y jugos.", unit: "por libra", price: 8800 },
        { id: "fr-sa-3", name: "Ciruela", img: "images/ciruelas.jpg", desc: "Textura suave y sabor intenso.", unit: "por libra", price: 9900 },
        { id: "fr-sa-4", name: "Guayaba", img: "images/guayabas.jpg", desc: "Fragante y rica en vitamina C.", unit: "por libra", price: 5200 }
      ],
      "Neutras": [
        { id: "fr-ne-1", name: "Aguacate Hass", img: "images/aguacates.jpg", desc: "Cremoso, ideal para ensaladas y tostadas.", unit: "por unidad", price: 4800 },
        { id: "fr-ne-2", name: "Coco", img: "images/cocos.jpg", desc: "Pulpa y agua refrescante.", unit: "por unidad", price: 8500 },
        { id: "fr-ne-3", name: "Banano Verde", img: "images/platanos.jpg", desc: "Para patacones y preparaciones saladas.", unit: "por libra", price: 2600 },
        { id: "fr-ne-4", name: "Tamarindo", img: "images/tamarindos.jpg", desc: "Sabor neutro y versátil.", unit: "por libra", price: 7400 }
      ],
      "Dulces": [
        { id: "fr-du-1", name: "Banano", img: "images/bananos.jpg", desc: "Dulce y energético, fuente de potasio.", unit: "por libra", price: 2500 },
        { id: "fr-du-2", name: "Mango Tommy", img: "images/mangos.jpg", desc: "Maduración uniforme y pulpa carnosa.", unit: "por unidad", price: 4200 },
        { id: "fr-du-3", name: "Papaya", img: "images/papayas.jpg", desc: "Ideal para el desayuno.", unit: "por unidad", price: 7800 },
        { id: "fr-du-4", name: "Melón Cantalupo", img: "images/melones.jpg", desc: "Aroma fresco y sabor dulce.", unit: "por unidad", price: 9900 }
      ]
    },
  
    "Verduras": {
      "Raíces": [
        { id: "ve-ra-1", name: "Zanahoria", img: "images/zanahorias.jpg", desc: "Fresca y crujiente para ensaladas.", unit: "por libra", price: 2400 },
        { id: "ve-ra-2", name: "Papa Criolla", img: "images/criollas.jpg", desc: "Dorada y cremosa, ideal para sopas.", unit: "por libra", price: 3800 },
        { id: "ve-ra-3", name: "Yuca", img: "images/yucas.jpg", desc: "Base perfecta para frituras.", unit: "por libra", price: 3200 },
        { id: "ve-ra-4", name: "Rábano", img: "images/rabanos.jpg", desc: "Picante suave y refrescante.", unit: "por libra", price: 2900 }
      ],
      "Hojas": [
        { id: "ve-ho-1", name: "Lechuga Romana", img: "images/lechugas.jpg", desc: "Base ideal para ensaladas.", unit: "por unidad", price: 3500 },
        { id: "ve-ho-2", name: "Espinaca", img: "images/espinacas.jpg", desc: "Fresca para salteados.", unit: "por libra", price: 4600 },
        { id: "ve-ho-3", name: "Acelga", img: "images/acelgas.jpg", desc: "Fibrosa y nutritiva.", unit: "por libra", price: 3800 },
        { id: "ve-ho-4", name: "Col rizada", img: "images/coles.jpg", desc: "Textura firme, rica en minerales.", unit: "por libra", price: 5200 }
      ],
      "Tallos": [
        { id: "ve-ta-1", name: "Apio", img: "images/apios.jpg", desc: "Crujiente y aromático.", unit: "por unidad", price: 2800 },
        { id: "ve-ta-2", name: "Puerro", img: "images/puerros.jpg", desc: "Suave y delicado para sopas.", unit: "por unidad", price: 4500 },
        { id: "ve-ta-3", name: "Espárragos", img: "images/esparragos.jpg", desc: "Tiernos y gourmet.", unit: "por libra", price: 13200 },
        { id: "ve-ta-4", name: "Brotes de bambú", img: "images/bambus.jpg", desc: "Toque asiático a tus platos.", unit: "por libra", price: 9800 }
      ],
      "Bulbos": [
        { id: "ve-bu-1", name: "Cebolla cabezona", img: "images/cebollas.jpg", desc: "Infaltable en la cocina.", unit: "por libra", price: 2200 },
        { id: "ve-bu-2", name: "Ajo", img: "images/ajos.jpg", desc: "Sabor intenso, gran aromático.", unit: "por libra", price: 7800 },
        { id: "ve-bu-3", name: "Cebolla puerro", img: "images/puerros.jpg", desc: "Dulzor sutil.", unit: "por unidad", price: 3900 },
        { id: "ve-bu-4", name: "Chalota", img: "images/chalota.jpg", desc: "Para salsas y salteados finos.", unit: "por libra", price: 11500 }
      ],
      "Flores": [
        { id: "ve-fl-1", name: "Brócoli", img: "images/brocolis.jpg", desc: "Textura firme, gran aporte nutricional.", unit: "por unidad", price: 4800 },
        { id: "ve-fl-2", name: "Coliflor", img: "images/coliflores.jpg", desc: "Versátil para purés.", unit: "por unidad", price: 5200 },
        { id: "ve-fl-3", name: "Alcachofa", img: "images/alcachofas.jpg", desc: "Sabor único y elegante.", unit: "por unidad", price: 6900 },
        { id: "ve-fl-4", name: "Flor de calabaza", img: "images/calabazas.jpg", desc: "Delicada para rellenos.", unit: "por libra", price: 14800 }
      ],
      "Frutos": [
        { id: "ve-fr-1", name: "Tomate Chonto", img: "images/tomates.jpg", desc: "Jugoso y equilibrado.", unit: "por libra", price: 3200 },
        { id: "ve-fr-2", name: "Pimentón Rojo", img: "images/pimentones.jpg", desc: "Dulce y aromático.", unit: "por unidad", price: 2600 },
        { id: "ve-fr-3", name: "Calabacín", img: "images/calabacines.jpg", desc: "Suave y versátil.", unit: "por libra", price: 4200 },
        { id: "ve-fr-4", name: "Pepino Cohombro", img: "images/pepinos.jpg", desc: "Refrescante para ensaladas.", unit: "por unidad", price: 1900 }
      ],
      "Semillas": [
        { id: "ve-se-1", name: "Maíz tierno", img: "images/maiz.jpg", desc: "Dulce para asados.", unit: "por unidad", price: 2400 },
        { id: "ve-se-2", name: "Guisantes", img: "images/guisantes.jpg", desc: "Pequeños y dulces.", unit: "por libra", price: 6800 },
        { id: "ve-se-3", name: "Habichuelas", img: "images/habichuelas.jpg", desc: "Crujientes y verdes.", unit: "por libra", price: 5400 },
        { id: "ve-se-4", name: "Fríjol verde", img: "images/frijolesverdes.jpg", desc: "Aporte vegetal y textura.", unit: "por libra", price: 5700 }
      ]
    },
  
    "Carnes": {
      "Pollo": [
        { id: "ca-po-1", name: "Pechuga deshuesada", img: "images/pechugas.jpg", desc: "Magra, ideal para plancha.", unit: "por libra", price: 12900 },
        { id: "ca-po-2", name: "Muslo con piel", img: "images/muslos.jpg", desc: "Jugoso y sabroso.", unit: "por libra", price: 9800 },
        { id: "ca-po-3", name: "Alitas BBQ", img: "images/alas.jpg", desc: "Perfectas para parrilla.", unit: "por libra", price: 13200 },
        { id: "ca-po-4", name: "Pollo entero", img: "images/pollos.jpg", desc: "Ideal para asar.", unit: "por unidad", price: 24900 }
      ],
      "Cerdo": [
        { id: "ca-ce-1", name: "Lomo de cerdo", img: "images/lomos.jpg", desc: "Corte tierno para horno.", unit: "por libra", price: 15800 },
        { id: "ca-ce-2", name: "Chuleta", img: "images/chuletas.jpg", desc: "Clásica para almuerzo.", unit: "por libra", price: 13900 },
        { id: "ca-ce-3", name: "Tocino", img: "images/tocinos.jpg", desc: "Crujiente y aromático.", unit: "por libra", price: 16800 },
        { id: "ca-ce-4", name: "Costillas BBQ", img: "images/costillas.jpg", desc: "Para parrilla y horno.", unit: "por libra", price: 18900 }
      ],
      "Res": [
        { id: "ca-re-1", name: "Punta de anca", img: "images/puntas.jpg", desc: "Sabor intenso, jugoso.", unit: "por libra", price: 21900 },
        { id: "ca-re-2", name: "Lomo fino", img: "images/lomosres.jpg", desc: "Corte premium.", unit: "por libra", price: 32900 },
        { id: "ca-re-3", name: "Molida de res", img: "images/molidas.jpg", desc: "Versátil para salsas.", unit: "por libra", price: 18900 },
        { id: "ca-re-4", name: "Sobrebarriga", img: "images/sobrebarrigas.jpg", desc: "Para cocción lenta.", unit: "por libra", price: 19900 }
      ],
      "Pescados": [
        { id: "ca-pe-1", name: "Salmón", img: "images/salmones.jpg", desc: "Graso y nutritivo.", unit: "por libra", price: 36900 },
        { id: "ca-pe-2", name: "Trucha", img: "images/truchas.jpg", desc: "Fresco de cultivo.", unit: "por libra", price: 28900 },
        { id: "ca-pe-3", name: "Tilapia", img: "images/tilapias.jpg", desc: "Suave y versátil.", unit: "por libra", price: 21900 },
        { id: "ca-pe-4", name: "Róbalo", img: "images/robalos.jpg", desc: "Textura firme.", unit: "por libra", price: 39900 }
      ],
      "Mariscos": [
        { id: "ca-ma-1", name: "Camarón", img: "images/camarones.jpg", desc: "Dulce y delicado.", unit: "por libra", price: 42900 },
        { id: "ca-ma-2", name: "Calamar", img: "images/calamares.jpg", desc: "Anillos y tentáculos.", unit: "por libra", price: 29900 },
        { id: "ca-ma-3", name: "Mejillón", img: "images/mejillones.jpg", desc: "Para paellas.", unit: "por libra", price: 21900 },
        { id: "ca-ma-4", name: "Langostino", img: "images/langostinos.jpg", desc: "De gran tamaño.", unit: "por libra", price: 51900 }
      ]
    },
  
    "Despensa": {
      "Arroz y granos": [
        { id: "de-ag-1", name: "Arroz blanco 1kg", img: "images/arroz.jpg", desc: "Grano largo, buena cocción.", unit: "por unidad", price: 5200 },
        { id: "de-ag-2", name: "Lentejas 500g", img: "images/lentejas.jpg", desc: "Rápida cocción.", unit: "por unidad", price: 4900 },
        { id: "de-ag-3", name: "Fríjol rojo 500g", img: "images/frijolesrojos.jpg", desc: "Sabor tradicional.", unit: "por unidad", price: 5900 },
        { id: "de-ag-4", name: "Quinoa 500g", img: "images/quinoa.jpg", desc: "Proteína vegetal.", unit: "por unidad", price: 14900 }
      ],
      "Café": [
        { id: "de-ca-1", name: "Café molido 250g", img: "images/cafemolido.jpg", desc: "Tueste medio y balanceado.", unit: "por unidad", price: 12900 },
        { id: "de-ca-2", name: "Café de origen 250g", img: "images/cafedeorigen.jpg", desc: "Notas frutales y cacao.", unit: "por unidad", price: 18900 },
        { id: "de-ca-3", name: "Café instantáneo 200g", img: "images/cafeinstantaneo.jpg", desc: "Rápido y práctico.", unit: "por unidad", price: 9800 },
        { id: "de-ca-4", name: "Cápsulas x10", img: "images/capsulas.jpg", desc: "Compatibles con sistemas comunes.", unit: "por unidad", price: 21900 }
      ],
      "Chocolate": [
        { id: "de-ch-1", name: "Chocolate de mesa 250g", img: "images/chocolatemesa.jpg", desc: "Para bebida tradicional.", unit: "por unidad", price: 7200 },
        { id: "de-ch-2", name: "Barra 70% cacao 100g", img: "images/cacaobarra.jpg", desc: "Notas intensas de cacao.", unit: "por unidad", price: 9900 },
        { id: "de-ch-3", name: "Cacao en polvo 200g", img: "images/cacaopolvo.jpg", desc: "Para repostería y bebidas.", unit: "por unidad", price: 13900 },
        { id: "de-ch-4", name: "Crema de cacao 350g", img: "images/cacaocrema.jpg", desc: "Untable y suave.", unit: "por unidad", price: 16900 }
      ],
      "Pastas y enlatados": [
        { id: "de-pe-1", name: "Pasta espagueti 500g", img: "images/espagueti.jpg", desc: "Trigo duro, buena textura.", unit: "por unidad", price: 5200 },
        { id: "de-pe-2", name: "Atún en agua 160g", img: "images/atunagua.jpg", desc: "Fuente de proteína.", unit: "por unidad", price: 6500 },
        { id: "de-pe-3", name: "Maíz enlatado 300g", img: "images/maizenlata.jpg", desc: "Dulce y práctico.", unit: "por unidad", price: 4900 },
        { id: "de-pe-4", name: "Salsa de tomate 200g", img: "images/salsatomate.jpg", desc: "Para pastas y pizzas.", unit: "por unidad", price: 4300 }
      ]
    },
  
    "Charcutería": {
      "Quesos": [
        { id: "ch-qu-1", name: "Queso mozzarella 250g", img: "images/quesomozzarella.jpg", desc: "Fundente y suave.", unit: "por unidad", price: 9800 },
        { id: "ch-qu-2", name: "Queso doble crema 250g", img: "images/quesodoblecrema.jpg", desc: "Textura cremosa.", unit: "por unidad", price: 9200 },
        { id: "ch-qu-3", name: "Queso campesino 500g", img: "images/quesocampesino.jpg", desc: "Tradicional y fresco.", unit: "por unidad", price: 13900 },
        { id: "ch-qu-4", name: "Queso parmesano 150g", img: "images/quesoparmesano.jpg", desc: "Intenso y añejado.", unit: "por unidad", price: 16900 }
      ],
      "Frutos secos": [
        { id: "ch-fs-1", name: "Almendras 200g", img: "images/almendras.jpg", desc: "Tostadas y crujientes.", unit: "por unidad", price: 15900 },
        { id: "ch-fs-2", name: "Nueces 200g", img: "images/nueces.jpg", desc: "Sabor profundo.", unit: "por unidad", price: 18900 },
        { id: "ch-fs-3", name: "Maní 250g", img: "images/mani.jpg", desc: "Clásico y versátil.", unit: "por unidad", price: 6900 },
        { id: "ch-fs-4", name: "Pistachos 200g", img: "images/pistachos.jpg", desc: "Toque gourmet.", unit: "por unidad", price: 22900 }
      ],
      "Carnes maduradas": [
        { id: "ch-cm-1", name: "Jamón serrano 150g", img: "images/jamon.jpg", desc: "Curado y aromático.", unit: "por unidad", price: 18900 },
        { id: "ch-cm-2", name: "Salami 200g", img: "images/salami.jpg", desc: "Sazonado y firme.", unit: "por unidad", price: 12900 },
        { id: "ch-cm-3", name: "Prosciutto 150g", img: "images/prosciutto.jpg", desc: "Delicado y elegante.", unit: "por unidad", price: 21900 },
        { id: "ch-cm-4", name: "Chorizo curado 200g", img: "images/chorizo.jpg", desc: "Intenso y especiado.", unit: "por unidad", price: 11900 }
      ],
      "Encurtidos": [
        { id: "ch-en-1", name: "Pepinillos 300g", img: "images/pepinillos.jpg", desc: "Crujientes y ácidos.", unit: "por unidad", price: 8200 },
        { id: "ch-en-2", name: "Aceitunas verdes 300g", img: "images/aceitunas.jpg", desc: "Saladas y firmes.", unit: "por unidad", price: 8900 },
        { id: "ch-en-3", name: "Cebollitas en vinagre 300g", img: "images/cebollitas.jpg", desc: "Toque gourmet.", unit: "por unidad", price: 7800 },
        { id: "ch-en-4", name: "Alcaparras 100g", img: "images/alcaparras.jpg", desc: "Sabor concentrado.", unit: "por unidad", price: 9900 }
      ]
    }
  };
  
  // Mapeo de anchors para navegación interna
  const sectionAnchors = {
    "Frutas": {
      "Ácidas": "frutas-acidas",
      "Semiácidas": "frutas-semiacidas",
      "Neutras": "frutas-neutras",
      "Dulces": "frutas-dulces"
    },
    "Verduras": {
      "Raíces": "verduras-raices",
      "Hojas": "verduras-hojas",
      "Tallos": "verduras-tallos",
      "Bulbos": "verduras-bulbos",
      "Flores": "verduras-flores",
      "Frutos": "verduras-frutos",
      "Semillas": "verduras-semillas"
    },
    "Carnes": {
      "Pollo": "carnes-pollo",
      "Cerdo": "carnes-cerdo",
      "Res": "carnes-res",
      "Pescados": "carnes-pescados",
      "Mariscos": "carnes-mariscos"
    },
    "Despensa": {
      "Arroz y granos": "despensa-arroz-granos",
      "Café": "despensa-cafe",
      "Chocolate": "despensa-chocolate",
      "Pastas y enlatados": "despensa-pastas-enlatados"
    },
    "Charcutería": {
      "Quesos": "charcuteria-quesos",
      "Frutos secos": "charcuteria-frutos-secos",
      "Carnes maduradas": "charcuteria-carnes-maduradas",
      "Encurtidos": "charcuteria-encurtidos"
    }
  };
  
  // Estado del carrito
  const cart = {
    items: new Map(), // key: productId, value: { product, qty }
    shippingFlat: 0,  // puedes ajustar a una tarifa fija si deseas
  
    add(product, qty = 1) {
      const existing = this.items.get(product.id);
      const newQty = (existing?.qty || 0) + qty;
      this.items.set(product.id, { product, qty: newQty });
      this.render();
    },
  
    increase(productId) {
      const i = this.items.get(productId);
      if (!i) return;
      i.qty++;
      this.items.set(productId, i);
      this.render();
    },
  
    decrease(productId) {
      const i = this.items.get(productId);
      if (!i) return;
      i.qty = Math.max(1, i.qty - 1);
      this.items.set(productId, i);
      this.render();
    },
  
    remove(productId) {
      this.items.delete(productId);
      this.render();
    },
  
    clear() {
      this.items.clear();
      this.render();
    },
  
    subtotal() {
      let s = 0;
      for (const { product, qty } of this.items.values()) {
        s += product.price * qty;
      }
      return s;
    },
  
    total() {
      return this.subtotal() + this.shippingFlat;
    },
  
    render() {
      // contador
      const count = Array.from(this.items.values()).reduce((a, b) => a + b.qty, 0);
      document.getElementById("cartCount").textContent = count;
  
      // lista
      const container = document.getElementById("cartItems");
      container.innerHTML = "";
      for (const { product, qty } of this.items.values()) {
        const item = document.createElement("div");
        item.className = "cart-item";
        item.innerHTML = `
          <img class="cart-item__img" src="${product.img}" alt="${product.name}" />
          <div class="cart-item__info">
            <p class="cart-item__name">${product.name}</p>
            <p class="cart-item__price">${formatCOP(product.price)} ${product.unit}</p>
            <p class="cart-item__price">Subtotal: ${formatCOP(product.price * qty)}</p>
          </div>
          <div class="cart-item__controls">
            <div class="qty" aria-label="Cantidad">
              <button aria-label="Disminuir" data-action="decrease" data-id="${product.id}">–</button>
              <span>${qty}</span>
              <button aria-label="Aumentar" data-action="increase" data-id="${product.id}">+</button>
            </div>
            <button class="remove-button" data-action="remove" data-id="${product.id}">Eliminar</button>
          </div>
        `;
        container.appendChild(item);
      }
  
      // resumen
      document.getElementById("cartShipping").textContent = formatCOP(this.shippingFlat);
      document.getElementById("cartSubtotal").textContent = formatCOP(this.subtotal());
      document.getElementById("cartTotal").textContent = formatCOP(this.total());
    }
  };
  
  // Render del catálogo
  function renderCatalog() {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "";
  
    Object.entries(catalogData).forEach(([categoryName, subcats]) => {
      Object.entries(subcats).forEach(([subName, products]) => {
        const sectionId = sectionAnchors[categoryName]?.[subName] || `${categoryName}-${subName}`.toLowerCase().replace(/\s+/g, "-");
        const section = document.createElement("section");
        section.className = "section section-anchor";
        section.id = sectionId;
  
        const header = document.createElement("div");
        header.className = "section__header";
        header.innerHTML = `
          <div>
            <h2>${categoryName} — ${subName}</h2>
            <p>${products.length} productos disponibles</p>
          </div>
          <a href="#inicio" class="btn btn--ghost">Volver al inicio</a>
        `;
        section.appendChild(header);
  
        const grid = document.createElement("div");
        grid.className = "grid";
  
        products.forEach((p) => {
          const card = document.createElement("article");
          card.className = "card";
          card.innerHTML = `
            <img class="card__media" loading="lazy" src="${p.img}" alt="${p.name}" />
            <div class="card__body">
              <h3 class="card__title">${p.name}</h3>
              <p class="card__desc">${p.desc}</p>
            </div>
            <div class="card__footer">
              <span class="price">${formatCOP(p.price)} ${p.unit}</span>
              <button class="add-button" data-id="${p.id}">Añadir</button>
            </div>
          `;
          grid.appendChild(card);
        });
  
        section.appendChild(grid);
        catalog.appendChild(section);
      });
    });
  }
  
  // Búsqueda y orden
  function filterAndSortProducts(query, sortMode) {
    const normalized = query.trim().toLowerCase();
  
    // regenerar catálogo con filtro y orden
    const filteredData = {};
    for (const [cat, subcats] of Object.entries(catalogData)) {
      filteredData[cat] = {};
      for (const [sub, products] of Object.entries(subcats)) {
        let list = products.filter(p =>
          !normalized ||
          p.name.toLowerCase().includes(normalized) ||
          p.desc.toLowerCase().includes(normalized)
        );
  
        switch (sortMode) {
          case "price-asc": list = list.sort((a, b) => a.price - b.price); break;
          case "price-desc": list = list.sort((a, b) => b.price - a.price); break;
          case "name-asc": list = list.sort((a, b) => a.name.localeCompare(b.name)); break;
          case "name-desc": list = list.sort((a, b) => b.name.localeCompare(a.name)); break;
          default: break; // relevance = original order
        }
  
        filteredData[cat][sub] = list;
      }
    }
  
    // pintar
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "";
    Object.entries(filteredData).forEach(([categoryName, subcats]) => {
      Object.entries(subcats).forEach(([subName, products]) => {
        const sectionId = sectionAnchors[categoryName]?.[subName] || `${categoryName}-${subName}`.toLowerCase().replace(/\s+/g, "-");
        const section = document.createElement("section");
        section.className = "section section-anchor";
        section.id = sectionId;
  
        const header = document.createElement("div");
        header.className = "section__header";
        header.innerHTML = `
          <div>
            <h2>${categoryName} — ${subName}</h2>
            <p>${products.length} productos disponibles</p>
          </div>
          <a href="#inicio" class="btn btn--ghost">Volver al inicio</a>
        `;
        section.appendChild(header);
  
        const grid = document.createElement("div");
        grid.className = "grid";
  
        products.forEach((p) => {
          const card = document.createElement("article");
          card.className = "card";
          card.innerHTML = `
            <img class="card__media" loading="lazy" src="${p.img}" alt="${p.name}" />
            <div class="card__body">
              <h3 class="card__title">${p.name}</h3>
              <p class="card__desc">${p.desc}</p>
            </div>
            <div class="card__footer">
              <span class="price">${formatCOP(p.price)} ${p.unit}</span>
              <button class="add-button" data-id="${p.id}">Añadir</button>
            </div>
          `;
          grid.appendChild(card);
        });
  
        section.appendChild(grid);
        catalog.appendChild(section);
      });
    });
  }
  
  // Eventos globales
  function setupEvents() {
    // Añadir a carrito desde tarjetas
    document.addEventListener("click", (e) => {
      const addBtn = e.target.closest(".add-button");
      if (addBtn) {
        const productId = addBtn.dataset.id;
        const product = findProductById(productId);
        if (product) {
          cart.add(product, 1);
          openCart();
        }
      }
  
      // Controles de carrito
      const actionBtn = e.target.closest("[data-action]");
      if (actionBtn) {
        const { action, id } = actionBtn.dataset;
        if (action === "increase") cart.increase(id);
        if (action === "decrease") cart.decrease(id);
        if (action === "remove") cart.remove(id);
      }
    });
  
    // Abrir/cerrar carrito
    document.getElementById("openCart").addEventListener("click", openCart);
    document.getElementById("closeCart").addEventListener("click", closeCart);
    document.getElementById("cartBackdrop").addEventListener("click", closeCart);
  
    // Vaciar carrito
    document.getElementById("clearCart").addEventListener("click", () => {
      if (confirm("¿Deseas vaciar el carrito?")) {
        cart.clear();
      }
    });
  
    // Checkout
    document.getElementById("checkout").addEventListener("click", () => {
      const total = cart.total();
      if (cart.items.size === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
      alert(`Procediendo al pago. Total a pagar: ${formatCOP(total)}. (Flujo de pago pendiente de integración)`);
    });
  
    // Búsqueda y orden
    const search = document.getElementById("search");
    const sort = document.getElementById("sort");
    const applyFilter = () => filterAndSortProducts(search.value, sort.value);
  
    search.addEventListener("input", applyFilter);
    sort.addEventListener("change", applyFilter);
  }
  
  // Helpers
  function findProductById(id) {
    for (const subcats of Object.values(catalogData)) {
      for (const products of Object.values(subcats)) {
        const match = products.find((p) => p.id === id);
        if (match) return match;
      }
    }
    return null;
  }
  
  function openCart() {
    document.getElementById("cartPanel").classList.add("open");
    document.getElementById("cartBackdrop").classList.add("open");
    document.getElementById("cartPanel").setAttribute("aria-hidden", "false");
    document.getElementById("cartBackdrop").setAttribute("aria-hidden", "false");
  }
  
  function closeCart() {
    document.getElementById("cartPanel").classList.remove("open");
    document.getElementById("cartBackdrop").classList.remove("open");
    document.getElementById("cartPanel").setAttribute("aria-hidden", "true");
    document.getElementById("cartBackdrop").setAttribute("aria-hidden", "true");
  }
  
  // Inicialización
  document.addEventListener("DOMContentLoaded", () => {
    renderCatalog();
    setupEvents();
    cart.render();
  });

  






