import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type DashboardSidebarNavSubItem = {
    name: string;
    path: string;
    badge?: string;
};
  
export type DashboardSidebarNavItem = {
    name: string;
    path: string;
    icon: IconType;
    badge?: string;
    sub?: DashboardSidebarNavSubItem[];
};

export type DashboardProviderProps = {
    children: ReactNode;
}

export type DashboardContextType = {
    isDesktopSidebarOpened: boolean;
    isMobileSidebarOpened: boolean;
    onSidebarToggle: () => void;
};

export type DashboardSidebarItemProps = {
    item: DashboardSidebarNavItem;
    pathname: string;
};

export type DashboardSidebarProps = {
    items: DashboardSidebarNavItem[];
};

export type DashboardLayoutProps = {
    sidebarFor: 'admin' | 'user';
    children: ReactNode;
 };