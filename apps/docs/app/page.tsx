"use client";

import { AccountSidebar, Button, Card, CheckoutSummary, FilterSidebar, Header, Input, ProductCard, Search } from "@verdea/ui";

const plant = (leaf = "#2e8b57", pot = "#151515") =>
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><radialGradient id="b" cx="50%" cy="40%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f4f7f2"/></radialGradient><filter id="s"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#153c24" flood-opacity=".18"/></filter></defs><rect width="500" height="500" fill="url(#b)"/><g filter="url(#s)"><ellipse cx="250" cy="425" rx="76" ry="17" fill="#d6d7cf"/><path d="M250 390V185" stroke="#125d32" stroke-width="13" stroke-linecap="round"/><path d="M245 237C160 225 118 154 133 86c75 5 119 54 112 151Z" fill="${leaf}"/><path d="M254 267c78-18 125-77 111-148-70 7-111 63-111 148Z" fill="#1e7c45"/><path d="M248 326c-63-5-100-46-97-97 54-1 92 35 97 97Z" fill="#79c68b"/><path d="M255 348c66-16 101-63 91-116-56 6-91 49-91 116Z" fill="#3f9c5e"/><path d="M202 383h96l-15 75h-66Z" fill="${pot}"/><path d="M198 378h104l-8 18h-88Z" fill="#222"/></g></svg>`);

const filters = [
  { id: "type", title: "Tipo de planta", options: [{ id: "interior", label: "Interior", count: 42, checked: true }, { id: "exterior", label: "Exterior", count: 31 }, { id: "aromaticas", label: "Aromáticas", count: 18 }] },
  { id: "care", title: "Nivel de cuidado", options: [{ id: "easy", label: "Fácil", count: 27, checked: true }, { id: "medium", label: "Intermedio", count: 39 }, { id: "advanced", label: "Avanzado", count: 16 }] },
];

const accountItems = [
  { id: "profile", label: "Mi cuenta", href: "#" },
  { id: "orders", label: "Mis pedidos", href: "#" },
  { id: "addresses", label: "Direcciones", href: "#" },
  { id: "payments", label: "Métodos de pago", href: "#" },
  { id: "favorites", label: "Mis favoritos", href: "#" },
  { id: "plants", label: "Mis plantas", href: "#" },
];

function SectionTitle({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return <div className="board-title"><span>{number}</span><div><h2>{title}</h2><p>{subtitle}</p></div></div>;
}

export default function ComponentsReviewPage() {
  return (
    <main className="review-board">
      <section className="board-column board-column--left">
        <SectionTitle number="01" title="Primitives" subtitle="Botones, inputs, buscador y superficies." />

        <Card className="spec-card button-spec">
          <h3>Buttons</h3>
          <div className="state-labels"><span>Primario</span><span>Hover</span><span>Presionado</span><span>Secundario</span></div>
          <div className="button-grid">
            <Button>🛒 Agregar al carrito</Button>
            <Button className="is-hover">Ver producto</Button>
            <Button className="is-pressed">Ver producto</Button>
            <Button variant="secondary">Ver producto</Button>
          </div>
          <div className="button-grid button-grid--secondary">
            <Button variant="secondary">♡ Favorito</Button>
            <Button disabled>🛒 Agregar al carrito</Button>
          </div>
          <div className="states-row"><div><small>Focus</small><Button className="is-focus">🛒 Agregar al carrito</Button></div><div><small>Loading</small><Button loading>Cargando…</Button></div><div className="icon-buttons"><small>Icon button</small><div><button>♡</button><button>⇄</button><button>🛒<b>4</b></button></div></div></div>
        </Card>

        <Card className="spec-card">
          <h3>Inputs & Search</h3>
          <div className="input-grid"><div><small>Input · Default</small><Input placeholder="Ej. Ana Pérez" /></div><div><small>Input · Focus</small><Input defaultValue="Ej. Ana Pérez" className="demo-focus" /></div><div><small>Input · Error</small><Input defaultValue="1414" error="Revisá el código ingresado." /></div></div>
          <div className="search-grid"><div><small>Search · Default</small><Search placeholder="Buscar plantas, macetas, sustratos..." endAction={<span>⌕</span>} /></div><div><small>Search · Focus</small><Search className="demo-focus-wrap" placeholder="Buscar plantas, macetas, sustratos..." endAction={<span>⌕</span>} /></div></div>
        </Card>

        <Card className="spec-card surface-spec"><h3>Card</h3><p>Superficie con borde sutil, fondo cálido y elevación delicada.</p><div className="surface-row"><div><small>Default</small><i /></div><div><small>Hover</small><i className="hover" /></div><div><small>Active</small><i className="active" /></div><div><small>Selected</small><i className="selected" /></div></div></Card>

        <SectionTitle number="03" title="Navigation & Account" subtitle="Navegación principal y cuenta de usuario." />
      </section>

      <section className="board-column board-column--middle">
        <SectionTitle number="02" title="Commerce" subtitle="Catálogo, filtros y resumen transaccional." />
        <Card className="spec-card product-variants">
          <div className="variant-head"><span>ProductCard · Default</span><span>ProductCard · Hover</span><span>ProductCard · Featured</span></div>
          <div className="variant-grid">
            <ProductCard imageSrc={plant()} imageAlt="Monstera" badge="Fácil cuidado" title="Monstera Deliciosa" description="Ideal para interiores luminosos" price="$19.900" stock="Stock: 24 unidades" favoriteAction={<button className="heart">♡</button>} />
            <ProductCard className="force-hover" imageSrc={plant("#42a567")} imageAlt="Monstera" badge="Fácil cuidado" title="Monstera Deliciosa" description="Ideal para interiores luminosos" price="$19.900" stock="Stock: 24 unidades" favoriteAction={<button className="heart">♡</button>} />
            <ProductCard className="featured-card" imageSrc={plant("#2a914f")} imageAlt="Monstera" badge="✿ Más vendido" title="Monstera Deliciosa" description="Ideal para interiores luminosos" price="$19.900" stock="Stock: 24 unidades" favoriteAction={<button className="heart">♡</button>} />
          </div>
        </Card>

        <Card className="spec-card commerce-grid-card">
          <FilterSidebar sections={filters} onClear={() => undefined} />
          <div className="mini-grid">
            {["Ficus Lyrata","Lavanda","Sansevieria Laurentii","Poto Dorado"].map((title,index)=><ProductCard key={title} imageSrc={plant(["#2f8e50","#7c65b8","#739c38","#49a56d"][index])} imageAlt={title} badge={["Fácil cuidado","Aromática","Purifica el aire","Colgante"][index]} title={title} description="Hojas grandes y decorativas" price={["$24.900","$8.500","$9.800","$7.900"][index]} stock={["Stock: 18","Stock: 30","Stock: 12","Stock: 18"][index]} favoriteAction={<button className="mini-heart">♡</button>} />)}
          </div>
        </Card>
      </section>

      <section className="board-column board-column--right">
        <SectionTitle number="02" title="Commerce" subtitle="(cont.)" />
        <CheckoutSummary title="CheckoutSummary" lines={[{id:"subtotal",label:"Subtotal",value:"$ 102.480"},{id:"delivery",label:"Envío",value:"Gratis"},{id:"discount",label:"Descuento VERDEA",value:"− $ 8.000"}]} total="$ 94.480" couponSlot={<Input placeholder="◇  Código de descuento" />} />
        <Card className="trust-list"><div>▱ <span><strong>Envíos rápidos y seguros</strong><small>A toda Colombia</small></span></div><div>⟳ <span><strong>Devoluciones fáciles</strong><small>Tenés 30 días para cambiar de opinión.</small></span></div><div>♢ <span><strong>Garantía VERDEA</strong><small>Plantas sanas o te cambiamos la planta.</small></span></div><div className="free-shipping">▱ <span><strong>Envío gratis</strong><small>En compras superiores a $60.000</small></span></div></Card>
        <Card className="account-panel"><h3>AccountSidebar</h3><div className="account-profile"><div className="avatar">A</div><span><strong>Ana Pérez</strong><small>ana.perez@email.com</small></span><b>VERDEA Lover</b></div><AccountSidebar logoSrc="/verdea-lockup-horizontal.svg" items={accountItems} currentId="profile" /></Card>
      </section>

      <section className="bottom-navigation">
        <Header logoSrc="/verdea-lockup-horizontal.svg" search={<Search placeholder="Buscar plantas, macetas, sustratos..." endAction={<span>⌕</span>} />} actions={<><Button size="sm">VERDEA Centro</Button><span>♡ Favoritos</span><span>🛒 Mi carrito</span><span>Hola, Ana⌄</span></>} />
        <div className="category-nav">{["Plantas de interior","Plantas de exterior","Aromáticas","Huerta","Macetas","Sustratos y tierra","Fertilizantes y cuidado","Herramientas y riego","Regalos y kits","Ofertas"].map((item,index)=><span key={item} className={index===0?"active":index===9?"offer":""}>{item}</span>)}</div>
      </section>
    </main>
  );
}
