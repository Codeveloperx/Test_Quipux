export const menu = {
  menuItems: [
    {
      id: "company",
      title: "Empresas",
      icon: "bi bi-building",
      isOpen: false,
      path: "/empresas",
      submenu: [{ id: 1, title: "Empresa" }],
    },
    {
      id: "articles",
      title: "Articulos",
      icon: "bi bi-file-earmark-text",
      isOpen: false,
      path: "/articulos",
      submenu: [{ id: 2, title: "Articulo" }],
    },
    {
      id: "contributors",
      title: "Colaboradores",
      icon: "bi bi-person",
      path: "/colaboradores",
      isOpen: false,
      submenu: [{ id: 3, title: "Colaboradores" }],
    },
  ],
};
