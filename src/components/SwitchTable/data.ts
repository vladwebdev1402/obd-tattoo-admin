import ITable from "@/types/ITable";

export const tables: ITable[] = [
    {   
        class: true,
        link: "city",
        name: "Города"
    },
    { 
        class: true,
        link: "street",
        name: "Улицы"
    },
    { 
        class: true,
        link: "category",
        name: "Категории"
    },
    { 
        class: true,
        link: "brand",
        name: "Бренды"
    },
    { 
        class: true,
        link: "status",
        name: "Статусы заказа"
    },    
    { 
        class: true,
        link: "delivery",
        name: "Доставка"
    },
    { 
        class: true,
        link: "payment",
        name: "Оплата"
    },
    { 
        class: true,
        link: "service",
        name: "Доп. услуги"
    },
    
    { 
        class: true,
        link: "promocode",
        name: "Промокоды"
    },
    { 
        class: false,
        link: "order",
        name: "Заказы"
    },
    { 
        class: false,
        link: "item",
        name: "Товары"
    },
] 
