import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function Button({ variant = "primary", size = "md", loading = false, leadingIcon, trailingIcon, className, children, disabled, ...props }: ButtonProps) {
  return <button className={clsx("v-button", `v-button--${variant}`, `v-button--${size}`, className)} disabled={disabled || loading} aria-busy={loading || undefined} {...props}>{leadingIcon}<span>{loading ? "Procesando…" : children}</span>{trailingIcon}</button>;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  error?: string;
}

export function Input({ id, label, helpText, error, className, ...props }: InputProps) {
  const inputId = id ?? props.name;
  const descriptionId = inputId ? `${inputId}-description` : undefined;
  return <label className="v-input-wrap" htmlFor={inputId}>{label && <span className="v-label">{label}</span>}<input id={inputId} className={clsx("v-input", className)} aria-invalid={Boolean(error)} aria-describedby={(helpText || error) ? descriptionId : undefined} {...props}/>{(error || helpText) && <span id={descriptionId} className={error ? "v-error" : "v-help"}>{error ?? helpText}</span>}</label>;
}

export interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  icon?: ReactNode;
  endAction?: ReactNode;
  onSearch?: (value: string) => void;
}

export function Search({ icon, endAction, onSearch, className, ...props }: SearchProps) {
  return <form className={clsx("v-search", className)} role="search" onSubmit={(event) => { event.preventDefault(); const data = new FormData(event.currentTarget); onSearch?.(String(data.get("search") ?? "")); }}>{icon}<input name="search" type="search" aria-label={props["aria-label"] ?? "Buscar"} {...props}/>{endAction}</form>;
}

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  as?: "article" | "section" | "div";
}

export function Card({ as: Tag = "div", className, ...props }: CardProps) {
  return <Tag className={clsx("v-card", className)} {...props}/>;
}
