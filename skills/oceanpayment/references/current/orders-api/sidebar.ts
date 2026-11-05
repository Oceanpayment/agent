import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
        {
          type: "doc",
          id: "orders-api/query-orders",
          label: "Order Status Query",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "orders-api/success-orders",
          label: "Success Orders",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "orders-api/business-orders",
          label: "Business Orders",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "orders-api/dispute-orders",
          label: "Dispute Orders",
          className: "api-method post",
        },
	{
          type: "category",
          label: "Disputes api Management",
          items: [
          {
            type: "category",
            label: "Disputes",
            items: [
                        {
                          type: "doc",
                          id: "oders-api/list-all-disputes",
                          label: "List All Disputes",
                          className: "api-method post",
                        },
                        {
                          type: "doc",
                          id: "oders-api/query-dispute-details",
                          label: "Query Dispute Details",
                          className: "api-method post",
                        },
                        {
                          type: "doc",
                          id: "oders-api/dispute-appeal",
                          label: "Dispute Appeal",
                          className: "api-method post",
                        },
              ]
            },
            {
              type: "category",
              label: "File Management",
              items: [
                        {
                          type: "doc",
                          id: "oders-api/list-all-files",
                          label: "File Upload",
                          className: "api-method post",
                        },
                        {
                          type: "doc",
                          id: "oders-api/file-upload",
                          label: "List All Files",
                          className: "api-method post",
                        },
                        {
                          type: "doc",
                          id: "oders-api/query-file-details",
                          label: "Query File Details",
                          className: "api-method post",
                        },
                  ]
            },
          ]
        },

        {
          type: "doc",
          id: "orders-api/pre-auth",
          label: "Pre-Auth",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "orders-api/refund",
          label: "Refund",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "orders-api/refund-query",
          label: "Refund Query",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "orders-api/upload-tracking",
          label: "Upload Tracking",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "orders-api/customs-upload",
          label: "Customs Upload",
          className: "api-method post",
        },
  ],
};

export default sidebar.apisidebar;
