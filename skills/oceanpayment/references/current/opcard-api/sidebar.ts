import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    
    {
      type: "category",
      label: "Authorization",

      items: [
        {
          type: "doc",
          id: "opcard/create-token",
          label: "Create Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/refresh-token",
          label: "Refresh token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Create Card",
      link: {
        type: "doc",
        id: "opcard/virtualcard-creation",
      },
      items: [
        {
          type: "doc",
          id: "opcard/add-card",
          label: "Create Virtual Card",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/query-card-info",
          label: "Retrieve Virtual Card",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opcard/retrieve-card-and-cvv",
          label: "Retrieve Card And CVV",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opcard/activate-virtual-card",
          label: "Activate Virtual Card",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/suspend-virtual-card",
          label: "Suspend Virtual Card",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/close-virtual-card",
          label: "Close Virtual Card",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/update-virtual-card-config",
          label: "Update Virtual Card config",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/retrieve-virtual-card-config-limit",
          label: "Retrieve Virtual Card config limit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opcard/get-card-program",
          label: "Get Card Program",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Manage Card",
      link: {
        type: "doc",
        id: "opcard/virtualcard-management",
      },
      items: [
        {
          type: "doc",
          id: "opcard/list-virtual-cards",
          label: "List Virtual Cards",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/retrieve-virtual-card-status",
          label: "Retrieve Virtual Card Status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opcard/update-issuing-config",
          label: "Update Issuing config",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard-api/product-name",
          label: "Query Card Product Names",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard-api/account",
          label: "Create Sub-account",
          className: "api-method post",
        },        
        {
          type: "doc",
          id: "opcard/retrieve-issuing-transaction-history",
          label: "Retrieve Issuing Transaction History",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/retrieve-issuing-transaction-today",
          label: "Retrieve Issuing Transaction Today",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/create-cardholder",
          label: "Create Cardholder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/get-cardholders-card-holder-id-update",
          label: "Update cardholder",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/get-cardholder-details",
          label: "Get cardholder details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opcard/get-all-cardholders",
          label: "Get all Cardholders",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Manage Funds",
      link: {
        type: "doc",
        id: "opcard/fund-management",
      },
      items: [
        {
          type: "doc",
          id: "opcard/create-payment-intent",
          label: "Create Payment Intent",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/retrieve-payment-intent",
          label: "Retrieve Payment Intent",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opcard/cancel-payment-intent",
          label: "Cancel Payment Intent",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/create-load",
          label: "Create Load",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/confirm-load",
          label: "Confirm Load",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/cancel-load",
          label: "Cancel Load",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/retrieve-op-card-limit",
          label: "Retrieve OP Card Limit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opcard/retrieve-card-limit",
          label: "Retrieve Card Limit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opcard/create-payout",
          label: "Create Payout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/retrieve-payout",
          label: "Retrieve Payout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/retrieve-transfer",
          label: "Retrieve Transfer",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Manage Balance",
      link: {
        type: "doc",
        id: "opcard/balance-management",
      },
      items: [
        {
          type: "doc",
          id: "opcard/retrieve-account-balance",
          label: "Retrieve Account Balance",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "opcard/retrieve-balance-history",
          label: "Retrieve Balance History",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Webhook",
      link: {
        type: "doc",
        id: "opcard/webhook",
      },
      items: [
        {
          type: "doc",
          id: "opcard/webhook-list",
          label: "Webhook List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/create-webhook",
          label: "Create Webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/update-webhook",
          label: "Update Webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/get-events",
          label: "Events",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/subscribe",
          label: "Subscribe",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opcard/unsubscribe",
          label: "Unsubscribe",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
