import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Account Fund",
      link: {
        type: "doc",
        id: "opccount-api/account-funds",
      },
      items: [
        {
          type: "doc",
          id: "opccount-api/funding-details-enquiry",
          label: "Funding Details Enquiry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/check-balances",
          label: "Check Balances",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Withdrawal Account",
      link: {
        type: "doc",
        id: "opccount-api/withdrawal-account",
      },
      items: [
        {
          type: "doc",
          id: "opccount-api/enquiry-withdrawal-account-list",
          label: "Enquiry Withdrawal Account List",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/new-withdrawal-account",
          label: "New Withdrawal Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/modification-of-withdrawal-account",
          label: "Modification of Withdrawal Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/delete-withdrawal-bank-account",
          label: "Delete Withdrawal Bank Account",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payout Account",
      link: {
        type: "doc",
        id: "opccount-api/pobo-service-payee-bank",
      },
      items: [
        {
          type: "doc",
          id: "opccount-api/check-the-list-of-payee-bank-accounts",
          label: "Check the List of Payee Bank Accounts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/new-payee-account",
          label: "New Payee Account",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/deletion-of-payee-account",
          label: "Deletion of Payee Account",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Withdrawal",
      link: {
        type: "doc",
        id: "opccount-api/withdrawal",
      },
      items: [
        {
          type: "doc",
          id: "opccount-api/withdrawal-record-enquiry",
          label: "Withdrawal Record Enquiry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/withdrawal-inquiry",
          label: "Withdrawal Inquiry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/withdrawal-application",
          label: "Withdrawal Application",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payout",
      link: {
        type: "doc",
        id: "opccount-api/pobo-interface",
      },
      items: [
        {
          type: "doc",
          id: "opccount-api/application-for-pobo",
          label: "Application for POBO",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/inquiry-and-confirmation-of-deduction",
          label: "Inquiry And Confirmation of Deduction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/pobo-records-enquiry",
          label: "POBO Records Enquiry",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/download-bank-slip",
          label: "Download Bank slip",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "opccount-api/cancellation-of-pobo-application",
          label: "Cancellation of POBO Application",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
