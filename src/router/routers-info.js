import Home from '../views/Home.vue'
import About from '../views/Home.vue'
import Orders from '../views/orders/Orders.vue'
import KitchenRoom from '../views/kitchen-room/KitchenRoom.vue'
import Categories from '../views/manager/categories/Categories.vue'
import CategoryAddOrEdit from '../views/manager/categories/CategoryAddOrEdit.vue'
import Manager from '../views/manager/Manager.vue'
import Employees from '../views/manager/employees/Employees.vue'
import EmployeeAddOrEdit from '../views/manager/employees/EmployeeAddOrEdit.vue'
import MenuItems from '../views/manager/menu-items/MenuItems.vue'
import MenuItemAddOrEdit from '../views/manager/menu-items/MenuItemAddOrEdit.vue'
import Tables from '../views/manager/tables/Tables.vue'
import TableAddOrEdit from '../views/manager/tables/TableAddOrEdit.vue'
import Taxes from '../views/manager/taxes/Taxes.vue'
import TaxeAddOrEdit from '../views/manager/taxes/TaxeAddOrEdit.vue'


import MenuConfig from '../views/manager/MenuConfig.vue'

import Login from '../views/login/Login.vue'

const routersInfo = {
    home: {
        path: '/',
        name: 'Home',
        component: Home
    },
    about: {
        path: '/about',
        name: 'About',
        component: About
    },
    menuconfig: {
        path: '/menu-configuration',
        name: 'MenuConfig',
        component: MenuConfig
    },
    orders: {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    kitchenroom: {
        path: '/kitchen-room',
        name: 'KitchenRoom',
        component: KitchenRoom
    },
    Login: {
        path: '/login',
        name: 'Login',
        component: Login
    },
    manager: {
        path: '/manager',
        name: 'manager',
        component: Manager,
        title: "Inicio"
    },
    categories: {
        path: '/manager/categories',
        name: 'Categories',
        component: Categories,
        title: "Lista de categorias"
    },
    categoryCreate: {
        path: '/manager/categories/create',
        name: 'CategoryAdd',
        component: CategoryAddOrEdit,
        title: "Agregar nueva categoria"
    },
    categoryEdit: {
        path: '/manager/categories/:id/edit',
        name: 'CategoryEdit',
        component: CategoryAddOrEdit,
        title: "Editar información de la categoria"
    },
    employees: {
        path: '/manager/employees',
        name: 'Employees',
        component: Employees,
        title: "Lista de empleados"
    },
    employeeCreate: {
        path: '/manager/employees/create',
        name: 'EmployeeAdd',
        component: EmployeeAddOrEdit,
        title: "Agregar nuevo empleado"
    },
    employeeEdit: {
        path: '/manager/employees/:id/edit',
        name: 'EmployeeEdit',
        component: EmployeeAddOrEdit,
        title: 'Editar información del empleado'
    },
    menuItems: {
        path: '/manager/menu-items',
        name: 'MenuItems',
        component: MenuItems,
        title: "Lista de items del menu"
    },
    menuItemCreate: {
        path: '/manager/menu-items/create',
        name: 'MenuItemAdd',
        component: MenuItemAddOrEdit,
        title: "Agregar nuevo item al menu"
    },
    menuItemEdit: {
        path: '/manager/menu-items/:id/edit',
        name: 'MenuItemEdit',
        component: MenuItemAddOrEdit,
        title: 'Editar información del item del menu'
    },
    tables: {
        path: '/manager/tables',
        name: 'Tables',
        component: Tables,
        title: "Lista de mesas de la sucursal"
    },
    tableCreate: {
        path: '/manager/tables/create',
        name: 'TableAdd',
        component: TableAddOrEdit,
        title: "Agregar nueva mesa"
    },
    tableEdit: {
        path: '/manager/tables/:id/edit',
        name: 'TableEdit',
        component: TableAddOrEdit,
        title: "Editar información de la mesa"
    },
    taxes: {
        path: '/manager/taxes',
        name: 'Taxes',
        component: Taxes,
        title: "Lista de los impuestos"
    },
    taxeCreate: {
        path: '/manager/taxes/create',
        name: 'TaxeAdd',
        component: TaxeAddOrEdit,
        title: "Agregar nuevo impuesto"
    },
    taxeEdit: {
        path: '/manager/taxes/:id/edit',
        name: 'TaxeEdit',
        component: TaxeAddOrEdit,
        title: "Editar información del impuestos"
    },

};

export default routersInfo;