"use client";

import {
  AccountSidebar,
  Button,
  Card,
  CheckoutSummary,
  FilterSidebar,
  Header,
  Input,
  ProductCard,
  Search,
} from "@verdea/ui";

const productImage =
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><rect width="640" height="640" fill="#f4f5f2"/><ellipse cx="320" cy="540" rx="105" ry="28" fill="#d7d3c7"/><path d="M320 520V220" stroke="#155e37" stroke-width="18"/><path d="M318 300C190 290 135 190 155 100c95 7 164 70 163 200Z" fill="#49a66d"/><path d="M322 360c120-26 179-112 159-203-95 12-158 84-159 203Z" fill="#2e8b57"/><path d="M320 410c-91-5-145-63-141-135 76-2 133 48 141 135Z" fill="#7fc990"/><path d="M260 505h120l-18 85h-84Z" fill="#b78b64"/></svg>`);

const filters = [
  {
    id: "type",
    title: "Tipo de planta",
    options: [
      { id: "interior", label: "Interior", count: 42, checked: true },
      { id: "exterior", label: "Exterior", count: 31 },
      { id: "aromaticas", label: "Aromáticas", count: 18 },
    ],
  },
  {
    id: "care",
    title: "Nivel de cuidado",
    options: [
      { id: "easy", label: "Fácil", count: 27 },
      { id: "medium", label: "Intermedio", count: 39 },
    ],
  },
];

const accountItems = [
  { id: "home", label: "Inicio", href: "#" },
  { id: "orders", label: "Mis pedidos", href: "#" },
  { id: "plants", label: "Mis plantas", href: "#", badge: "3" },
  { id: "favorites", label: "Favoritos", href: "#" },
  { id: "profile", label: "Mi cuenta", href: "#" },
];

export default function ComponentsReviewPage() {
  return (
    <main className="docs-shell">
      <Header
        logoSrc="/verdea-lockup-horizontal.svg"
        search={<Search placeholder="Buscar plantas, macetas, sustratos..." />}
        actions={<><Button variant="ghost" size="sm">Favoritos</Button><Button size="sm">Carrito · 3</Button></>}
      />

      <section className="docs-hero">
        <span className="docs-eyebrow">VERDEA DESIGN SYSTEM · 0.1.0</span>
        <h1>Revisión visual de componentes</h1>
        <p>Una superficie única para comparar los nueve componentes base antes de construir Home, Catálogo y Checkout.</p>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading"><span>01</span><div><h2>Primitives</h2><p>Botones, inputs, buscador y superficies.</p></div></div>
        <div className="docs-grid docs-grid--two">
          <Card className="docs-demo-card">
            <h3>Button</h3>
            <div className="docs-row"><Button>Acción principal</Button><Button variant="secondary">Secundaria</Button><Button variant="ghost">Ghost</Button><Button loading>Cargando</Button></div>
          </Card>
          <Card className="docs-demo-card">
            <h3>Input & Search</h3>
            <div className="docs-stack"><Input label="Nombre completo" placeholder="Ej. Ana Pérez" helpText="Así aparecerá en tus pedidos."/><Input label="Código postal" defaultValue="1414" error="Revisá el código ingresado."/><Search placeholder="Buscar en VERDEA"/></div>
          </Card>
          <Card className="docs-demo-card docs-span-two">
            <h3>Card</h3>
            <p>Superficie base con borde sutil, fondo blanco y elevación mínima. Debe contener información sin competir con ella.</p>
          </Card>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading"><span>02</span><div><h2>Commerce</h2><p>Catálogo, filtros y resumen transaccional.</p></div></div>
        <div className="docs-commerce-layout">
          <FilterSidebar title="Filtros" sections={filters} onClear={() => undefined}/>
          <div className="docs-product-grid">
            <ProductCard imageSrc={productImage} imageAlt="Monstera deliciosa" badge="Fácil cuidado" title="Monstera deliciosa" description="Maceta de 18 cm · 60–75 cm" price="$ 34.990" stock="Stock disponible" favoriteAction={<button className="docs-heart" aria-label="Agregar a favoritos">♡</button>}/>
            <ProductCard imageSrc={productImage} imageAlt="Ficus lyrata" badge="Interior" title="Ficus lyrata" description="Maceta de 20 cm · 80–95 cm" price="$ 42.500" stock="Últimas 4 unidades" favoriteAction={<button className="docs-heart" aria-label="Agregar a favoritos">♡</button>}/>
          </div>
          <CheckoutSummary title="Resumen de tu pedido" itemCount={3} lines={[{id:"subtotal",label:"Subtotal",value:"$ 102.480"},{id:"delivery",label:"Envío",value:"Gratis",muted:true},{id:"discount",label:"Descuento VERDEA",value:"− $ 8.000"}]} total="$ 94.480" couponSlot={<Input placeholder="Código de descuento" aria-label="Código de descuento"/>}/>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading"><span>03</span><div><h2>Navigation</h2><p>Header público y sidebar de cuenta.</p></div></div>
        <div className="docs-sidebar-stage">
          <AccountSidebar logoSrc="/verdea-lockup-horizontal.svg" items={accountItems} currentId="orders" footer={<Card><strong>VERDEA Plus</strong><p>Beneficios para quienes hacen crecer su hogar.</p></Card>}/>
          <div className="docs-account-content"><span className="docs-eyebrow">MI CUENTA</span><h2>Hola, Ana</h2><p>Esta composición valida ancho, contraste, estados activos y convivencia del sidebar con el contenido principal.</p><Card><strong>Próximo pedido</strong><p>Entrega estimada: viernes de 14 a 18 h.</p></Card></div>
        </div>
      </section>
    </main>
  );
}
