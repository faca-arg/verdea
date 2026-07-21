import type { ReactNode } from "react";
import clsx from "clsx";

export interface HeaderProps {
  logoSrc: string;
  logoAlt?: string;
  search?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function Header({ logoSrc, logoAlt = "VERDEA", search, actions, className }: HeaderProps) {
  return <header className={clsx("v-header verdea-ui", className)}><div className="v-header__inner"><a className="v-header__brand" href="/" aria-label="Ir al inicio"><img src={logoSrc} alt={logoAlt}/></a><div>{search}</div><div className="v-header__actions">{actions}</div></div></header>;
}

export interface AccountNavItem { id: string; label: string; href: string; icon?: ReactNode; badge?: ReactNode; }
export interface AccountSidebarProps { logoSrc: string; items: AccountNavItem[]; currentId: string; footer?: ReactNode; className?: string; }

export function AccountSidebar({ logoSrc, items, currentId, footer, className }: AccountSidebarProps) {
  return <aside className={clsx("v-account-sidebar verdea-ui", className)}><a href="/" aria-label="Ir al inicio"><img src={logoSrc} alt="VERDEA" style={{height:42,width:"auto"}}/></a><nav aria-label="Navegación de cuenta">{items.map((item) => <a key={item.id} href={item.href} aria-current={item.id === currentId ? "page" : undefined}>{item.icon}<span>{item.label}</span>{item.badge && <span style={{marginLeft:"auto"}}>{item.badge}</span>}</a>)}</nav>{footer && <div style={{marginTop:"auto"}}>{footer}</div>}</aside>;
}
