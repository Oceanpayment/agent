import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
        {
          type: "doc",
          id: "payment-api/embedded",
          label: "Embedded",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "payment-api/host-page-controlled",
          label: "Hostpage",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "payment-api/host-page-auto",
          label: "Hostpage2",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "payment-api/link",
          label: "Link",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "payment-api/pos",
          label: "POS",
          className: "api-method post",
        },

  ],
};

export default sidebar.apisidebar;
