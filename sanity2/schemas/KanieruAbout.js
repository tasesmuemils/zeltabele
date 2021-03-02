export default {
    name: "KanieruAbout",
    title: "Kaņiera ielas Par Mums",
    type: "document",
    fields: [
        {
            name: "About",
            title: "Par Mums",
            type: "string",
        },
        {
            name: "AboutDescription_1_title",
            title: "Par Mums 1. nosaukums",
            type: "string",
        },
        {
            name: "AboutDescription_1",
            title: "Par Mums 1. apraksts",
            type: "text",
        },
        {
            name: "AboutDescription_2_title",
            title: "Par Mums 2. nosaukums",
            type: "string",
        },
        {
            name: "AboutDescription_2",
            title: "Par Mums 2. apraksts",
            type: "text",
        },
        {
            name: "AboutDescription_3_title",
            title: "Par Mums 3. nosaukums",
            type: "string",
        },
        {
            title: "Par Mums 3. apraksts - svētki",
            name: "AboutDescription_3_party",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
};
