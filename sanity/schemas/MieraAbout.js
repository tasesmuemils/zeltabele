export default {
    name: "MieraAbout",
    title: "Miera ielas Par Mums",
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
            name: "AboutDescription_3",
            title: "Par Mums 3. apraksts",
            type: "text",
        },
        {
            name: "GalleryImages",
            title: "Attēli Galerijai",
            type: "array",
            of: [{ type: "image", hotspot: true }],
        },
    ],
};
