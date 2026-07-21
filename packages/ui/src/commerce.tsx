import type { ReactNode } from "react";
import { Button, Card } from "./primitives";

export interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  title: string;
  description?: string;
  price: string;
  stock?: string;
  favoriteAction?: ReactNode;
  onAdd?: () => void;
  addLabel?: string;
}

export function ProductCard({ imageSrc, imageAlt, badge, title, description, price, stock, favoriteAction, onAdd, addLabel = "Agregar" }: ProductCardProps) {
  return <Card as="article" className="v-product-card"><div className="v-product-card__media"><img src={imageSrc} alt={imageAlt}/>{favoriteAction}</div><div className="v-product-card__body">{badge && <span className="v-product-card__badge">{badge}</span>}<h3 className="v-product-card__title">{title}</h3>{description && <p className="v-product-card__description">{description}</p>}<span className="v-product-card__price">{price}</span>{stock && <span className="v-product-card__stock">{stock}</span>}<Button variant="ghost" size="sm" onClick={onAdd}>{addLabel}</Button></div></Card>;
}

export interface FilterOption { id: string; label: string; count?: number; checked?: boolean; }
export interface FilterSection { id: string; title: string; options: FilterOption[]; }
export interface FilterSidebarProps { title?: string; sections: FilterSection[]; onToggle?: (sectionId: string, optionId: string, checked: boolean) => void; onClear?: () => void; }

export function FilterSidebar({ title = "Filtrar productos", sections, onToggle, onClear }: FilterSidebarProps) {
  return <Card as="aside" className="v-filter" aria-label={title}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><strong>{title}</strong>{onClear && <button type="button" className="v-button v-button--ghost v-button--sm" onClick={onClear}>Limpiar</button>}</div>{sections.map((section) => <fieldset key={section.id} className="v-filter__section"><legend className="v-filter__title">{section.title}</legend>{section.options.map((option) => <label key={option.id}><input type="checkbox" checked={option.checked ?? false} onChange={(event) => onToggle?.(section.id, option.id, event.target.checked)}/><span>{option.label}</span>{option.count !== undefined && <span style={{marginLeft:"auto"}}>{option.count}</span>}</label>)}</fieldset>)}</Card>;
}

export interface CheckoutLine { id: string; label: string; value: string; muted?: boolean; }
export interface CheckoutSummaryProps { title?: string; lines: CheckoutLine[]; total: string; itemCount?: number; couponSlot?: ReactNode; onConfirm?: () => void; loading?: boolean; }

export function CheckoutSummary({ title = "Resumen de tu pedido", lines, total, itemCount, couponSlot, onConfirm, loading }: CheckoutSummaryProps) {
  return <Card as="aside" className="v-checkout-summary" aria-label={title}><header><strong>{title}{itemCount !== undefined ? ` (${itemCount})` : ""}</strong></header>{couponSlot}{lines.map((line) => <div key={line.id} className="v-checkout-summary__row" style={line.muted ? {color:"var(--text-secondary,#5f6761)"} : undefined}><span>{line.label}</span><span>{line.value}</span></div>)}<div className="v-checkout-summary__row v-checkout-summary__row--total"><span>Total</span><span>{total}</span></div><Button size="lg" onClick={onConfirm} loading={loading}>Confirmar pedido</Button></Card>;
}
