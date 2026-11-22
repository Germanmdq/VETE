// Catálogo de ejemplo. Reemplazá nombres, precios y fotos por los reales.
export type Producto = { slug: string; nombre: string; categoria: string; precio: number; emoji: string; color: string; descripcion: string };

export const CATEGORIAS = ["Alimento", "Juguetes", "Higiene", "Accesorios", "Salud"] as const;

export const PRODUCTOS: Producto[] = [
  { slug: "alimento-adulto-15kg", nombre: "Alimento premium adulto 15 kg", categoria: "Alimento", precio: 68900, emoji: "🥣", color: "#FA8930", descripcion: "Alimento completo y balanceado para perros adultos, con proteínas de calidad y fibras que cuidan la digestión." },
  { slug: "alimento-cachorro-3kg", nombre: "Alimento cachorro 3 kg", categoria: "Alimento", precio: 24500, emoji: "🐶", color: "#8FD6E5", descripcion: "Nutrición pensada para el crecimiento: huesos fuertes, buen desarrollo y mucha energía." },
  { slug: "snacks-dentales", nombre: "Snacks dentales x 10", categoria: "Alimento", precio: 7800, emoji: "🦴", color: "#17B461", descripcion: "Premios que ayudan a reducir el sarro y refrescan el aliento mientras los disfruta." },
  { slug: "pelota-resistente", nombre: "Pelota resistente", categoria: "Juguetes", precio: 4200, emoji: "🎾", color: "#17B461", descripcion: "Goma natural resistente para jugar a la pelota sin romperla en el primer día." },
  { slug: "soga-mordedor", nombre: "Soga mordedor", categoria: "Juguetes", precio: 5600, emoji: "🪢", color: "#FA8930", descripcion: "Ideal para tirar y masticar. Ayuda a descargar energía y cuida los dientes." },
  { slug: "peluche-sonoro", nombre: "Peluche sonoro", categoria: "Juguetes", precio: 6900, emoji: "🧸", color: "#EB5BA0", descripcion: "Suave, con sonido y costuras reforzadas. Para los más mimosos." },
  { slug: "shampoo-hipoalergenico", nombre: "Shampoo hipoalergénico 500 ml", categoria: "Higiene", precio: 9800, emoji: "🧴", color: "#8FD6E5", descripcion: "Limpia suave, deja el pelo brillante y es apto para pieles sensibles." },
  { slug: "cepillo-deslanador", nombre: "Cepillo deslanador", categoria: "Higiene", precio: 8700, emoji: "🪮", color: "#EB5BA0", descripcion: "Quita el subpelo y reduce la muda en casa. Mango ergonómico." },
  { slug: "correa-reforzada", nombre: "Correa reforzada 1,5 m", categoria: "Accesorios", precio: 11500, emoji: "🦮", color: "#232F61", descripcion: "Correa cómoda y resistente, con costuras reforzadas y mango acolchado." },
  { slug: "cama-mullida", nombre: "Cama mullida talle M", categoria: "Accesorios", precio: 38900, emoji: "🛏️", color: "#FA8930", descripcion: "Relleno suave y base antideslizante. Funda lavable." },
  { slug: "antipulgas-pipeta", nombre: "Pipeta antipulgas", categoria: "Salud", precio: 12300, emoji: "💧", color: "#17B461", descripcion: "Protección mensual contra pulgas y garrapatas. Consultá la dosis con tu veterinario." },
  { slug: "vitaminas-articulaciones", nombre: "Suplemento para articulaciones", categoria: "Salud", precio: 17800, emoji: "💊", color: "#232F61", descripcion: "Apoyo para articulaciones y movilidad, especialmente en perros mayores." },
];

export const precio = (n: number) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(n);
