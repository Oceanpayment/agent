import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "subscripions-api/subscription",
    },
    {
      type: "category",
      label: "Create Quickpay ID",
      items: [
        {
          type: "doc",
          id: "subscripions-api/apple-pay-google-pay",
          label: "ApplePay&GooglePay",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "subscripions-api/alternative-payments",
          label: "Alternative Payments",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "subscripions-api/klarna",
          label: "Klarna",
          className: "api-method post",
        },
      ],
    },
    {
          type: "doc",
          id: "subscripions-api/query",
          label: "Query Quickpay ID",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "subscripions-api/cancel",
          label: "Cancel Quickpay ID",
          className: "api-method post",
        },
    {
      type: "category",
      label: "Deduction",
      items: [
        {
          type: "doc",
          id: "subscripions-api/directpay",
          label: "Directpay",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
