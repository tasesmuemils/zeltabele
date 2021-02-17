export default {
    name: "KanieruStudyPlans",
    title: "Kaņiera ielas Mācību plāns",
    type: "document",
    fields: [
        {
            name: "season",
            title: "Gadalaiks",
            type: "string",
            options: {
                list: [
                    { value: "Rudens", title: "Rudens" },
                    { value: "Ziema", title: "Ziema" },
                    { value: "Pavasaris", title: "Pavasaris" },
                    { value: "Vasara", title: "Vasara" },
                ], // <-- predefined values
            },
        },
        {
            title: "Pirmais mēnesis",
            name: "month_1",
            type: "month",
        },
        {
            title: "Otrais mēnesis",
            name: "month_2",
            type: "month",
        },
        {
            title: "Trešais mēnesis",
            name: "month_3",
            type: "month",
        },
        {
            title: "Svētki",
            name: "celebrations",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
};
