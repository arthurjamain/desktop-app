export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';

export function openSidebar() {
  return OPEN_SIDEBAR;
}

export function closeSidebar() {
  return CLOSE_SIDEBAR;
}

export function toggle() {
  return (dispatch: () => void) => {
    const { sidebarOpen } = getState();
    dispatch(sidebarOpen ? openSidebar() : closeSidebar());
  };
}
