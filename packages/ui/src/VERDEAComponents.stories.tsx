import type { Meta, StoryObj } from "@storybook/react";
import { AccountSidebar, Button, Card, CheckoutSummary, FilterSidebar, Header, Input, ProductCard, Search } from "./index";

const meta: Meta = { title: "VERDEA/Component Library", tags: ["autodocs"] };
export default meta;
type Story = StoryObj;

export const Buttons: Story = { render: () => <div style={{display:"flex",gap:12,flexWrap:"wrap"}}><Button>Comprar</Button><Button variant="secondary">Ver detalles</Button><Button variant="ghost">Cancelar</Button><Button variant="danger">Eliminar</Button><Button loading>Procesando</Button></div> };

export const Forms: Story = { render: () => <div style={{width:520,display:"grid",gap:16}}><Search placeholder="Buscar plantas, macetas, sustratos..."/><Input label="Correo electrónico" defaultValue="ana.garcia@email.com"/><Input label="Código postal" error="Ingresá un código postal válido"/></div> };

export const Product: Story = { render: () => <div style={{width:260}}><ProductCard imageSrc="https://images.unsplash.com/photo-1614594575810-0ea6b6a32622?auto=format&fit=crop&w=500&q=80" imageAlt="Monstera Deliciosa" badge="Fácil cuidado" title="Monstera Deliciosa" description="Ideal para interiores luminosos" price="$19.900" stock="Stock: 24"/></div> };

export const Filters: Story = { render: () => <FilterSidebar sections={[{id:"category",title:"Categorías",options:[{id:"all",label:"Todas las plantas",count:128,checked:true},{id:"foliage",label:"Plantas de follaje",count:42}]},{id:"care",title:"Nivel de cuidado",options:[{id:"beginner",label:"Principiante"},{id:"intermediate",label:"Intermedio"}]}]}/> };

export const Checkout: Story = { render: () => <div style={{width:390}}><CheckoutSummary itemCount={4} lines={[{id:"subtotal",label:"Subtotal",value:"$52.600"},{id:"shipping",label:"Envío",value:"Gratis"},{id:"discount",label:"Descuento",value:"-$5.260"}]} total="$47.340"/></div> };

export const Navigation: Story = { parameters:{layout:"fullscreen"}, render: () => <><Header logoSrc="/assets/brand/logo/master/verdea-lockup-horizontal.svg" search={<Search placeholder="Buscar plantas..."/>} actions={<><span>Favoritos</span><span>Mi cuenta</span><span>Carrito</span></>}/><div style={{height:24}}/><div style={{display:"flex",height:600}}><AccountSidebar logoSrc="/assets/brand/logo/master/verdea-lockup-horizontal.svg" currentId="account" items={[{id:"home",label:"Inicio",href:"#"},{id:"shop",label:"Tienda",href:"#"},{id:"orders",label:"Mis pedidos",href:"#"},{id:"plants",label:"Mis plantas",href:"#"},{id:"account",label:"Mi cuenta",href:"#"}]}/><Card style={{flex:1,margin:24,padding:24}}>Contenido de Mi cuenta</Card></div></> };
