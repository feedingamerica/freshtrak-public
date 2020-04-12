/**
 * Created by Basil on 12/02/2020.
 */
import React from 'react';

const MenuPermissionContext = React.createContext({});

export const MenuPermissionProvider = MenuPermissionContext.Provider;
export const MenuPermissionConsumer = MenuPermissionContext.Consumer;
export default MenuPermissionContext;